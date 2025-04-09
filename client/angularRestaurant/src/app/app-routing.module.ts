import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './admin/category/category.component';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import { AdminAboutComponent } from './admin/admin-about/admin-about.component';
import { AdminChefComponent } from './admin/admin-chef/admin-chef.component';

const routes: Routes = [
  // Main Route Yapılandırması
  {
    path: '',
    component: MainLayoutComponent,
    children:[
    ]
  },

  // Admin Route Yapılandırması
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children:[
      {path: 'category', component: CategoryComponent},
      {path:'menu', component:AdminMenuComponent},
      {path:'about', component:AdminAboutComponent},
      {path:'chef', component:AdminChefComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
