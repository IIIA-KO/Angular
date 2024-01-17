import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  registrationForm: FormGroup | undefined;
  formData = {
    termsAndConditions: false,
    email: '',
    gender: ''
  };
  submitted = false;
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      termsAndConditions: new FormControl(false, Validators.requiredTrue),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      gender: new FormControl('', Validators.required)
    });
  }
  submitForm(registrationForm: NgForm) {
    if (registrationForm.valid) {
      this.submitted = true;
    }
  }

  resetForm(registrationForm: NgForm) {
    registrationForm.resetForm();
    this.formData = {
      termsAndConditions: false,
      email: '',
      gender: ''
    };
    this.submitted = false;
  }
}
