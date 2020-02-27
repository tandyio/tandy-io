import { createSelector, props, select } from '@ngrx/store';
import * as interfaces from './interfaces';
import { AppState } from '../app.state'

export const selectActivePrimaryNav = (state: AppState) => state.activePrimaryNav;
