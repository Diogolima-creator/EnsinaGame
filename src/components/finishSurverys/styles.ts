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

export const Title = styled.h1`

`;

export const Results = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    img{
      margin-top:0px;
      width:400px;
      height:500px;
    }

`;

export const ResultsList = styled.ul`
  list-style:none;
  font-size:18px;
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

export const ButtonList = styled.div`
  display:flex;
  margin-top:40px;
`;