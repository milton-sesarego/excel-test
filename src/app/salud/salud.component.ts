import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person'

@Component({
  selector: 'app-salud',
  templateUrl: './salud.component.html',
  styleUrls: ['./salud.component.scss']
})
export class SaludComponent implements OnInit {
  personas: Person[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  receiveData(data){
    this.personas = [];
    data.forEach(d => {
      let persona: Person = {
        nombre: d.A,
        apellido: d.B,
        nro_documento: d.C
      }
      this.personas.push(persona)
    });
  }
}
