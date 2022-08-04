import { StartSurveys } from '../../components/startSurveys'
import { ComponentSurveys } from '../../components/componentSurverys'
import * as C from './styles'
import { useEffect, useState } from 'react';

const Surveys = () => {

  const[timer, setTimer] = useState(3)

  const timerToZero = () => {
    let tx = setTimeout(function(){setTimer(timer-1)}, 1000)
  }
  
  useEffect(() => {
    if(timer !== 0){
      timerToZero()  
    }
  })

  return(
    <C.Container>
      { timer != 0 &&
        <StartSurveys timer={timer}/>
      }
      { timer === 0 &&
        <ComponentSurveys />
      }
    </C.Container>
  )
}

export default Surveys;