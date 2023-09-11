import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, NgForm } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {
  //selectedHobbies: string[] = []
  FormData:any =[];
  activeIndex:any
  FormSubmitData:any= [];
  activation:any;
  isShownNextButton:boolean=true
  
  contry:any
   form = { 
     firstname:"",
     lastname:"",
     surname:"",
     email:"",
     mobile:"",
     gender:"",
     selectedHobbies:"",
     selectedHobbies1:"",
     selectedHobbies2:"",
     contry:"",
   };
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  countryData: any[] = ['India', 'US', 'UK'];
  constructor( public auth:AuthServiceService){}

  ngOnInit(): void {
    const formData: any = localStorage.getItem('dataArr');
      this.FormData = JSON.parse(formData) ? JSON.parse(formData) : [];
  }
  onSubmit(){
    this.isShownNextButton = true;
    if(this.form.firstname !== '' || this.form.lastname !== '' ||this.form.surname !== '' || this.form.email !== '' ||this.form.mobile !== ''|| 
    this.form.gender !== '' || this.form.selectedHobbies !== ''|| this.form.selectedHobbies1 !== ''|| this.form.selectedHobbies2 !== ''|| this.form.contry !== '' ){
      const formData: any = localStorage.getItem('dataArr');
      this.FormData = JSON.parse(formData) ? JSON.parse(formData) : [];
      console.log('R4x',this.FormData);
      if(!this.FormData){
        this.FormData =[];
      }
      if(this.activeIndex > -1){
        this.FormData[this.activeIndex].firstname = this.form.firstname;
        this.FormData[this.activeIndex].lastname = this.form.lastname;
        this.FormData[this.activeIndex].surname = this.form.surname;
        this.FormData[this.activeIndex].email = this.form.email;
        this.FormData[this.activeIndex].gender = this.form.gender;
        this.FormData[this.activeIndex].selectedHobbies = this.form.selectedHobbies;
        this.FormData[this.activeIndex].selectedHobbies1 = this.form.selectedHobbies1;
        this.FormData[this.activeIndex].selectedHobbies2 = this.form.selectedHobbies2;
        this.FormData[this.activeIndex].contry = this.form.contry;
        this.activeIndex = -1;

      }else{
        this.FormData.push({firstname:this.form.firstname,lastname:this.form.lastname,gender:this.form.gender,
          mobile:this.form.mobile,surname:this.form.surname,email:this.form.email,selectedHobbies:this.form.selectedHobbies,selectedHobbies1:this.form.selectedHobbies1,selectedHobbies2:this.form.selectedHobbies2,contry:this.form.contry})
      
      }
      localStorage.setItem('dataArr',JSON.stringify(this.FormData))
    }
    
  }
  resetForm(userform?:any){
  if(userform){
    userform.reset();
  }
  }
  Edit(index:any){
    this.isShownNextButton = false;
    this.activeIndex= index
    this.form.firstname = this.FormData[index].firstname;
    this.form.lastname = this.FormData[index].lastname;
    this.form.surname = this.FormData[index].surname;
    this.form.email = this.FormData[index].email;
    this.form.gender = this.FormData[index].gender;
    this.form.mobile = this.FormData[index].mobile;
    this.form.selectedHobbies = this.FormData[index].selectedHobbies;
    this.form.selectedHobbies1 = this.FormData[index].selectedHobbies1;
    this.form.selectedHobbies2 = this.FormData[index].selectedHobbies2;
    this.form.contry = this.FormData[index].contry;
  }
   Delete(index:any){
        this.FormData.splice(index,1)
         localStorage.setItem('dataArr',JSON.stringify(this.FormData))
   }
}
