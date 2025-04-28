import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup , FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  @Input() name =''

  constructor( private _form: FormBuilder , private router: Router) {
  
    this.loginForm = this._form.group({
      userName:['', Validators.required],
      password:['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

 get loginControls(){
  return this.loginForm.controls;
 }

 onSubmit(){
  let data = this.loginForm.value
  this.router.navigateByUrl('/dashboard')
}
}
