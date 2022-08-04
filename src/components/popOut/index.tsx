import * as C from './styles'
import { useNavigate } from 'react-router-dom';
import { useGame } from '../../context/GameContext'

type PopOutProps = {
  id:string,
  text?:string,
  text2?:string,
  button1?: string
  button2?: string
}

const closePopOut = () => {
  document.getElementById('popOut').style.display = 'none'
} 

export const PopOut = (Props:PopOutProps) => {
  const navigate = useNavigate()
  const {state, dispatch} = useGame()

  return(
    <C.Container id={Props.id}>
      <C.ContainerMedium>
        <C.Header>
          <C.Title>
            {Props.text}
          </C.Title>
          <C.ButtonClose onClick={() => closePopOut()}>
            X
          </C.ButtonClose>
        </C.Header>
        <C.ButtonFooter>
          <C.Button onClick={() => navigate('/surveys')}>{Props.button1}</C.Button>
          <C.Button disabled={state.gradeSelectedPos < 5} onClick={() => navigate('/contents')}>{Props.button2}</C.Button>
        </C.ButtonFooter>
        <C.Title>
            {Props.text2}
        </C.Title>
      </C.ContainerMedium>
    </C.Container>
  )
}