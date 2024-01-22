import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayuotPageComponent } from './pages/layuot-page/layuot-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';


// localhost:4200/heroes/
const routes: Routes = [
  {
    path:'',
    component:LayuotPageComponent,
    children:[
      {
        path: 'new-hero',
        component:NewPageComponent
      },
      {
        path: 'search',
        component:SearchPageComponent
      },
      {
        path: 'edit/:id',
        component:NewPageComponent
      },
      {
        path: 'list',
        component:ListPageComponent
      },
      {
        //! colocar al final para que entren las
        //! demás rutas, ya que si esta al inicio todas las
        //! demás rutas coinciden
        path: ':id',
        component:HeroPageComponent
      },
      {
        path: '**',
        redirectTo:'list'
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
