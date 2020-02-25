import { Component, OnInit } from '@angular/core';
import { Info } from '../static-interfaces'
import { INFOS } from '../static-content'

@Component({
  selector: 'app-dynamic-info',
  templateUrl: './dynamic-info.component.html',
  styleUrls: ['./dynamic-info.component.css']
})
export class DynamicInfoComponent implements OnInit {

  infos = INFOS;

  constructor() { }

  ngOnInit(): void {
  }

}
