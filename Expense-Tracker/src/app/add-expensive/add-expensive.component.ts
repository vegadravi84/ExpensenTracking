import { Component, OnInit, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-expensive',
  templateUrl: './add-expensive.component.html',
  styleUrls: ['./add-expensive.component.scss']
})
export class AddExpensiveComponent implements OnInit {
  categories:any=['Food','Fule','lightBill','Travilng','Movies'];
  selectedcategory:any;
  formData:any;
  selectedIndex:any;
  form: FormGroup = new FormGroup({
    lableAmount: new FormControl(''),
    amount: new FormControl(''),
    selectedcategories: new FormControl(''),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const formData: any = localStorage.getItem('add-Expensive');
    this.formData = JSON.parse(formData) ? JSON.parse(formData) : [];
    this.form = this.formBuilder.group(
      {
        lableAmount: ['', Validators.required],
        amount: ['',Validators.required,],
        selectedcategories: ['', [Validators.required]]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }else{
      this.formData.push(this.form.value)
      localStorage.setItem('add-Expensive',JSON.stringify(this.formData))
      this.submitted = false;
      this.form.reset()

    }

  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
    alert("reset form");
  }

  changeExpense(event?:any) {
    console.log(event && event.target.value)
    this.selectedIndex = event.target.value;
  }
  removeCategorie(){
    console.log(this.selectedIndex)
    // this.categories.forEach((element:any) => {
    //   console.log(element == this.selectedIndex)
    // });

    //this.categories.indexOf(this.selectedIndex)
    this.categories.splice(this.selectedIndex, 1);
    console.log("this.categories",this.categories)
  }
}
