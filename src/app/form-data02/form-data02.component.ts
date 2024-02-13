import { Component } from '@angular/core';

interface FormData {
  name: string;
  age: number;
  phoneNumber: string;
  date: string;
}

@Component({
  selector: 'app-form02',
  templateUrl: './form-data02.component.html',
  styleUrls: ['./form-data02.component.css']
})
export class FormData02Component {
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
