import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';

@Component({
  selector: 'heroes-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent implements OnInit{

  public hero?: Hero;

  constructor(
    private heroesService: HeroesService,
    //servicio para accceder a la url
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ){}


  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      delay(3000),
      /*
       * switchMap es una herramienta poderosa para gestionar observables en
       * situaciones donde necesitas cambiar de un observable a otro, como
       * al realizar solicitudes HTTP, manejar formularios reactivos, o
       * coordinar flujos de eventos asincrónicos en Angular. Ayuda a evitar
       * problemas relacionados con la concurrencia y garantiza que solo se
       * maneje el resultado del observable más reciente.
       */
      switchMap( ({id }) => this.heroesService.getHeroById(id) )
    ).subscribe( hero=> {
      // método para retornar al usuario a list heroes si no existe el id
      if (!hero) return this.router.navigate(['/heroes/list'])
      // asignamos el valor del heroe a la propiedad hero
      this.hero = hero;
      console.log(this.hero);

      return;
    })
  }

  goBack():void{
    this.router.navigateByUrl('/heroes/list');
  }
}
