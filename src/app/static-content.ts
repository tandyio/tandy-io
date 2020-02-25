import { Nav } from './static-interfaces';
import { Info } from './static-interfaces';

export const NAVS: Nav[] = [
    { id: 1, name: 'about' },
    { id: 2, name: 'contact' },
    { id: 3, name: 'github' }
];

export const INFOS: Info[] = [
    { nav_id: 1, title: 'hi there!', message: 'welcome to tandy.io'},
    { nav_id: 1, title: 'fork me!', message: 'github link here' }
]