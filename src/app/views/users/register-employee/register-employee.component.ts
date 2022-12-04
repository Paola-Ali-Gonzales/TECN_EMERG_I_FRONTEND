import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }from '@angular/forms';
import { RolService } from 'src/app/services/rol.service';
import { Rol } from 'src/app/models/rol';
import { Empresa } from 'src/app/models/empresa';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

  roles = [
    {id: 1, name: 'Administrador'},
    {id: 1, name: 'Ventas'},
    {id: 2, name: 'Compras'},
    {id: 3, name: 'Almacenes'}
  ];

  usuario: Usuario = new Usuario();
  rolName: string;

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
    ],
    'rol': [
      { type: 'required', message: 'El rol es necesario.'}
    ]
  }  

  constructor(public formBuilder: FormBuilder, private sessionStorage: SessionStorageService, private usuarioService: UsuarioService, private rolService: RolService, private router: Router) {
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
      ])),
      rol: new FormControl('', Validators.compose([
        Validators.required
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
    
    var rolToSave: Rol = new Rol();
    var business: Empresa = this.sessionStorage.retrieve('business');    
    rolToSave.business_id = business.id; // Id de la empresa en sesión
    rolToSave.rol_name = this.rolName;

    // Crea el rol
    this.rolService.saveRol(rolToSave).subscribe(rol => {
      console.log(rol);

      // Crea el usuario
      this.usuario.rol_id = rol.id;
      
      this.usuarioService.createUser(this.usuario).subscribe(usuario => {
        console.log(usuario);                  
        this.router.navigate(['/']);
      });  
    });
  }

  ngOnInit(): void {
  }

}
