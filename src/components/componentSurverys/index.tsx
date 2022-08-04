import * as C from './styles'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { GameAction, useGame } from "../../context/GameContext"
import Questions from '../../services/Questions'
import { QuestionsArray } from '../../services/Questions'
export const ComponentSurveys = () => {
  

  const[ CountQuestions, setCountQuestions ] = useState(1)
  const[ QuestionsPosition, setQuestionsPosition ] = useState(0)
  const[ CorrectAnswer, setCorrectAnswer] = useState(0)
  const[ randomized, setRandomized] = useState(0)
  const navigate = useNavigate()
  const { state, dispatch } = useGame()

  const handleChoiceAlternative = (chosen:Number) => {
    if(chosen === Questions[state.gradeSelectedPos][state.subjectSelectedPos][QuestionsPosition].Answer){
      setCorrectAnswer(CorrectAnswer+1)
    }
    setQuestionsPosition(QuestionsPosition+1)
    setCountQuestions(CountQuestions+1)
    dispatch({
      type: GameAction.setreviewResults,
      payload: [...state.reviewResults,chosen]
    })
    if(QuestionsPosition === 9){
      if(chosen === Questions[state.gradeSelectedPos][state.subjectSelectedPos][QuestionsPosition].Answer){
        dispatch({
          type: GameAction.setanswerCorrects,
          payload: CorrectAnswer + 1
        })
        navigate('/surveysResults')
      }else{
        dispatch({
          type: GameAction.setanswerCorrects,
          payload: CorrectAnswer
        })
        navigate('/surveysResults')
      }
    }
  }

  function shuffle(array:QuestionsArray[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  if(randomized === 0){
    shuffle(Questions[state.gradeSelectedPos][state.subjectSelectedPos])
    setRandomized(1)
  }
  
  return( 
    <C.Container>
        <C.NumberQuestion>
            <C.NumberQuestionItem>{CountQuestions}.</C.NumberQuestionItem>
        </C.NumberQuestion>
        <C.QuestionAnswer>
          <C.Question>
              {Questions[state.gradeSelectedPos][state.subjectSelectedPos][QuestionsPosition].Question}
          </C.Question>
          {Questions[state.gradeSelectedPos][state.subjectSelectedPos][QuestionsPosition].QuestionImg !== '' && 
          <img src={Questions[state.gradeSelectedPos][state.subjectSelectedPos][QuestionsPosition].QuestionImg} alt="" width={Questions[state.gradeSelectedPos][state.subjectSelectedPos][QuestionsPosition].WidthImg}>
            
          </img>}
          <C.Answer>
              { (Questions[state.gradeSelectedPos][state.subjectSelectedPos][QuestionsPosition].QuestionType === 'OnlySelectQuestion' || Questions[state.gradeSelectedPos][state.subjectSelectedPos][QuestionsPosition].QuestionType === 'ImageInQuestion') && Questions[state.gradeSelectedPos][state.subjectSelectedPos][QuestionsPosition].Alternatives.map((alternative:string,key:number) => (
                <C.AnswerItem fs={Questions[state.gradeSelectedPos][state.subjectSelectedPos][QuestionsPosition].QuestionImg !== '' ? 16 : 24} onClick={() => handleChoiceAlternative(key)}>{alternative}</C.AnswerItem>
              ))}
              {Questions[state.gradeSelectedPos][state.subjectSelectedPos][QuestionsPosition].QuestionType === 'AlternativesInImage' && Questions[state.gradeSelectedPos][state.subjectSelectedPos][QuestionsPosition].Alternatives.map((alternative:string,key:number) => (
                <C.AnswerItem onClick={() => handleChoiceAlternative(key)}><img src={alternative} alt='' /></C.AnswerItem>
              ))}
          </C.Answer>
        </C.QuestionAnswer>
    </C.Container>
  )
}