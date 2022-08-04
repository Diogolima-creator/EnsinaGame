import * as C from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useGame, GameAction } from '../../context/GameContext'
import { PopOut } from '../popOut'

export const MenuDifficulty = () => {

  
  const navigate = useNavigate()
  const Grade = ['1° - Série','2° - Série','3° - Série','4° - Série','5° - Série','6° - Série','7° - Série','8° - Série','9° - Série', '1° E.M - Série','2° E.M - Série','3° E.M - Série']
  const {state, dispatch} = useGame()

  const choiceGrade = (grade:string, pos:Number) => {
    dispatch({
      type: GameAction.setgradeSelected,
      payload: grade
    })
    dispatch({
      type: GameAction.setgradeSelectedPos,
      payload: pos
    })
  }

  return(
    <C.Container>
      <C.Header>
        <button onClick={() => navigate('/home')}><FontAwesomeIcon icon={faShare}></FontAwesomeIcon></button>
      </C.Header>
      <C.Title>
          Escolha a série que você está estudando 
      </C.Title>
      <C.Grade>
          <C.GradeList>
              {Grade.map((grade:string,key:number) => (
                <C.GradeItem onClick={() => choiceGrade(grade,key)}>
                  <li>{grade}</li>
                </C.GradeItem>
              ))}
          </C.GradeList>
      </C.Grade>
      <C.Title>
          A serie que você escolheu para estudar foi: <strong>{state.gradeSelected}</strong>
      </C.Title>
      <C.Button disabled={state.gradeSelectedPos > 0} onClick={()=> navigate('/subject')}>
          {state.gradeSelected === '' ? 'Escolha uma série' : state.gradeSelectedPos > 0 ? 'Em Desenvolvimento' : 'Continuar'}

      </C.Button>
    </C.Container>
  )
}