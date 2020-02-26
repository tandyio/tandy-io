// ToDo merge dynamic-info.model.ts and primary-navs.model.ts here 

export interface PrimaryNav {
    id: number;
    name: string;
}

export interface DynamicInfo {
    id: number;
    parent_nav_id: number;
    title: string;
    message: string;
}