import { Component, OnInit } from '@angular/core';
import { Info } from '../models/dynamic-info.model';
import { INFOS } from '../static-content';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dynamic-info',
  templateUrl: './dynamic-info.component.html',
  styleUrls: ['./dynamic-info.component.css']
})
export class DynamicInfoComponent implements OnInit {

  infos = INFOS;

  selectedNav: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.selectedNav = store.select('SelectedNav'); 
   }

  ngOnInit(): void {
  }

}
