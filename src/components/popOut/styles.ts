import styled from 'styled-components'


export const Container = styled.div`
  position:absolute;
  width:100vw;
  height:100vh;
  background-color:rgba(0,0,0, 0.7);
  top:0px;
  display:none;
`;

export const Header = styled.header`
  display:flex;
  align-items:center;
  justify-content:space-evenly;
  height:20px;
`;

export const ButtonClose = styled.button`
  cursor:pointer;
  border:2px solid black;
  padding:0px;
  width:25px;
  height:25px;
  font-weight:bold;
  opacity: .85;
  background-color: #cccccc;
  font-size:18px;
  font-family: 'Bubblegum Sans', cursive;
  border-radius: 45px;
  :hover{
    background-color:White;
    opacity: 1;
  }
`;

export const ContainerMedium = styled.div`
  position:absolute;
  padding:20px;
  width:330px;
  height:130px;
  background-color:white;
  border:2px solid black;
  text-align:center;
  top:40vh;
  right:40vw;
`;

export const Title = styled.h1`
    font-size: 22px;
    margin-top:20px;
`;

export const ButtonFooter = styled.footer`
    display:flex;
    justify-content:space-around;
    margin-top:25px;
`;

export const Button = styled.button`
    cursor:pointer;
    border:3px solid black;
    padding:5px;
    width:100px;
    font-weight:bold;
    opacity: .85;
    background-color: #cccccc;
    font-size:18px;
    font-family: 'Bubblegum Sans', cursive;
    :hover{
      background-color:White;
      opacity: 1;
    }
`;