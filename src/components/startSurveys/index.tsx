import * as C from './styles'


export const StartSurveys = ({timer}:any) => {


  return( 
    <C.Container>
        <C.Title>
            Jogo iniciando
        </C.Title>
        <C.Timer>
            <h1>{timer}</h1>
        </C.Timer>
    </C.Container>
  )
}