import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/load-scripts.service';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  constructor(private _LoadScripts:LoadScriptsService) { 
    _LoadScripts.Load(["nav"]);
  }
  ngOnInit(): void {
  }

}
