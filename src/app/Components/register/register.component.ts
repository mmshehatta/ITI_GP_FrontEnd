import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),  
      email:new FormControl('', [Validators.required, Validators.minLength(3)]), 
      password:new FormControl('', [Validators.required, Validators.minLength(3)]), 
    });
  }
  get f(){

    return this.form.controls;

  }

  submit(): void {

    // console.log(this.form.getRawValue())

    this.http.post('http://127.0.0.1:8000/api/register/', this.form.getRawValue()).subscribe(res =>{
      // console.log(res)
      alert(" تــم التسجيل بنجـــاح")
      this.router.navigate(['/login'])

    });

  }


}
