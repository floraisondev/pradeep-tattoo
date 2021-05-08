import React from "react"
import styled from "styled-components"
import {StaticImage} from "gatsby-plugin-image"

const StyledSection = styled.section`
width : 100%;
height : 88vh;
background : #000;
display : flex;
justify-content : space-between;
@media(max-width : 1040px){
    flex-direction : column;
    .img-container{
        display : none;
    }
}
.heading-container{
    color : #fff;
    margin-right : 3%;
}

.img-container{
    margin: 2%;
}

.title{
    font-size : 5rem;
    text-transform : uppercase;
    letter-spacing : 2px;
    font-family : Oswald;
    font-weight : 700;
    background: -webkit-linear-gradient(84deg, rgba(94,90,84,1) 1%, rgba(228,160,121,1) 34%, rgba(215,187,172,1) 46%, rgba(214,129,85,1) 69%, rgba(175,102,49,1) 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
}
.title-2{
    font-size : 4rem;
    text-transform : uppercase;
    letter-spacing : 2px;
    font-family : Oswald;
    font-weight : 700;
    text-align:center;
    background: -webkit-linear-gradient(84deg, rgba(94,90,84,1) 1%, rgba(228,160,121,1) 34%, rgba(215,187,172,1) 46%, rgba(214,129,85,1) 69%, rgba(175,102,49,1) 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;   
}

.subtitle{
    color : #ffa700;
    letter-spacing : 1px;
    font-family : Oswald;
    font-size : 1.5em;
    text-align : right;
}
`

const Hero = () => {
    return(
        <StyledSection id="hero">
            <div class="img-container">
            <svg width="356" height="356" viewBox="0 0 356 356" fill="none" xmlns="http://www.w3.org/2000/svg">
             <circle cx="178" cy="178" r="178" fill="#FFA700"/>
           </svg>
           {/* <StaticImage src="../../images/landing-page-girl" alt="landing-page-gril"/> */}

            </div>
            <div class ="heading-container">
                <h1 class="title">Pradeep Tattoo Zone</h1>
                <h2 class = "title-2">Celebrity tattoo artist</h2>
                <h3 class = "subtitle">Temporary and permanent tattoos</h3>
            </div>
        </StyledSection>
    )
}
export default Hero