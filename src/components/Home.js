import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order online for touchless delivery."
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Invetory"
      />
      <Section
        title="Model Y"
        description="Order online for touchless delivery."
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Invetory"
      />
      <Section
        title="Model 3"
        description="Order online for touchless delivery."
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Invetory"
      />
      <Section
        title="Model X"
        description="Order online for touchless delivery."
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Invetory"
      />
      <Section
        title="Lowest cost solar panels in America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar for new roofs."
        description="Solar roof cost less than a new roof."
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Order Now"
        rightBtnText=""
      />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
`;
