import * as C from './styles'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const StartSurveys = ({timer}:any) => {

  const navigate = useNavigate()

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