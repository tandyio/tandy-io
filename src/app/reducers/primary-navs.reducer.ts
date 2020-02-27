import { Action, createReducer, on } from '@ngrx/store'
import * as NavActions from './../actions/primary-navs.actions'
import { PrimaryNav } from '../models/interfaces'
import { AppState } from '../app.state'

export const initialState: AppState = {
    activePrimaryNav: {id: 1, name: 'about'}
}

const primaryNavReducer = createReducer(
    initialState,
    on(NavActions.navSelect, (state, { activePrimaryNav }) => ( 
        {activePrimaryNav: {id: activePrimaryNav.id, name: activePrimaryNav.name}}))
)

export function reducer(state: {activePrimaryNav: PrimaryNav} | undefined, action: Action) {
    return primaryNavReducer(state, action);
}