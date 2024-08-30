

export interface Busqueda {
    nivel: number
    keyword: string[]
    link_lessons: LinkLesson[]
}

export interface LinkLesson {
    link: string
    descripcion: string
}
