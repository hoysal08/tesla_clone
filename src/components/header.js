import React,{useState} from 'react'
import styled from"styled-components"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcone from '@material-ui/icons/Close'
import cars from "../carInfo.json"



function Header() {

    const[burgerstatus,setburgerstatus]=useState(false);
  return (
    <Container>
        <a>
            <img src="/images/logo.svg" alt=""></img>
        </a>
        <Menu>
            {cars.map((car,index)=>{
                return(
                <a href="#" key={index}>{car.title}</a> 
                )
            }) }

        </Menu>

        <RightMenu>
        <a href="#">Shop</a>
        <a href="#">  Account</a>
        <CustomMenu onClick={()=>setburgerstatus(true)}/>
        </RightMenu>
        <BurgerNav show={burgerstatus}>
        <Closewrapper>
            <CustomClose onClick={()=>setburgerstatus(false)}/>
        </Closewrapper> 
        {cars.map((car,index)=>{
                return(
                    <li><a href="#">{car.title}</a></li> 
                )
            }) }
            
           <li><a href="#">Existing Inventory</a></li> 
           <li><a href="#">Used Inventory</a></li> 
           <li><a href="#">Trade-In</a></li> 
           <li><a href="#">Cybertruck</a></li> 
           <li><a href="#">Roadster</a></li> 
           <li><a href="#">supercharge</a></li> 
          

        </BurgerNav>

    </Container>
  )
}

export default Header
const Container=styled.div`
 min-height:60px;
 position:fixed;
 display:flex;
 align-item:center;
 justify-content:space-between;
 padding:  20px;
 top:0;
 left:0;
 right:0;
 z-index:1;
 background:transparent;
`
const Menu=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
 a{
     font-weight:600;
     text-transform:uppercase;
     padding:0px 15px;
     flex-wrap:reversewrap;
     margin-top:-5px;
 }
 @media(max-width:768px){
     display:none;
 }
`
const RightMenu=styled.div`
display:flex;
align-items:center;
a{
    font-weight:600;
    text-transform:uppercase;
    margin-right:10px;
    margin-top:-2px
}

`
const CustomMenu=styled(MenuIcon)`
 cursor:pointer;
 margin-top:0px;

`
const BurgerNav=styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:2;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transform:${props=>props.show?'translateX(0)':'translateX(100%)'};
transition:transform 0.2s;
li{
    padding:15px 0;
    border-bottom:1px solid rgba(0,0,0,.2);
    a{
        font-weight:600;
    }
}
`
const CustomClose=styled(CloseIcone)`
cursor:pointer;
`
const Closewrapper=styled.div`
display:flex;
justify-content:flex-end;
`