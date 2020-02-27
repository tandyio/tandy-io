import { createAction, props } from '@ngrx/store'

export const navSelect = createAction('[primary-navs] Nav Select',
props<{activePrimaryNav: {id: number; name: string} }>());