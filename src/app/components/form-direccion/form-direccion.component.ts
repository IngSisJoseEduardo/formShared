import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, FormGroupDirective, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-direccion',
  templateUrl: './form-direccion.component.html',
  styleUrls: ['./form-direccion.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class FormDireccionComponent implements OnInit {
   myForm: FormGroup;
  constructor(
    private formParent: FormGroupDirective,
    private fb: FormBuilder
  ) {

   }

  ngOnInit(): void {
    this.myForm = this.formParent.form;
    this.formBuildDireccion();
  }


  formBuildDireccion(): void{
    this.myForm.addControl('direccion', this.fb.group({
      calle: [null, Validators.required]
    }));
  }

}
