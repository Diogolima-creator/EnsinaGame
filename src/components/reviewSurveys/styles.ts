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
            height:400px;
      }
`;

export const QuestionAnswer = styled.div`
      display:flex;
      flex-direction:column;
      width:100%;
      height:655px;
      justify-content:center;
      align-items:center;
`;

export const HeaderReview = styled.header`
      display:flex;
      width:90%;
      height:40px;
      justify-content:space-between;
      padding:20px;
      
`;

interface Props {
      cursor: string
      scale: string
      fs: number
      color: string
}

export const HeaderReviewItem = styled.h1<Pick<Props, 'cursor' | 'scale'>> `
      display:flex;
      justify-content:center;
      align-items:center;
      border:2px solid black;
      border-radius:45px;
      margin:0px;
      padding:0px; 
      width:35px;
      cursor:${p => p.cursor};
      transition: .5;

      :hover{
            transform: scale(${p => p.scale});
      }
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

export const AnswerItem = styled.h1<Pick<Props, 'fs' | 'color'>>`
      border:2px solid black;
      padding: 5px 20px;
      text-align:Center;
      width:300px;
      font-size:${p => p.fs}px;
      transition: .1s;
      background-color: ${p => p.color};
      cursor: default;

      img{
            width:300px;
            height:220px; 
      }
`;

export const Footer = styled.footer`
      margin-bottom:40px;
`;

export const Button = styled.button`
      cursor:pointer;
      border:3px solid black;
      padding:20px;
      width:200px;
      margin:0 5px;
      font-weight:bold;
      color:black;
      background-color: #cccccc;
      font-size:14px;
      transition: .3s;

      :hover{
        background-color:black;
        color:white;
      }
`;