import { Component, OnInit } from '@angular/core';
import { DynamicInfo, PrimaryNav } from '../models/interfaces';
import { INFOS } from '../static-content';
import { Store, props, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, filter, pluck } from 'rxjs/operators';
import { selectActivePrimaryNav } from '../models/selectors';
import { AppState } from './../app.state'

@Component({
  selector: 'app-dynamic-info',
  templateUrl: './dynamic-info.component.html',
  styleUrls: ['./dynamic-info.component.css']
})
export class DynamicInfoComponent implements OnInit {

  activeNav$: Observable<{id: number, name: string}>;

  displayedInfos: DynamicInfo[] = INFOS;

  constructor(private store: Store<AppState>) {
    this.activeNav$ = this.store.pipe(select(selectActivePrimaryNav));
  } 

  ngOnInit() {
  }

}
