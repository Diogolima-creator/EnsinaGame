import * as C from './styles'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Grades } from '../../services/Grades'
import { useGame } from '../../context/GameContext'

export const ChoiceContent = () => {

  const navigate = useNavigate()
  const { gradeSelectedPos, subjectSelectedPos } = useGame()
  const [selected, setSelected] = useState<string[]>([])

  const addSelectedOnArrays = (content:string,key:Number) => {
      setSelected([...selected,content])
      document.getElementById('liItem'+key)!.style.backgroundColor = 'black'
      document.getElementById('ContentItem'+key)!.style.backgroundColor = 'black'
      document.getElementById('ContentItem'+key)!.style.border = '10px solid black'
      document.getElementById('ContentItem'+key)!.style.boxShadow = '5px 5px 8px 3px rgba(0, 0, 0,0.63)'
  }

  const removeSelectedOnArrays = (content:string,key:Number) => {
      selected.splice(selected.indexOf(content), 1)
      setSelected([...selected])
      document.getElementById('liItem'+key)!.style.backgroundColor = '#0066cc'
      document.getElementById('ContentItem'+key)!.style.backgroundColor = '#0066cc'
      document.getElementById('ContentItem'+key)!.style.border = '10px solid #0066cc'
      document.getElementById('ContentItem'+key)!.style.boxShadow = '5px 5px 8px 3px rgba(0, 102, 204,0.63)'
  }

  return(
    <C.Container>
        <C.Header>
          <button onClick={() => navigate('/subject')}><FontAwesomeIcon icon={faShare}></FontAwesomeIcon></button>
        </C.Header>
        <C.Title>
          Escolha os conteúdos que voce quer estudar:
        </C.Title>
        <C.Content>
          <C.ContentList>
              {Grades[gradeSelectedPos].subjects[subjectSelectedPos].content.map((content:string,key: Number) => (
                <C.ContentItem id={'ContentItem'+key}onClick={(selected.filter((contentInArray) => content === contentInArray).length === 0) ? () => addSelectedOnArrays(content,key) : () => removeSelectedOnArrays(content,key)}>
                  <li id={'liItem'+key}>{content}</li>
                </C.ContentItem>
              ))}
          </C.ContentList>
      </C.Content>
      <C.TitleSelects>
          Você Escolheu: <strong>{selected.map((selected) => (selected+' '))}</strong>
      </C.TitleSelects>
      <C.Button>
          Começar o Teste
      </C.Button>
    </C.Container>
  )
}