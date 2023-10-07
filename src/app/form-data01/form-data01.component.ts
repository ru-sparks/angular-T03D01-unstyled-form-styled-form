import { Component } from '@angular/core';

interface FormData {
  name: string;
  age: number;
  phoneNumber: string;
  date: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form-data01.component.html',
  styleUrls: ['./form-data01.component.css']
})
export class FormData01Component {
  formData: FormData = {
    name: '',
    age: 10,
    phoneNumber: '',
    date: ''
  };

  onSubmit() {
    console.log('Form data submitted:', this.formData);
  }
}
