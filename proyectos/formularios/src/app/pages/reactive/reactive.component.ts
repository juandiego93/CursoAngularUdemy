import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms'
import { ValidadoresService } from '../../services/validadores.service'

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup

  constructor(private formBuilder: FormBuilder, private validatorCustome: ValidadoresService) {
  }

  ngOnInit(): void {
    this.createForm()
    this.loadDataToForm()
    this.listenerForm()
  }

  get nameInvalid() {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched
  }

  get surnameInvalid() {
    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched
  }

  get emailInvalid() {
    return this.forma.get('correo').invalid && this.forma.get('correo').touched
  }

  get userInvalid() {
    return this.forma.get('nombreusuario').invalid && this.forma.get('nombreusuario').touched
  }

  get distritoInvalid() {
    return this.forma.get('direccion.distrito').invalid && this.forma.get('direccion.distrito').touched
  }

  get ciudadInvalid() {
    return this.forma.get('direccion.ciudad').invalid && this.forma.get('direccion.ciudad').touched
  }

  get pass1Invalid() {
    return this.forma.get('pass1').invalid && this.forma.get('pass1').touched
  }

  get pass2Invalid() {
    const pass1 = this.forma.get('pass1').value
    const pass2 = this.forma.get('pass2').value
    return (pass1 === pass2) ? false : true
  }

  get arrayPasatiempos() {
    return this.forma.get('pasatiempos') as FormArray
  }

  createForm() {
    this.forma = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', [Validators.required, this.validatorCustome.noCastrillon]],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      nombreusuario: ['', , this.validatorCustome.userExist],
      pass1: ['', Validators.required],
      pass2: ['', Validators.required],
      direccion: this.formBuilder.group({
        distrito: ['', Validators.required],
        ciudad: ['', Validators.required]
      }),
      pasatiempos: this.formBuilder.array([])
    }, {
      validators: this.validatorCustome.passwordsEquals('pass1', 'pass2')
    })
  }

  loadDataToForm() {
    // this.forma.setValue({
    this.forma.reset({
      nombre: 'Juan Diego',
      apellido: 'OC',
      correo: 'juan@juan.com',
      direccion: {
        distrito: 'Caldas',
        ciudad: 'Manizales'
      }
    })
  }

  guardar() {
    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(control2 => control2.markAsTouched())
        } else {
          control.markAsTouched()
        }
      })
    }
    this.forma.reset({
      nombre: ''
    })
  }

  addPasatiempo() {
    this.arrayPasatiempos.push(this.formBuilder.control(''))
  }

  deletePasatiempo(i) {
    this.arrayPasatiempos.removeAt(i)
  }

  listenerForm() {
    // this.forma.valueChanges.subscribe(value => {
    //   console.log(value);
    // })

    // this.forma.statusChanges.subscribe(value => {
    //   console.log(value);
    // })

    this.forma.get('nombre').valueChanges.subscribe(console.log)
  }

}
