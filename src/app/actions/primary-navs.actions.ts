import { createAction, props } from '@ngrx/store'
import { Nav } from './../models/primary-navs.model'

export const navSelect = createAction('[primary-navs] Nav Select',
props<{selected_nav_id: number}>());