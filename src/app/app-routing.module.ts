import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'book-create',
    loadChildren: () => import('./pages/book-create/book-create.module').then( m => m.BookCreatePageModule)
  },
  {
    path: 'book-details/:id',
    loadChildren: () => import('./pages/book-details/book-details.module').then( m => m.BookDetailsPageModule)
  },
  {
    path: 'book-see-details/:id',
    loadChildren: () => import('./pages/book-see-details/book-see-details.module').then( m => m.BookSeeDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
