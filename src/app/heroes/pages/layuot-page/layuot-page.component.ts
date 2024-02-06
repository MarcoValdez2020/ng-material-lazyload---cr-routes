import { Component } from '@angular/core';

@Component({
  selector: 'heroes-layuot-page',
  templateUrl: './layuot-page.component.html',
  styles: ``
})
export class LayuotPageComponent {

  public sidebarItems =[
    {
      label:'Listado',
      icon:'label',
      url: './list'
    },
    {
      label:'Añadir',
      icon:'add',
      url: './new-hero'
    },
    {
      label:'Buscar',
      icon:'search',
      url: './search'
    },
  ]
}
