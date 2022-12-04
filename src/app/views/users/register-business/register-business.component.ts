import { Component, OnInit } from '@angular/core';

import { LoadScriptsService } from 'src/app/load-scripts.service';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaEmpresa } from 'src/app/models/categoria-empresa';
import { Empresa } from 'src/app/models/empresa';
import { Usuario } from 'src/app/models/usuario';
import { CategoriaEmpresaService } from 'src/app/services/categoria-empresa.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { EmpresaService } from 'src/app/services/empresa.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }from '@angular/forms';
import { Rol } from 'src/app/models/rol';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-register-business',
  templateUrl: './register-business.component.html',
  styleUrls: ['./register-business.component.css']
})
export class RegisterBusinessComponent implements OnInit {
  type_business = [
    {id: 1, name: 'Pequeña'},
    {id: 2, name: 'Mediana'},
    {id: 3, name: 'Grande'}
  ];

  selectedCategories: Categoria[];
  categoriesList: Categoria[];
  categoryBusiness: CategoriaEmpresa[] = [];
  
  usuario: Usuario = new Usuario;
  empresa: Empresa = new Empresa;
  rol: Rol = new Rol;

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
    'business_name': [
      { type: 'required', message: 'El nombre de empresa es necesario.'},
      { type: 'maxlength', message: 'El nombre de empresa es demasiado largo.'},
      { type: 'minlength', message: 'El nombre de empresa es demasiado corto.'}
    ],
    'phone_number': [
      { type: 'required', message: 'El número de teléfono es necesario.'},
      { type: 'maxlength', message: 'El número de teléfono es demasiado largo.'},
      { type: 'minlength', message: 'El número de teléfono es demasiado corto.'}
    ],
    'nit': [
      { type: 'required', message: 'El NIT es necesario.'},
      { type: 'maxlength', message: 'El NIT es demasiado largo.'},
      { type: 'minlength', message: 'El NIT es demasiado corto.'}
    ],
    'direction': [
      { type: 'required', message: 'La dirección es necesario.'},
      { type: 'maxlength', message: 'La dirección es demasiado largo.'},
      { type: 'minlength', message: 'La dirección es demasiado corto.'}
    ],
    'type': [
      { type: 'required', message: 'El tipo de empresa es necesario.'}      
    ],
    'categories': [       
      { type: 'required', message: 'Seleccione al menos una categoria.'}      
    ]
  } 

  constructor(public formBuilder: FormBuilder, private _LoadScripts:LoadScriptsService, private router: Router, private categoriesService: CategoriaService, private categoryBusinessService: CategoriaEmpresaService, private businessService: EmpresaService, private usuarioService: UsuarioService, private rolService: RolService) {     
    _LoadScripts.Load(["register_multistep"]);
    this.categoriesService.selectCategory().subscribe(categorias => {this.categoriesList = categorias});        
  
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
      business_name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(3)
      ])),
      phone_number: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(6)
      ])),
      nit: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(5)
      ])),
      direction: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(150),
        Validators.minLength(3)
      ])),
      type: new FormControl('', Validators.compose([
        Validators.required        
      ])),
      categories: new FormControl('', Validators.compose([
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

  enviar(): void {    
    if (!this.registerForm.valid) {
      return;
    }    

    // Crea la empresa
    this.businessService.createBusiness(this.empresa).subscribe(empresa => {
      console.log(empresa);

      // Crea el rol
      var rolToSave: Rol = new Rol();
      rolToSave.business_id = empresa.id;
      rolToSave.rol_name = "Administrador";
      
      this.rolService.saveRol(rolToSave).subscribe(rol => {
        console.log(rol);

        // Crea el usuario
        this.usuario.rol_id = rol.id;
        
        this.usuarioService.createUser(this.usuario).subscribe(usuario => {
          console.log(usuario);
          
          // Inserta las categorias de la empresa
          var business_id: number = empresa.id;

          if (this.selectedCategories.length > 0) {            
            for (let index = 0; index < this.selectedCategories.length; index++) {      
              var ce: CategoriaEmpresa = {
                business_id: business_id,
                category_id: this.selectedCategories[index].id          
              };      
              this.categoryBusiness.push(ce);
            }
          }    

          if (this.categoryBusiness.length > 0) {
            this.categoryBusinessService.createCategoryBusiness(this.categoryBusiness).subscribe(categoryBusiness => {
              console.log(categoryBusiness);
            })
          }    
      
          this.router.navigate(['user_login']);

        });  
      });
    });  

  }

  ngOnInit() {
  }

}
