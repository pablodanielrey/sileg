import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  menuFooter: string;
  version: string;

  constructor() {
    this.menuFooter = environment.menuFooter;
    this.version = environment.version;
  }

  ngOnInit() {
  }

}
