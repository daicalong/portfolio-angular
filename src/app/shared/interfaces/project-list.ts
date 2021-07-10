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
    CreatedDate: Date,
    Featured?: boolean,
    Img: string,
    Name: string,
    Order: number,
    Tags: string[]
}
