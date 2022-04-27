import { Injectable } from "@angular/core"
import { AbstractControl, ValidationErrors } from "@angular/forms"

@Injectable({
  providedIn: "root",
})
export class CustomValidatorsService {
  static validPhoneNumber(control: AbstractControl): ValidationErrors | null {
    const vnf_regex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/
    let mobile = control.value
    let test
    if (mobile != null) {
      if (vnf_regex.test(`0${mobile.toString()}`)) {
        test = null
      } else {
        test = { validatePhoneNumber: true }
      }
    } else {
      test = { validatePhoneNumber: true }
    }
    return test ? test : null
  }
}
