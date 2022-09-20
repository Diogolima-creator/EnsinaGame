import styled from "styled-components";


export const Container = styled.div`
      background-color:white;
      width:800px;
      height:800px;
      display:flex;
      align-items:center;
      flex-direction:column; 
      border-radius:5px;
`;

export const Header = styled.header`
      display:flex;
      align-items:start;
      width:100%;

      button{
        font-family: 'Indie Flower', cursive;
        font-size:24px;
        width:45px;
        height:45px;
        padding:5px;
        margin:10px 0px;
        margin-left:10px;
        border:2px solid black;
        background-color:black;
        color:white;
        border-radius:45px;
        cursor:pointer;
        transition: .4s;
      }

      button:hover{
        transform: scale(1.10);
      }
`;

export const Title = styled.h1`
      font-size:18px;
`;

export const Subjects = styled.div`
      width:800px;
      height:400px;
      margin:0px;
      margin-top:70px;
      padding:0px;
`;

export const SubjectsList = styled.ul`
    display:grid;
    grid-template-columns: auto auto auto auto;
    list-style:none;
    margin-top:20px;
    row-gap: 70px;
    column-gap: 10px;
`;

export const SubjectsItem = styled.div`
      display:flex;
      flex-direction:column;
      width:130px;
      height:130px;
      background-color:black;
      border: 10px solid black;
      border-radius:15px;
      color:white;
      cursor:pointer;
      box-shadow: 5px 5px 8px 3px rgba(0,0,0,0.63);
      transition: .2s;
      
      :hover{
        transform: scale(1.05);

        li{
          transform: scale(1.05);
        }
      }

      li{
        background-color:black;
        text-align:center;
        height:20px;
        font-size:20px;
      }

      img{
        margin:0px;
        padding:0px;
        width:100%;
        height:110px;
      }
`;

