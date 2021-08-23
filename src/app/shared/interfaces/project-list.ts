export interface ProjectList {
    records: Project[]
}

export interface Project {
    createdTime: Date,
    id: string,
    fields: ProjectFields
}

export interface ProjectFields {
    CategoryName: string,
    CategoryIdList: string[],
    CreatedDate: Date,
    Featured?: boolean,
    Img: string,
    Name: string,
    Order: number,
    Tags: string[]
}

export interface ProjectCategoryList {
    records: ProjectCategory[]
}

export interface ProjectCategory {
    createdTime: Date,
    id: string,
    fields: ProjectFields
}

export interface ProjectCategoryFields {
    Name: string,
    ProjectListLookup: any[],
}