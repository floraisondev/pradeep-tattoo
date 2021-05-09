import React from "react"
class Paragraph extends React.Component {  
    state = {
        specialityContent : `It was great to work with the legend himself, Sanjay Dutt sir, for the movie KGF with many big showbiz sensations!The track record has been great so far.`
    }
    render() {
        return(
            this.state.map((data) =>{
                return  <p>{data.specialityContent}</p>
            })
           
        ) 
    }
} 

export default Paragraph;



