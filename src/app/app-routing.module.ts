import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'sign/:id',
    loadChildren: () => import('./pages/sign/sign-page.module').then(m => m.SignPageModule)
  },
  {
    path: 'signs',
    loadChildren: () => import('./pages/signs/signs.module').then(m => m.SignsPageModule)
  },
  {
    path: 'jobs',
    loadChildren: () => import('./pages/jobs/jobs-page.module').then(m => m.JobsPageModule)
  },
  {
    path: 'jobs/:id',
    loadChildren: () => import('./pages/job/job-page.module').then(m => m.JobPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
