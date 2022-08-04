import * as C from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { GameAction, useGame } from '../../context/GameContext'
import { PopOut } from '../popOut'
import Grades from '../../services/Grades'

type SubjectsProps = {
  title: string,
  img: string,
  content: string,
  alt: string
}

export const MenuSubject = () => {

  const navigate = useNavigate()
  const {state, dispatch} = useGame()

  const openPopOut = (subject:string, position:Number) => {
    dispatch({
      type: GameAction.setsubjectSelected,
      payload: subject
    })
    dispatch({
      type: GameAction.setsubjectSelectedPos,
      payload: position
    })
    document.getElementById('popOut').style.display = 'inline'
  } 

  return(
    <C.Container>
      <C.Header>
        <button onClick={()=> navigate('/difficulty')}><FontAwesomeIcon icon={faShare}></FontAwesomeIcon></button>
      </C.Header>
      <C.Title>
          Escolha a materia que você quer estudar hoje
      </C.Title>
      <C.Subjects>
          <C.SubjectsList>
              {
                Grades[state.gradeSelectedPos].subjects.map((Props:SubjectsProps,key: Number) => (
                  <C.SubjectsItem onClick={()=> openPopOut(Props.title, key)}>
                    <img src={Props.img} alt={Props.alt}></img>
                    <li>{Props.title}</li>
                  </C.SubjectsItem>
                ))
              }
          </C.SubjectsList>
      </C.Subjects>
      <PopOut id='popOut' text={'Escolha a forma de jogar:'} text2={`A matéria escolhida foi: ${state.subjectSelected}`} button1={'Conteúdos Aleatórios'} button2={'Escolher Conteúdo'}/>             
    </C.Container>
  )
}