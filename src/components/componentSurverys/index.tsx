import * as C from './styles'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useGame } from "../../context/GameContext"
import Questions from '../../services/Questions'
import { QuestionsArray } from '../../services/Questions'
export const ComponentSurveys = () => {
  

  const[ CountQuestions, setCountQuestions ] = useState(1)
  const[ QuestionsPosition, setQuestionsPosition ] = useState(0)
  const[ CorrectAnswer, setCorrectAnswer] = useState(0)
  const[ randomized, setRandomized] = useState(0)
  const navigate = useNavigate()
  const { gradeSelectedPos, subjectSelectedPos, 
    reviewResults, setReviewResults, setAnswerCorrects } = useGame()
  
  const handleChoiceAlternative = (chosen:number) => {
    if(chosen === Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].Answer){
      setCorrectAnswer(CorrectAnswer+1)
    }
    setQuestionsPosition(QuestionsPosition+1)
    setCountQuestions(CountQuestions+1)
    let newArray = [...reviewResults, chosen]
    setReviewResults(newArray)

    if(QuestionsPosition === 9){
      if(chosen === Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].Answer){
        setAnswerCorrects(CorrectAnswer+1)
        navigate('/surveysResults')
      }else{
        setAnswerCorrects(CorrectAnswer)
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
    shuffle(Questions[gradeSelectedPos][subjectSelectedPos])
    setRandomized(1)
  }
  
  return( 
    <C.Container>
        <C.NumberQuestion>
            <C.NumberQuestionItem>{CountQuestions}.</C.NumberQuestionItem>
        </C.NumberQuestion>
        <C.QuestionAnswer>
          <C.Question>
              {Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].Question}
          </C.Question>
          {Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].QuestionImg !== '' && 
          <img src={Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].QuestionImg} alt="" width={Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].WidthImg}>
            
          </img>}
          <C.Answer>
              { (Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].QuestionType === 'OnlySelectQuestion' || Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].QuestionType === 'ImageInQuestion') && Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].Alternatives.map((alternative:string,key:number) => (
                <C.AnswerItem fs={Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].QuestionImg !== '' ? 16 : 24} onClick={() => handleChoiceAlternative(key)}>{alternative}</C.AnswerItem>
              ))}
              {Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].QuestionType === 'AlternativesInImage' && Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].Alternatives.map((alternative:string,key:number) => (
                <C.AnswerItem fs= {16} onClick={() => handleChoiceAlternative(key)}><img src={alternative} alt='' /></C.AnswerItem>
              ))}
          </C.Answer>
        </C.QuestionAnswer>
    </C.Container>
  )
}