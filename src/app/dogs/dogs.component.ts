import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  messageForm: FormGroup; // new FormGroup
  submitted: boolean = false; // if submitted
  success: boolean = false; // if all validated

  constructor( private data : DataService, private formBuilder: FormBuilder ) {
    this.messageForm = this.formBuilder.group({
      breed: ['', Validators.required]
    })
   }

  dogURL: String;
   
  ngOnInit() {

  }
  
  onClickGetDog () {
    this.data.getDogs().subscribe(data => {
      this.dogURL = data['message'];
      console.log(this.dogURL)
    })
  }

  // onClickGetDog (breed) {
  //   console.log(breed)
  //   this.data.getDogs(breed).subscribe(data => {
  //     this.dogURL = data['message'];
  //     console.log(this.dogURL)
  //   })
  // }

  // onSubmit(breed){
  //   this.submitted = true;
  //   if (this.messageForm.invalid){
  //     return; // no more code can execute
  //   }
  //   this.success = true;
  //   this.onClickGetDog(breed);
  // }
}
