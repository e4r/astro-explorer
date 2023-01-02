import { Injectable } from '@angular/core';
import { ChartFilter } from 'src/app/interfaces/chart-filter';
import { EMOTICONS, SIGNS_ELEMENTS } from '../constants/emoticons';
import { Job } from '../interfaces/job';
import { Person } from '../interfaces/person';
import { Sign } from '../interfaces/sign';

@Injectable({ providedIn: 'root' })
export class ChartService {

  EMOTICONS = EMOTICONS;
  constructor() { }


  buildSeriechartBySign(relatedPeople: Person[], signs: Sign[], job: Job, filter: ChartFilter): Highcharts.SeriesOptionsType[] {
    signs = signs.sort((a, b) => {
      if (a.element > b.element) {
        return 1
      } else {
        return -1;
      }
    })
    const serie: Highcharts.SeriesOptionsType = {
      name: filter.specialization ? `${filter.specialization}` : job.name,
      data: signs.map((sign: Sign) => {
        return {
          name: `${sign.name} ${this.EMOTICONS[sign.name]} ${SIGNS_ELEMENTS[sign.name]}`,
          y: relatedPeople.filter((p) => {
            return p.sign === sign.id
          }).length,
          color: sign.color
        }
      }),
      type: 'pie'
    } as Highcharts.SeriesOptionsType;
    return [serie];
  }

  byElements(relatedPeople: Person[], signs: Sign[], job: Job): Highcharts.SeriesOptionsType[] {
    const signElements = {
      aries: 'fire',
      taurus: 'earth',
      gemini: 'air',
      cancer: 'water',
      leo: 'fire',
      virgo: 'earth',
      libra: 'air',
      scorpio: 'water',
      sagittarius: 'fire',
      capricorn: 'earth',
      aquarius: 'air',
      pisces: 'water',
    };

    const counter: any = {
      water: 0,
      fire: 0,
      air: 0,
      earth: 0
    }

    relatedPeople.map((c: Person) => {
      const sign = signs.find(s => s.id === c.sign) as Sign;
      counter[signElements[sign.name]] += 1
    });

    const serie: Highcharts.SeriesOptionsType = {
      name: job.name,
      data: [{
        name: `💧 Water<br />${this.EMOTICONS.cancer} Cancer<br />${EMOTICONS.scorpio} Scorpio<br />${EMOTICONS.pisces} Pisces`,
        y: counter.water,
        color: '#0000FF'
      }, {
        name: `🔥 Fire<br />${EMOTICONS.aries} Aries<br />${EMOTICONS.leo} Leo<br />${EMOTICONS.sagittarius} Sagittarius`,
        y: counter.fire,
        color: '#FF007F'
      }, {
        name: `⛰ Earth<br />${EMOTICONS.taurus} Taurus<br />${EMOTICONS.virgo} Virgo<br /> ${EMOTICONS.capricorn} Capricorn`,
        y: counter.earth,
        color: '#00FF80'
      }, {
        name: `🌬 Air<br />${EMOTICONS.gemini} Gemini<br />${EMOTICONS.libra} Libra<br />${EMOTICONS.aquarius} Aquarius`,
        y: counter.air,
        color: '#FFFF00'
      }],
      type: 'pie'
    } as Highcharts.SeriesOptionsType;
    return [serie];

  }

  byCardinality(relatedPeople: Person[], signs: Sign[], job: Job, filter: ChartFilter): Highcharts.SeriesOptionsType[] {
    const signsCardinalities = {
      aries: 'cardinal',
      taurus: 'fixed',
      gemini: 'mutable',
      cancer: 'cardinal',
      leo: 'fixed',
      virgo: 'mutable',
      libra: 'cardinal',
      scorpio: 'fixed',
      sagittarius: 'mutable',
      capricorn: 'cardinal',
      aquarius: 'fixed',
      pisces: 'mutable',
    };
    const counter: any = {
      cardinal: 0,
      fixed: 0,
      mutable: 0
    };

    relatedPeople.map((c: Person) => {
      const sign = signs.find(s => s.id === c.sign) as Sign;
      counter[signsCardinalities[sign.name]] += 1
    });

    const signsEls = {
      fire: {
        fixed: 'leo ♌️',
        mutable: 'sagittarius ♐️',
        cardinal: 'aries ♈︎'
      },
      earth: {
        fixed: 'taurus ♉︎',
        mutable: 'virgo ♍︎',
        cardinal: 'capricorn ♑️'
      },
      water: {
        fixed: 'scorpio ♏️',
        mutable: 'pisces ♓︎',
        cardinal: 'cancer ♋︎'
      },
      air: {
        fixed: 'aquarius ♒︎',
        mutable: 'gemini ♊︎',
        cardinal: 'libra ♎︎'
      },
    };

    let cardinalstrring = `${EMOTICONS.aries} Aries<br />${EMOTICONS.cancer} Cancer<br />${EMOTICONS.libra} Libra<br />${EMOTICONS.capricorn} Capricorn`;
    let fixedstring = `${EMOTICONS.taurus} Taurus<br />${EMOTICONS.leo} Leo<br />${EMOTICONS.scorpio} Scorpio<br />${EMOTICONS.aquarius} Aquarius`;
    let mutablestring = `${EMOTICONS.gemini} Gemini<br />${EMOTICONS.virgo} Virgo<br />${EMOTICONS.sagittarius} Sagittarius<br />${EMOTICONS.pisces} Pisces`;

    if (filter.element) {
      cardinalstrring = signsEls[filter.element].cardinal;
      fixedstring = signsEls[filter.element].fixed;
      mutablestring = signsEls[filter.element].mutable;
    }

    const serie: Highcharts.SeriesOptionsType = {
      name: job.name,
      data: [{
        name: 'Cardinal<br />' + cardinalstrring,
        y: counter.cardinal
      }, {
        name: 'Fixed<br />' + fixedstring,
        y: counter.fixed
      }, {
        name: 'Mutable<br />' + mutablestring,
        y: counter.mutable
      }],
      type: 'pie'
    } as Highcharts.SeriesOptionsType;
    return [serie];
  }
}
