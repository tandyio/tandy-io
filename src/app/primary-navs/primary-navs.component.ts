import { Component, OnInit } from '@angular/core';
import { Nav } from '../models/primary-navs.model';
import { NAVS } from '../static-content';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import * as NavActions from './../actions/primary-navs.actions'

@Component({
  selector: 'app-primary-navs',
  templateUrl: './primary-navs.component.html',
  styleUrls: ['./primary-navs.component.css']
})
export class PrimaryNavsComponent implements OnInit {
  
  navs = NAVS;
  selectedNav: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.selectedNav = store.select('SelectedNav');
  }

  navSelect(nav_id) {
    this.store.dispatch(NavActions.navSelect({selected_nav_id: nav_id}))
  }

  ngOnInit(): void {
  }

}
