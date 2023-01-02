import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, map, Observable, of } from 'rxjs';
import { Job } from 'src/app/interfaces/job';
import { APIService } from 'src/app/services/api.service';
import * as Highcharts from 'highcharts';
import { Person } from 'src/app/interfaces/person';
import { PossibleSigns, Sign } from 'src/app/interfaces/sign';
import { FormControl, FormGroup } from '@angular/forms';
import { EMOTICONS, SIGNS_ELEMENTS } from 'src/app/constants/emoticons';
import { ChartService } from 'src/app/services/chart.service';
import { ChartFilter } from 'src/app/interfaces/chart-filter';

@Component({
  selector: 'job-page',
  templateUrl: 'job-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class JobPageComponent implements OnInit {

  SIGNS_COUNT: { sign: PossibleSigns, count: number, id: string }[] = [];

  EMOTICONS = EMOTICONS;
  SIGNS_ELEMENTS = SIGNS_ELEMENTS;
  Highcharts = Highcharts;
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartBySign: Highcharts.Options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'By Sign'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    series: []
  }; // required


  chartByElement: Highcharts.Options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'By Element'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    series: []
  }; // required

  chartByCardinality: Highcharts.Options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'By Cardinality'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    series: []
  }; // required


  chartCallback: Highcharts.ChartCallbackFunction = function (chart) { } // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false
  job$!: Observable<Job>;

  filter = new FormGroup({
    sex: new FormControl<'male' | 'female' | null>(null),
    element: new FormControl<'earth' | 'fire' | 'air' | 'water' | null>(null),
    quality: new FormControl<'fixed' | 'mutable' | 'cardinal' | null>(null),
    specialization: new FormControl('')
  });

  relatedPeople: Person[] = [];
  signs$!: Observable<Sign[]>;

  jobId!: string;

  constructor(
    private as: APIService,
    private ar: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private cs: ChartService
  ) { }

  ngOnInit() {
    this.signs$ = this.as.signs$;
    this.jobId = this.ar.snapshot.params['id'];
    this.job$ = this.as.jobs$.pipe(map(d => {
      return d.find((j) => {
        return j.id === this.jobId;
      }) as Job;
    }));

    const fsub = this.filter.valueChanges
      .subscribe((filter: ChartFilter) => {
        console.log('new value', filter);
        this.triggerChart(filter);
      });

    this.triggerChart(this.filter.value)
  }

  private triggerChart(filter: ChartFilter): void {
    const sub = forkJoin([
      this.job$,
      this.as.people$,
      this.as.signs$
    ])
      .subscribe({
        next: (ok: [Job, Person[], Sign[]]) => {
          const job = ok[0];
          let people = ok[1];
          let signs = ok[2];
          this.rebootSigns(signs);

          if (filter.element) {
            signs = signs.filter((s) => {
              return s.element === filter.element;
            })
          }

          if (filter.quality) {
            signs = signs.filter(s => {
              return s.quality === filter.quality;
            })
          }

          if (filter.element) {
            signs = signs.filter(s => {
              return s.element === filter.element;
            });
          }

          if (filter.specialization) {
            people = people.filter((p) => {
              return p.specialization === filter.specialization;
            });
          }

          const mappedSignsIds = signs.map(s => s.id);

          this.relatedPeople = people.filter(p => {
            const clause = p.job === job.id && mappedSignsIds.includes(p.sign);
            if (clause) {
              const spottedSignForCount = this.SIGNS_COUNT.find((s) => {
                return s.id === p.sign
              }) as any;
              spottedSignForCount.count++
            }
            return clause;
          });
          this.SIGNS_COUNT.sort((a, b) => {
            if (a.count < b.count) {
              return 1
            } else if (a.count === b.count) {
              return 0;
            } else {
              return -1;
            }
          })
          console.log('COUNT', this.SIGNS_COUNT);



          this.chartBySign.series = this.cs.buildSeriechartBySign(this.relatedPeople, ok[2], job, filter);
          this.chartBySign = {
            title: {
              text: `Job: ${job.name}`
            },
            ...this.chartBySign
          };

          this.chartByElement.series = this.cs.byElements(this.relatedPeople, ok[2], job);
          this.chartByElement = {
            title: {
              text: `Job: ${job.name}`
            },
            ...this.chartByElement
          };

          this.chartByCardinality.series = this.cs.byCardinality(this.relatedPeople, ok[2], job, filter);
          this.chartByCardinality = {
            title: {
              text: `Job: ${job.name}`
            },
            ...this.chartByCardinality
          };

          this.cd.detectChanges();
        }
      });
  }

  private rebootSigns(signs: Sign[]) {
    this.SIGNS_COUNT = signs.map((sign) => {
      return {
        sign: sign.name,
        count: 0,
        id: sign.id
      }
    });
  }



}
