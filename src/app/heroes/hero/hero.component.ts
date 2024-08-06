import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string="Iron Man";
  public age:number=45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
   return `${this.name} - ${this.age}`;
  }

  changeHeroe():void{
    this.name="spiderman";
  }

  changeAge():void{
     this.age=25;
  }

  resetForm():void{
    this.name="Iron man";
    this.age=45;
    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML='<h1>Desde angular</h1>';
    //})
  }


}
