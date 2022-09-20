import * as C from './styles'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useGame } from '../../context/GameContext'
import Questions from '../../services/Questions'
import { ArrowLeft, ArrowRight } from "phosphor-react"

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
            <C.HeaderReviewItem cursor={"pointer"} scale={"1.1"} onClick={()=> handleToNextToBack('Back')}><ArrowLeft size={32}/></C.HeaderReviewItem>
            <C.HeaderReviewItem cursor={""} scale={"1"}>{CountQuestions}</C.HeaderReviewItem>
            <C.HeaderReviewItem cursor={"pointer"} scale={"1.1"} onClick={()=> handleToNextToBack('Next')}><ArrowRight size={32}/></C.HeaderReviewItem>
        </C.HeaderReview>
        <C.QuestionAnswer QuestionType={Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].QuestionType}>
          <C.Question>
              {Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].Question}
          </C.Question>
          {Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].QuestionImg !== '' && 
          <img src={Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].QuestionImg} alt="" width={Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].WidthImg}>
            
          </img>}
          <C.Answer>
              {(Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].QuestionType === 'OnlySelectQuestion' || Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].QuestionType === 'ImageInQuestion') && Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].Alternatives.map((alternative:string[],key:number) => (
                key === Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].Answer ? <C.AnswerItem AnswerType={'OnlySelectQuestion'} fs={Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].QuestionImg !== '' ? 18 : 24} color={'green'}>{alternative[0]}</C.AnswerItem> : key === reviewResults[QuestionsPosition] ? <C.AnswerItem AnswerType={'OnlySelectQuestion'} fs={Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].QuestionImg !== '' ? 18 : 24} color={'red'}>{alternative}</C.AnswerItem> : <C.AnswerItem AnswerType={'OnlySelectQuestion'} fs={Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].QuestionImg !== '' ? 18 : 24} color={'white'}>{alternative[0]}</C.AnswerItem>
              ))}
              {Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].QuestionType === 'AlternativesInImage' && Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].Alternatives.map((alternative:string[],key:number) => (
                key === Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].Answer ? <C.AnswerItem AnswerType={'AlternativesInImage'} fs={20} color={'green'}><img src={alternative[0]} alt='' /></C.AnswerItem> : key === reviewResults[QuestionsPosition] ? <C.AnswerItem AnswerType={'AlternativesInImage'} fs={20} color={'red'}><img src={alternative[0]} alt='' /></C.AnswerItem> : <C.AnswerItem AnswerType={'AlternativesInImage'} fs={20} color={'white'}><img src={alternative[0]} alt='' /></C.AnswerItem>
              ))
              }
              {Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].QuestionType === 'OnlySelectQuestionWithImage' && Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].Alternatives.map((alternative:string[],key:number) => (
                key === Questions[gradeSelectedPos][subjectSelectedPos][QuestionsPosition].Answer ? <C.AnswerItem AnswerType={'OnlySelectQuestionWithImage'} fs={22} color={'green'}>{alternative[0]}<img src={alternative[1]} alt='' /></C.AnswerItem> : key === reviewResults[QuestionsPosition] ? <C.AnswerItem AnswerType={'OnlySelectQuestionWithImage'} fs={22} color={'red'}>{alternative[0]}<img src={alternative[1]} alt='' /></C.AnswerItem> : <C.AnswerItem AnswerType={'OnlySelectQuestionWithImage'} fs={22} color={'white'}>{alternative[0]}<img src={alternative[1]} alt='' /></C.AnswerItem>
              ))
              }
          </C.Answer>
        </C.QuestionAnswer>
        <C.Footer>
          <C.Button onClick={() => navigate('/surveysResults')}>Sair do Review</C.Button>
        </C.Footer>
    </C.Container>
  )
}