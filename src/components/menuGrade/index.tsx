import * as C from './styles'
import { useNavigate } from 'react-router-dom'
import { useGame } from '../../context/GameContext'

export const MenuDifficulty = () => {

  
  const navigate = useNavigate()
  const Grade = ['1° - Série','2° - Série','3° - Série','4° - Série','5° - Série','6° - Série','7° - Série','8° - Série','9° - Série', '1° E.M - Série','2° E.M - Série','3° E.M - Série']
  const { gradeSelected, gradeSelectedPos, setGradeSelected, setGradeSelectedPos} = useGame()

  const choiceGrade = (grade:string, pos:number) => {
    setGradeSelected(grade)
    setGradeSelectedPos(pos)
  }

  return(
    <C.Container>
      <C.Header>
        <button onClick={() => navigate('/home')}>x</button>
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
          A serie que você escolheu para estudar foi: <strong>{gradeSelected}</strong>
      </C.Title>
      <C.Button disabled={gradeSelectedPos > 0} onClick={()=> navigate('/subject')}>
          {gradeSelected === '' ? 'Escolha uma série' : gradeSelectedPos > 0 ? 'Em Desenvolvimento' : 'Continuar'}

      </C.Button>
    </C.Container>
  )
}