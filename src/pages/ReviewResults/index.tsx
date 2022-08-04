import * as C from './styles'
import { useEffect, useState } from 'react';
import { ReviewSurveys } from '../../components/reviewSurveys';

const ReviewResults = () => {


  return(
    <C.Container>
      <ReviewSurveys />
    </C.Container>
  )
}

export default ReviewResults;