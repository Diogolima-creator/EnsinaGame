import styled from "styled-components";


export const Container = styled.div`
      background-color:white;
      width:600px;
      height:600px;
      display:flex;
      align-items:center;
      flex-direction:column; 
      justify-content:space-evenly;
      border-radius:5px;
`;

export const Menu = styled.ul`
      list-style:none;

      button{
        font-size:24px;
        width:140px;
        padding:10px;
        margin:20px 0px;
        border:2px solid black;
        background-color:black;
        color:white;
        border-radius:45px;
        cursor:pointer;
        transition: .5s;
      }
      
      button:hover{
        transform: scale(1.05);
      }
`;

export const Title = styled.h1`
      color:black;
`;

export const Footer = styled.footer`
      
      font-weight:bold;
`;