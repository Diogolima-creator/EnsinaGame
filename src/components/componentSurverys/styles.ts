import styled from "styled-components";

interface QuestionProps {
      QuestionType: string
}

interface AnswerProps {
      fs: number
      AnswerType: string
}

export const Container = styled.div`
      background-color:white;
      width:800px;
      height:800px;
      display:flex;
      align-items:center;
      flex-direction:column; 
      border-radius:5px;
`;

export const QuestionAnswer = styled.div<Pick<QuestionProps, 'QuestionType' >>`
      display:flex;
      flex-direction:column;
      width:100%;
      height:680px;
      justify-content:center;
      align-items:center;

      ${p => p.QuestionType === 'OnlySelectQuestion' && 'img{ width:700px; height:400px; }'}
      ${p => p.QuestionType === 'ImageInQuestion' && 'img{ height:520px; }'}
`;

export const NumberQuestion = styled.header`
      display:flex;
      width:100%;
      height:40px;
      justify-content:start;
      padding:20px;
      margin-left:40px;
      
`;
export const NumberQuestionItem = styled.h1`
      display:flex;
      justify-content:center;
      align-items:center;
      border:2px solid black;
      border-radius:45px;
      margin:0px;
      padding:0px; 
      width:40px;
      height:40px;
      font-size:26px;
`;

export const Question = styled.div`
      font-size:26px;
      margin-bottom:0px;
`;


export const Answer = styled.div`
      display: grid;
      grid-template-columns: auto auto;
      column-gap: 50px;
      row-gap: 0px;
    
`;


export const AnswerItem = styled.p<Pick<AnswerProps, 'fs' | 'AnswerType'>>`
      border:2px solid black;
      padding: 5px 10px;
      text-align:Center;
      cursor:pointer;
      transition: .1s;
      font-size:${p => p.fs}px;
      width:300px;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;

      img{
        width:300px;
        height:280px; 
      }

      ${p => p.AnswerType === 'OnlySelectQuestion' && 'img{ width:300px; height:280px; }'}
      ${p => p.AnswerType === 'AlternativesInImage' && 'img{ width:300px; height:200px; }'}
      ${p => p.AnswerType === 'OnlySelectQuestionWithImage' && 'img{ width:300px; height:200px; }'}

      :hover{
        background-color:black;
        color:white;
      }
`;