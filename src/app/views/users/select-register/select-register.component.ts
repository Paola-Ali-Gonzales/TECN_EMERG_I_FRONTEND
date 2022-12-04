import { Component, OnInit } from '@angular/core';

import { LoadScriptsService } from 'src/app/load-scripts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-select-register',
  templateUrl: './select-register.component.html',
  styleUrls: ['./select-register.component.css']
})
export class SelectRegisterComponent implements OnInit {

  constructor(private _LoadScripts:LoadScriptsService, private router: Router) { 
    _LoadScripts.Load(["select-register"]);
  }

  continuar(): void {
    var type = (<HTMLInputElement>document.getElementById("registerType")).value;

    if (type == "0") {      
      this.router.navigate(['register_user'])
    } else {
      this.router.navigate(['register_business'])
    }
  }

  ngOnInit(): void {
  }

}
