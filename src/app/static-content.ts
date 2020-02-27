import { Nav } from './models/primary-navs.model';
import { Info } from './models/dynamic-info.model';

export const NAVS: Nav[] = [
    { id: 1, name: 'about' },
    { id: 2, name: 'contact' },
    { id: 3, name: 'github' }
];

export const INFOS: Info[] = [
    { id: 1, parent_nav_id: 1, title: 'hi there!', message: 'welcome to tandy.io'},
    { id: 2, parent_nav_id: 2, title: 'email', message: 'andrew@tandy.io'},
    { id: 3, parent_nav_id: 2, title: 'phone', message: '816 656-3301'},
    { id: 4, parent_nav_id: 3, title: 'fork me!', message: 'https://github.com/tandyio' }
]