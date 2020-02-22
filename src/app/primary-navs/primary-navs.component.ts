import { Component, OnInit } from '@angular/core';
import { Nav } from '../nav';
import { NAVS } from '../static-primary-navs';

@Component({
  selector: 'app-primary-navs',
  templateUrl: './primary-navs.component.html',
  styleUrls: ['./primary-navs.component.css']
})
export class PrimaryNavsComponent implements OnInit {
  
  navs = NAVS;

  constructor() { }

  ngOnInit(): void {
  }

}
