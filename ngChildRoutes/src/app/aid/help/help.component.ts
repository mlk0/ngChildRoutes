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

  languages : any[] = [
    {name : 'English', code : 'EN'},
    {name : 'French', code : 'FR'}
  ];
  
  fg: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.fg = fb.group({});

    
    //this.fg.addControl('keyWord', keyWordControl);

    let topicIdControl = fb.control('', Validators.compose(
      [
        Validators.required,
        Validators.min(100),
        Validators.max(200),
        Validators.pattern('^[0-9]+$')
      ]
    )
    );
    this.fg.addControl('topicId', topicIdControl)

    let topicCode = fb.control('', Validators.compose([Validators.pattern('^[a-zA-Z ]+$'), Validators.maxLength(5)]));
    this.fg.addControl('topicCode', topicCode);


    let language = fb.control('EN', Validators.compose([  Validators.pattern('(EN|FR)')]));//, Validators.pattern('(EN|FR)\b')]))
    this.fg.addControl('languageCode', language);

  }

  ngOnInit() {
  }



  submit(formValues: any) {
    console.log(formValues);

    if (this.fg.valid) {
      // this.router.navigate(['help/topics']);
      
      // this.router.navigate(['help/topics', formValues['topicId']]);

      this.router.navigate(['help/topics', formValues['topicId'], { topicKey : formValues['topicCode'], language : formValues['languageCode']} ]);
    }

    else {

      //
      Object.keys(this.fg.controls).forEach(c => {
        //console.log(c);

        let formControl = this.fg.get(c);
        // console.log(formControl);

        let isControlValid = formControl.valid;
        console.log(`isControlValid : ${isControlValid}`);

        //Object.key
        console.log(formControl.errors);

        if(formControl.errors){
        
          let errorObject = {};
          Object.keys(formControl.errors).forEach(e => {
            console.log(e);
            let formControlError = formControl.errors[e];
            console.log(formControlError);
  
            errorObject = Object.assign(errorObject, {}, { errorType: e, details: [] });
  
  
  
            Object.keys(formControlError).forEach(key => {
              console.log(`key : ${key}`);
              let keyValue = formControlError[key];
              console.log(` keyValue : ${keyValue}`);
  
              let jsonVariable = {};
              jsonVariable[key] = keyValue;
              errorObject['details'].push(jsonVariable);
  
            })
  
  
          })
          console.log(errorObject);  
        }
        

      })

    }



  }

}
