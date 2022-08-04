import * as C from './styles'
import Imagem from '../../imagens/Subjects/historia.jpg'
import { useNavigate } from 'react-router-dom';
import { GameAction, useGame } from '../../context/GameContext'
import { GradesNotas, Guides } from '../../services/Guides';
import React from 'react'
import ReactPlayer from 'react-player'

export const FinishSurveys = () => {

  const navigate = useNavigate()
  const { state,dispatch } = useGame()

  const resetAndMove = (locateToMove:string) => {
    dispatch({
      type: GameAction.setreviewResults,
      payload: []
    })
    navigate(`${locateToMove}`)
  }

  return( 
    <C.Container>
       <C.Title>
          Você terminou seu teste!
       </C.Title>
       <C.Results>
          <C.Title> Seu resultado foi: {state.answerCorrects}/10 </C.Title>
          {state.answerCorrects <10 ? <img src={GradesNotas[state.answerCorrects].NotasImg}/> : <ReactPlayer width={400} height={500} className='myVideo' volume={0.01} loop={true} playing={true} url={GradesNotas[state.answerCorrects].NotasImg} />}
          <C.ButtonList>
            <C.Button onClick={()=> navigate('/reviewResults')}>Ver Respostas</C.Button>
            <C.Button onClick={()=> resetAndMove('/surveys')}>Tentar Novamente</C.Button>
            <C.Button onClick={()=> resetAndMove('/subject')}>Escolher outra materia</C.Button>
          </C.ButtonList>
       </C.Results>
    </C.Container>
  )
}