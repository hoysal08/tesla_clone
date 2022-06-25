import React from 'react'
import styled from "styled-components"
import Section from'./section'


function home() {
  return (
    <Container>
        <Section title="Model S" 
        desc="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftbtnText="Custom Order"
        rightBtnText="Existing inventory"/>

        <Section  title="Model Y" 
        desc="Order Online for Touchless Delivery"
        backgroundImg="model-Y.jpg"
        leftbtnText="Custom Order"
        rightBtnText="Existing inventory"/>

        <Section  title="Model 3" 
        desc="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftbtnText="Custom Order"
        rightBtnText="Existing inventory"/>

        <Section  title="Model X" 
        desc="Order Online for Touchless Delivery"
        backgroundImg="model-X.jpg"
        leftbtnText="Custom Order"
        rightBtnText="Existing inventory"/>
        
        <Section  title="Lowest Cost Solar Panels in America" 
        desc="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftbtnText="Order Now"
        rightBtnText="Learn more"/>
        
        <Section  title="Solar for New Roofs" 
        desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels "
        backgroundImg="solar-roof.jpg"
        leftbtnText="Order now"
        rightBtnText="Learn more"/>
       
       <Section  title="Accessories" 
        desc=""
        backgroundImg="accessories.jpg"
        leftbtnText="Shop now"
        />

    </Container>
  )
}

export default home
const Container=styled.div`
   height:100vh;


`
