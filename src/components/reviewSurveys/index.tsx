import * as C from './styles'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useGame } from '../../context/GameContext'
import Questions from '../../services/Questions'

export const ReviewSurveys = () => {

  const[ CountQuestions, setCountQuestions ] = useState(1)
  const[ QuestionsPosition, setQuestionsPosition ] = useState(0)
  const navigate = useNavigate()
  const { gradeSelectedPos, subjectSelectedPos, reviewResults } = useGame()

  const handleToNextToBack = (Move:string) => {
      if(Move === 'Back' && QuestionsPosition-1 !== -1){
          setQuestionsPosition(QuestionsPosition-1)
          setCountQuestions(CountQuestions-1)
      }
      if(Move === 'Next' && QuestionsPosition+1 !== 10){
          setQuestionsPosition(QuestionsPosition+1)
          setCountQuestions(CountQuestions+1)
      }
  }

  return( 
    <C.Container>
        <C.HeaderReview>
            <C.HeaderReviewItem cursor={"pointer"} scale={"1.1"} onClick={()=> handleToNextToBack('Back')}>q</C.HeaderReviewItem>
            <C.HeaderReviewItem cursor={""} scale={"1"}>{CountQuestions}</C.HeaderReviewItem>
            <C.HeaderReviewItem cursor={"pointer"} scale={"1.1"} onClick={()=> handleToNextToBack('Next')}>w</C.HeaderReviewItem>
        </C.HeaderReview>
        <C.QuestionAnswer>
          <C.Question>
              {Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].Question}
          </C.Question>
          {Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].QuestionImg !== '' && 
          <img src={Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].QuestionImg} alt="">
            
          </img>}
          <C.Answer>
              {(Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].QuestionType === 'OnlySelectQuestion' || Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].QuestionType === 'ImageInQuestion') && Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].Alternatives.map((alternative:string,key:number) => (
                key === Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].Answer ? <C.AnswerItem fs={Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].QuestionImg !== '' ? 16 : 24} color={'green'}>{alternative}</C.AnswerItem> : key === reviewResults[QuestionsPosition] ? <C.AnswerItem fs={Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].QuestionImg !== '' ? 16 : 24} color={'red'}>{alternative}</C.AnswerItem> : <C.AnswerItem fs={Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].QuestionImg !== '' ? 16 : 24} color={'white'}>{alternative}</C.AnswerItem>
              ))}
              {Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].QuestionType === 'AlternativesInImage' && Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].Alternatives.map((alternative:string,key:number) => (
                key === Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].Answer ? <C.AnswerItem fs={Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].QuestionImg !== '' ? 16 : 24} color={'green'}><img src={alternative} alt='' /></C.AnswerItem> : key === reviewResults[QuestionsPosition] ? <C.AnswerItem fs={Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].QuestionImg !== '' ? 16 : 24} color={'red'}><img src={alternative} alt='' /></C.AnswerItem> : <C.AnswerItem fs={Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].QuestionImg !== '' ? 16 : 24} color={'white'}><img src={alternative} alt='' /></C.AnswerItem>
              ))}
          </C.Answer>
        </C.QuestionAnswer>
        <C.Footer>
          <C.Button onClick={() => navigate('/surveysResults')}>Sair do Review</C.Button>
        </C.Footer>
    </C.Container>
  )
}