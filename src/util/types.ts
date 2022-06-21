export interface Player {
  camisa?: number
  nome: string
  posicao: string
  idade: number
  termino_contrato: Date
  vinculo?: string
  salario: number
}

export interface Compromisso {
  uuid?: string
  data: Date
  horario: Date
  anfitriao?: string
  visitante?: string
  local: string
  torneio: string
}

export interface Funcionario {
  nome: string
  funcao: string
  data_nascimento: Date
  departamento?: string
  salario: number
}

export interface Financa {
  nome: string
  valor: number
  tipo: string
  dataFinancas: Date
}
