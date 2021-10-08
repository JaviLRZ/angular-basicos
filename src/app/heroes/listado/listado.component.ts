import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent {

  heroes: string[] = ['Spiderman','Thor', 'Ironman', 'Hulk', 'Capitan America'];
  borrados:string[] = [];

heroesBorrado(){
    return this.borrados.join('<br>');
  }

  
restaurarHeroe(){
  if(this.borrados.length>0){
    let h = this.borrados.shift() || '';
    this.heroes.push(h );
    }
  }
borrarHeroe(){

   // this.heroes = [];

   // this.heroes.shift();

   if(this.heroes.length>0){
     let h = this.heroes.shift() || '';
     this.borrados.push(h );
   }
   
  }
}

