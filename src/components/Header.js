import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'



const Header = (props) => {
  const [burgerNavStatus, setBurgerNavStatus] = useState(false);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg"  alt="logo" />
      </a>
      <Menu>
         <a href="#">Model S</a>
         <a href="#">Model 3</a>
         <a href="#">Model X</a>
         <a href="#">Model Y</a>
         <a href="#">Solar Roof</a>
         <a href="#">Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu onClick={() => setBurgerNavStatus(true)}/>
      </RightMenu>
      <BurgerNav show={burgerNavStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerNavStatus(false)}/>
        </CloseWrapper>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Test Drive</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Semi</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Powerwall</a></li>
        <li><a href="#">Commercial Energy</a></li>
        <li><a href="#">Utilities</a></li>
        <li><a href="#">Find Us</a></li>
        <li><a href="#">Support</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header;


const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    font-weight: 600;
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    margin-right: 10px;
  }
`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 10;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transition: all 0.3s ease-in-out;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0 , 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  min-height: 48px;
  min-width: 48px;
  padding: 12px;
  path {
    fill: black;
  }
  :hover {
    background: rgba(222,222,222,0.7);
    border-radius: 50%;
  }
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`






