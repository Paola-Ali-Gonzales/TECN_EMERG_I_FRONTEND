import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/load-scripts.service';

@Component({
  selector: 'app-top-nav-bar-business',
  templateUrl: './top-nav-bar-business.component.html',
  styleUrls: ['./top-nav-bar-business.component.css']
})
export class TopNavBarBusinessComponent implements OnInit {

  constructor(private _LoadScripts:LoadScriptsService) { 
    _LoadScripts.Load(["nav"]);
  }

  ngOnInit(): void {
  }

}
