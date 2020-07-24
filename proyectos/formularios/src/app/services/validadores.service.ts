import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { Observable } from 'rxjs';
import { IfStmt } from '@angular/compiler';

interface ErrorValidate {
  [s: string]: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noCastrillon(control: FormControl): ErrorValidate {
    if (control.value?.toLowerCase() === 'castrillon') {
      return {
        noCastrillon: true
      }
    }
    return null
  }

  passwordsEquals(pass1Name: string, pass2Name: string) {

    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.controls[pass1Name]
      const pass2Control = formGroup.controls[pass2Name]

      if (pass1Control === pass1Control) {
        pass2Control.setErrors(null)
      } else {
        pass2Control.setErrors({ noEsIgual: true })
      }
    }
  }

  userExist(control: FormControl): Promise<ErrorValidate> | Observable<ErrorValidate> {
    if (!control.value) {
      return Promise.resolve(null)
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'juan.14') {
          resolve({ exist: true })
        } else {
          resolve({ exist: null })
        }
      }, 3000)
    })
  }
}
