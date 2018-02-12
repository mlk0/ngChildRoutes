import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';


@Component({
  // selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  errors : any[];
  fg: FormGroup;
  constructor(private fb: FormBuilder, private router : Router) {
    this.fg = fb.group({});

    //let keyWordControl = fb.control('', Validators.compose([Validators.pattern('^[a-zA-Z ]+$'), Validators.maxLength(5)]));
    //this.fg.addControl('keyWord', keyWordControl);

    let topicIdControl = fb.control('', Validators.compose([Validators.required, Validators.pattern('^[0-9]+$')]) );
    this.fg.addControl('topicId', topicIdControl)
    


    this.errors = [];

  }

  ngOnInit() {
  }



  submit(formValues: any) {
    console.log(formValues);

    if(this.fg.valid){
      //this.router.navigate(['help/topics',formValues['keyWord']]);
      this.router.navigate(['help/topics',formValues['topicId']]);
      return;
    }
    

    //
    Object.keys(this.fg.controls).forEach(c => {
      //console.log(c);

      let formControl = this.fg.get(c);
     // console.log(formControl);

      let isControlValid = formControl.valid;
      console.log(`isControlValid : ${isControlValid}`);

      //Object.key
      console.log(formControl.errors);

      let errorObject = {};
      Object.keys(formControl.errors).forEach(e => {
        console.log(e);
        let formControlError = formControl.errors[e];
        console.log(formControlError);
        
        errorObject = Object.assign(errorObject, {} , { errorType : e , details : []});

       // this.formErrors.push({ validationType : formControlError[0].key})
      
        // for(let key in formControlError){
        //   console.log(`key : ${key}`);
        //   let keyValue = formControlError[key];
        //   console.log(` keyValue : ${keyValue}`);
        // }
      
        Object.keys(formControlError).forEach(key=>{
          console.log(`key : ${key}`);
          let keyValue = formControlError[key];
          console.log(` keyValue : ${keyValue}`);

          errorObject = Object.assign(errorObject, errorObject, { details : [ { key : keyValue }]} )

        })

        
      })

      this.errors.push(errorObject);
      let a;
    })


  }

}
