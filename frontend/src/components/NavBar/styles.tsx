import styled, { css } from "styled-components";


type NavBarProps = {
    scrollY: number
}

const fixedStyles = `
    position: fixed;
    background-color: rgba(50,50,59,.7);
    z-index: 999;
    width: 100%;
    border-bottom: medium none;
    transition: background-color 300ms ease-in-out;
    
`;

const StyledNavbar = styled.nav`
@media (max-width: 993px) {
    li {
        visibility: hidden;
    }
    ul {
        justify-content: flex-end;
        align-content:center;
        align-items:center;
    }
}
    position: fixed;
    transition: all 300ms ease-in-out;
    width: 100%;
    z-index: 999;
    
    
    ul {
        transition: padding 300ms ease-in-out;
        color: #fff;
        display: flex;
        flex-direction: row;
        list-style: none;
        margin: 0 auto;
        font-weight:500;
        width:90%;
        li {
            font-size: 14px;
            padding: 10px 15px;
            cursor:pointer;
        }
        li:hover{
            font-weight:600;
            -webkit-transition: all .5s;
            -moz-transition: all .5s;
            -o-transition: all .5s;
            transition: all .5s;

        }
        padding: 25px 0px;
        ${(props: NavBarProps) => props.scrollY >= 20 ? { padding: "10px 0px" } : ""}
    }
    ${(props: NavBarProps) => props.scrollY >= 20 ? css`${fixedStyles}` : ""}`;


type NavIconProps = {
    onClick: () => void;
    open: boolean;
}
export const StyledNavIcon = styled.div`
@media (max-width: 993px) {
    
    position:absolute;
    height: 26px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }

  margin-top:5px;
  
  div {
      
    width: 2rem;
    height: 0.25rem;
    background: #fff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
        
      transform: ${(props: NavIconProps) => props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${(props: NavIconProps) => props.open ? '0' : '1'};
transform: ${(props: NavIconProps) => props.open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
    transform: ${(props: NavIconProps) => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
}
  }
  }

div:before{ }

`;

export default StyledNavbar;