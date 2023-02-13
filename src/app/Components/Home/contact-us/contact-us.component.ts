import { Component,OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit{
  submitted=false;
  ContactForm!:FormGroup;
  constructor(private fb:FormBuilder) {}
  ngOnInit(): void {

    this.ContactForm= this.fb.group({
      FirstName: ['',Validators.required],
      LastName: ['',[Validators.required , Validators.pattern('^01[012][0-9]{8}$')]],
      Phone: ['',[Validators.required , Validators.email ]],
      Email: ['',[Validators.required , Validators.email ]],
      Message: ['',[Validators.required ]],
 });


  }
  get ContactFormControl() {
    return this.ContactForm.controls;
  }
}
