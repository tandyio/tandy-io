import { Component, OnInit } from '@angular/core';
import { PrimaryNav } from '../models/interfaces';
import { NAVS } from '../static-content';
import { Observable } from 'rxjs';
import { selectActivePrimaryNav } from '../models/selectors';
import * as NavActions from './../actions/primary-navs.actions';
import { Store, select } from '@ngrx/store';
import { AppState } from './../app.state';

@Component({
  selector: 'app-primary-navs',
  templateUrl: './primary-navs.component.html',
  styleUrls: ['./primary-navs.component.css']
})
export class PrimaryNavsComponent implements OnInit {
  
  navs = NAVS;
  activeNav$: Observable<PrimaryNav>;

  constructor(private store: Store<AppState>) {
    this.activeNav$ = this.store.pipe(select(selectActivePrimaryNav));
  }

  navSelect(selectedNav: PrimaryNav) {
    this.store.dispatch(NavActions.navSelect({activePrimaryNav: selectedNav}));
  }

  ngOnInit(): void {
  }

}
