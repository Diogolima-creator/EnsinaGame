import * as C from './styles'
import { useNavigate } from 'react-router-dom';
import { useGame } from '../../context/GameContext'
import { GradesNotas} from '../../services/Guides';
import ReactPlayer from 'react-player'

export const FinishSurveys = () => {

  const navigate = useNavigate()
  const { answerCorrects, setReviewResults } = useGame()

  const resetAndMove = (locateToMove:string) => {
    setReviewResults([])
    navigate(`${locateToMove}`)
  }

  return( 
    <C.Container>
       <C.Title>
          Você terminou seu teste!
       </C.Title>
       <C.Results>
          <C.Title> Seu resultado foi: {answerCorrects}/10 </C.Title>
          {answerCorrects <10 ? <img src={GradesNotas[answerCorrects].NotasImg}/> : <ReactPlayer width={400} height={500} className='myVideo' volume={0.01} loop={true} playing={true} url={GradesNotas[answerCorrects].NotasImg} />}
          <C.ButtonList>
            <C.Button onClick={()=> navigate('/reviewResults')}>Ver Respostas</C.Button>
            <C.Button onClick={()=> resetAndMove('/surveys')}>Tentar Novamente</C.Button>
            <C.Button onClick={()=> resetAndMove('/subject')}>Escolher outra materia</C.Button>
          </C.ButtonList>
       </C.Results>
    </C.Container>
  )
}