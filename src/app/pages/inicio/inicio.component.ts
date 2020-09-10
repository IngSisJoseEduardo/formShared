import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  formContacto: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.buildFormContacto();
  }

  ngOnInit(): void {
  }

  buildFormContacto(): void {
    this.formContacto = this.fb.group({
      nombre: [null]
    });
  }

  showData(): void {
    console.log('Estatus Form:\n', this.formContacto.status);
    console.log('Formulario:\n', this.formContacto.value);
  }

  colocar(): void {
    this.formContacto.get('direccion').get('calle').setValue('Eduardo');
  }

}
