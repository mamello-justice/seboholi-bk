export type UserBase = {
  firstname: string
  lastname: string
  middlename?: string
}

export type ProfessionalUser = UserBase & {
  profession: string
}
