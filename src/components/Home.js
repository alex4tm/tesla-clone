import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import Footer from './Footer';

const Home = (props) => {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
        backgroundImg="model-s.jpg"
        id="toucheless"
      />
      <Section
        title="Model Y"
        description="Order online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
        backgroundImg="model-y.jpg"
      />

      <Section
        title="Model 3"
        description="Order online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
        backgroundImg="model-3.jpg"
      />

      <Section
        title="Model X"
        description="Order online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
        backgroundImg="model-x.jpg"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        leftBtnText="Order now"
        rightBtnText="Learn more"
        backgroundImg="solar-panel.jpg"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        leftBtnText="Order now"
        rightBtnText="Learn more"
        backgroundImg="solar-roof.jpg"
      />
      <Section
        title="Accessories"
        description=""
        leftBtnText="Order now"
        backgroundImg="accessories.jpg"
      />
      <Footer />
    </Container>
  )
}

export default Home;

const Container = styled.div`
  height: 100vh;

`
