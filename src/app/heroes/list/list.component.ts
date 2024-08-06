import { Hero } from './../../../../../01-typescrip-intro/src/topics/08-classes';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[]=['Spiderman','Iron Man','Hulk','She hulk','Thor']
  public deletedHero?:string;

removeLastHero():void{
  this.deletedHero = this.heroNames.pop();
}
}

