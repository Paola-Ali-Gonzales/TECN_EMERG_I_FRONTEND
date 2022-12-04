import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import { RecuperarContraseniaService } from 'src/app/services/recuperar-contrasenia.service';
import { EmailValuesDTO } from 'src/app/models/email-values-dto';
import { Usuario } from 'src/app/models/usuario';
export class Email {
  
  public email!: string;
}

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryComponent implements OnInit {
  model = new Email();
  mailTo: string;
  dto: EmailValuesDTO;
  displayStyle = "none";
  user: Usuario;
  constructor(private router:Router, private recuperarContrasenia: RecuperarContraseniaService) { }
  onSubmit(form: any) {
    this.dto = new EmailValuesDTO(this.model.email);
    this.recuperarContrasenia.sendEmail(this.dto).subscribe(data =>this.model.email = data
    );
    this.router.navigate(['update_password/'+ this.model.email]);
  }

  ngOnInit(): void {
    FormsModule
  }

}
