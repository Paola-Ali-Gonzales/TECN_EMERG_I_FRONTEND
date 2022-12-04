import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangePasswordDTO } from 'src/app/models/change-password-dto';
import { Usuario } from 'src/app/models/usuario';
import { RecuperarContraseniaService } from 'src/app/services/recuperar-contrasenia.service';

export class Email {
  public email!: string;
}


@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  public MatchValidator(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);

      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
        ? { mismatch: true }
        : null;
    };
  }

  get passwordMatchError() {
    return (
      this.updatePassForm.getError('mismatch') &&
      this.updatePassForm.get('confirmpassword')?.touched
    );
  }

  updatePassForm: FormGroup;

  error_messages = {

    'password': [
      { type: 'required', message: 'La contraseña es necesaria.' },
      { type: 'minlength', message: 'La contraseña debe tener un minimo de 6 caracteres.' },
      { type: 'maxlength', message: 'La contraseña no debe ser mayor a 30 caracteres.' }
    ],
    'confirmpassword': [
      { type: 'required', message: 'La contraseña es necesaria.' },
      { type: 'minlength', message: 'La contraseña debe tener un minimo de 6 caracteres.' },
      { type: 'maxlength', message: 'La contraseña no debe ser mayor a 30 caracteres.' }
    ],
  }
  
  user: Usuario = new Usuario();
  password: string;
  confirmPassword: string;

  dto: ChangePasswordDTO;
  constructor( private recuperarContraseniaService: RecuperarContraseniaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder
  ) {
    console.log(this.activatedRoute.snapshot.paramMap.get('email'))
    this.updatePassForm = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      
    }, 
    { 
      validators: [this.MatchValidator('password', 'confirmpassword')]
    });
  }

  onSubmit(form: any) {
    this.activatedRoute.params.subscribe(params => {
      
      const pass = (document.getElementById('password') as HTMLInputElement).value;
      this.user.email = params['email'] as string;
      this.user.password = pass;
      //console.log(params['email'] as string);
      //console.log(this.user);
      this.recuperarContraseniaService.changePassword(this.user).subscribe();
      this.router.navigate(['user_login']);
    })
    
  }

  ngOnInit(): void {

  }

  
  Password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }
}
