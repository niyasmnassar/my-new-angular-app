import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  messageForm:FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder ) {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      message: ['', Validators.required]
    })
   }

   onSubmit(){
     this.submitted = true;
     if(this.messageForm.invalid){
      return;
     }
     this.success = true;
   }

  ngOnInit() {
  }

}
