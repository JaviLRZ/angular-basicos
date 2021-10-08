import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.component.html'
})

export class HeroeComponent {

    nombre: string = 'Ironman';
    edad: number = 45;
    heroes:{name:string,age:number}[]=[{name:'Ironman',age:45},{name:'SpiderMan',age:23},{name:'Thor',age:2000},{name:'Viuda Negra',age:29},{name:'Hulk',age:40}];

    get nombreCapitalizado() {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
       // return this.nombre + ' - ' + this.edad;
    }

    cambiarNombre(): void{
        var nuevoNombre = this.nombre;
        var nuevaEdad = 0;
        while(nuevoNombre == this.nombre){
            var ale = Math.round(Math.random()*100) % this.heroes.length;
            nuevoNombre = this.heroes[ ale ].name;
            nuevaEdad =  this.heroes[ ale ].age;
        }
        

        this.nombre=nuevoNombre;
        this.edad=nuevaEdad;
       
        
    }

}