import * as C from './styles'
import { useNavigate } from 'react-router-dom'
import { useGame } from '../../context/GameContext'
import { PopOut } from '../popOut'
import { Grades } from '../../services/Grades'
import { ArrowBendUpLeft } from 'phosphor-react'

type SubjectsProps = {
  title: string,
  img: any,
  content: string[],
  alt?: string
}

export const MenuSubject = () => {

  const navigate = useNavigate()
  const { setSubjectSelected, setSubjectSelectedPos, gradeSelectedPos, subjectSelected} = useGame()

  const openPopOut = (subject:string, position:number) => {
   if(position < 1){
    setSubjectSelected(subject)
    setSubjectSelectedPos(position)
   document.getElementById('popOut')!.style.display = 'inline'
   }
  } 

  return(
    <C.Container>
      <C.Header>
        <button onClick={()=> navigate('/difficulty')}><ArrowBendUpLeft size={32}/></button>
      </C.Header>
      <C.Title>
          Escolha a materia que você quer estudar hoje
      </C.Title>
      <C.Subjects>
          <C.SubjectsList>
              {
                Grades[gradeSelectedPos].subjects.map((Props:SubjectsProps,key: number) => (
                  <C.SubjectsItem onClick={()=> openPopOut(Props.title, key)}>
                    <img src={Props.img} alt={Props.alt}></img>
                    <li>{Props.title}</li>
                  </C.SubjectsItem>
                ))
              }
          </C.SubjectsList>
      </C.Subjects>
      <PopOut id='popOut' text={'Escolha a forma de jogar:'} text2={`A matéria escolhida foi: ${subjectSelected}`} button1={'Conteúdos Aleatórios'} button2={'Escolher Conteúdo'}/>             
    </C.Container>
  )
}