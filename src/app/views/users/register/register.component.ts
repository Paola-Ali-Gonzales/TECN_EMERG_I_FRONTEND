import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario: Usuario = new Usuario();
  
  registerForm: FormGroup;  

  error_messages = {
    'password': [
      { type: 'required', message: 'La contraseña es necesaria.'}
    ],
    'confirmPassword': [
      { type: 'required', message: 'La confirmación de la contraseña es necesaria.'}
    ],
    'email': [
      { type: 'required', message: 'El correo es necesario.'},
      { type: 'email', message: 'El formato del correo no es válido.'}
    ],
    'name': [
      { type: 'required', message: 'El nombre es necesario.'},
      { type: 'maxlength', message: 'El nombre es demasiado largo.'},
      { type: 'minlength', message: 'El nombre es demasiado corto.'}
    ],
    'last_name': [
      { type: 'required', message: 'El apellido es necesario.'},
      { type: 'maxlength', message: 'El apellido es demasiado largo.'},
      { type: 'minlength', message: 'El apellido es demasiado corto.'}
    ]
  }  

  constructor(public formBuilder: FormBuilder, private service: UsuarioService, private router: Router) {     
    
    this.registerForm = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
        Validators.required
      ])),
      confirmPassword: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(3)
      ])),
      last_name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(3)
      ]))
    }, 
    {
      validators:this.PasswordMatch('password','confirmPassword')   
    });
  }

  PasswordMatch(pass:any, confPass:any) {
    return (formGroup: FormGroup) => {
      const passControl = formGroup.controls[pass];
      const confPassControl = formGroup.controls[confPass];

      if (confPassControl.errors && !confPassControl.errors['Mustmatch']) {
        return;
      }

      if (passControl.value !== confPassControl.value) {
        confPassControl.setErrors({Mustmatch:true});
      } else {
        confPassControl.setErrors(null);
      }

    };
  }

  crear(): void {
    if (!this.registerForm.valid) {
      return;
    }

    this.usuario.rol_id = 1; 

    this.service.createUser(this.usuario).subscribe(usuario => {
        console.log(usuario);
        this.router.navigate(['user_login']);
      });
  }

  ngOnInit() {
    
  }

}
