import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template:`


    <h1> {{titulo}}</h1>
    <h3>La base es: <strong> {{base}} </strong></h3>

    <button (click)="acumularDown($event)" >+ {{base}}</button>

    <span>{{numero}}</span>

    <button (click)="acumular (- base)">- {{base}}</button>
    
    
    
    `
})

export class ContadorComponent{

    titulo: string = 'Contador App';
    numero:number = 5;
    base: number = 5;
  
    acumular( valor:any) {
      this.numero +=valor;
      
    }

    acumularDown( event:any) {
      this.numero +=5;
      

    }
}
