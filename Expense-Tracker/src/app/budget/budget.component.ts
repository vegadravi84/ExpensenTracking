import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  formData:any=[]
  form: FormGroup = new FormGroup({
    lableAmount: new FormControl(''),
    amount: new FormControl(''),
  });
  bugetForm:FormGroup = new FormGroup({
    bugets:new FormControl(''),
  }) 
  submitted = false;
  bugget = false
  
  constructor(private formBuilder: FormBuilder){}
  ngOnInit(): void {
    const formData: any = localStorage.getItem('add-income');
    this.formData = JSON.parse(formData) ? JSON.parse(formData) : [];
    this.form = this.formBuilder.group(
      {
        lableAmount: ['', Validators.required],
        amount: ['',Validators.required,],
      }
    );
    this.bugetForm = this.formBuilder.group({
      bugets:['',Validators.required]
    }) 

   }
   saveBugets(){
    this.bugget = true;
    if (this.bugetForm.invalid) {
      return;
    }else{
      localStorage.setItem('myBugets', JSON.stringify(this.bugetForm.value));
      this.bugget = false
    }
   }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;

  }
  get v(): { [key: string]: AbstractControl } {
    return this.bugetForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }else{
        this.formData.push(this.form.value)
        localStorage.setItem('add-income',JSON.stringify(this.formData))
        this.form.reset()
        this.submitted = false;
        
    }
  }
  onReset(): void {
    this.submitted = false;
    this.bugetForm.reset();
  }
}

