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

export const Title = styled.p`
      font-size:24px;

      strong{
        color:#0066cc;
      }
`;

export const Grade = styled.div`
      width:800px;
      height:400px;
      margin:0px;
      margin-top:70px;
      padding:0px;
`;

export const GradeList = styled.ul`
    display:grid;
    grid-template-columns: auto auto auto auto;
    list-style:none;
    margin-top:20px;
    row-gap: 70px;
    column-gap: 10px;
`;

export const GradeItem = styled.div`
      display:flex;
      flex-direction:column;
      width:130px;
      height:20px;
      background-color:#0066cc;
      border: 10px solid #0066cc;
      border-radius:15px;
      color:white;
      cursor:pointer;
      box-shadow: 5px 5px 8px 3px rgba(0, 102, 204,0.63);
      transition: .3s;
      :hover{
        transform: scale(1.05);

        li{
          transform: scale(1.05);
        }
      }

      li{
        background-color:#0066cc;
        text-align:center;
        height:20px;
        font-size:20px;
      }

`;

export const Button = styled.button`
    cursor:pointer;
    border:3px solid black;
    padding:20px;
    width:200px;
    margin:0 5px;
    font-weight:bold;
    opacity: .85;
    background-color: #cccccc;
    font-size:14px;

    :hover{
      background-color:White;
      opacity: 1;
    }
`;