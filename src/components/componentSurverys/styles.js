import styled from "styled-components";


export const Container = styled.div`
      background-color:white;
      width:800px;
      height:800px;
      display:flex;
      align-items:center;
      flex-direction:column; 
      border-radius:5px;

      img{
            height:500px;
      }
`;

export const QuestionAnswer = styled.div`
      display:flex;
      flex-direction:column;
      width:100%;
      height:680px;
      justify-content:center;
      align-items:center;
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
      width:35px;

`;

export const Question = styled.div`
      font-size:24px;
      margin-bottom:50px;
`;


export const Answer = styled.div`
      display: grid;
      grid-template-columns: auto auto;
      column-gap: 50px;
      row-gap: 0px;
    
`;

export const AnswerItem = styled.h1(({fs})=>`
      border:2px solid black;
      padding: 5px 20px;
      text-align:Center;
      cursor:pointer;
      transition: .1s;
      font-size:${fs}px;
      width:300px;

      img{
        width:300px;
        height:280px; 
      }

      :hover{
        background-color:black;
        color:white;
      }
`);