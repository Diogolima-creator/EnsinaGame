import { Notas } from '../imagens/Notas';

interface Guides {
  Guides: [string,string,string,string,string]
}

interface Notas {
  NotasImg: string
}

export const Guides:Guides[][] = [
  [
    {Guides:['https://brasilescola.uol.com.br/gramatica/silabas.htm','https://www.separaremsilabas.com/','https://escolaeducacao.com.br/como-separar-silabas/','https://www.youtube.com/watch?v=YVWa1Y5Usq0','https://www.youtube.com/watch?v=Vjq-OAr7nIs']},
    {Guides:['','','','','']},
    {Guides:['','','','','']},
    {Guides:['','','','','']},
    {Guides:['','','','','']},
    {Guides:['','','','','']}
  ],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]

export const GradesNotas:Notas[] = [
  {NotasImg: Notas.Zero},
  {NotasImg: Notas.Um},
  {NotasImg: Notas.Dois},
  {NotasImg: Notas.Três},
  {NotasImg: Notas.Quatro},
  {NotasImg: Notas.Cinco},
  {NotasImg: Notas.Seis},
  {NotasImg: Notas.Sete},
  {NotasImg: Notas.Oito},
  {NotasImg: Notas.Nove},
  {NotasImg: Notas.Dez}
]