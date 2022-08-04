import * as C from './styles'
import { useEffect, useState } from 'react';
import { FinishSurveys } from '../../components/finishSurverys';

const SurveysResults = () => {


  return(
    <C.Container>
     <FinishSurveys />
    </C.Container>
  )
}

export default SurveysResults;