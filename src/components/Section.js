import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade'

const Section = ({title, description, leftBtnText, rightBtnText, backgroundImg }) => {
  return (
    <Wrap bgImg={ backgroundImg }>
      <Fade bottom>
        <ItemText>
          <h1>{ title }</h1>
          <p>{ description }</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>
              { leftBtnText }
            </LeftButton>
            {rightBtnText &&
              <RightButton>
                { rightBtnText}
              </RightButton>
            }
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  )
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${props => `url("/images/${props.bgImg}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const ItemText = styled.div`
  padding: 15vh;
  h1 {
    margin-bottom: 10px;
    letter-spacing: 0.1rem;
    font-size: 40px;
    font-weight:500px;
  }

`
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftButton = styled.div`
  background-color: rgba(23, 26,  32, 0.8);
  width: 256px;
  height: 40px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`
const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`
const Buttons = styled.div`
`
