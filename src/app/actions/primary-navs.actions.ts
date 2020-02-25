import { createAction, props } from '@ngrx/store'
import { Nav } from './../models/primary-navs.model'

export const navSelect = createAction('[primary-navs] Nav Select',
props<{nav_id: number}>());