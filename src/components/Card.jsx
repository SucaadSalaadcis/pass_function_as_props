import React from 'react'

function Card(props) {
    console.log(props); 

    const handleClick = () => {
      props.clickMe(props.title)
    }
  

  return (
      <div style={{border: "1px solid black",marginTop:"50px",marginLeft: '27px',width: "300px", height: "340px"}}>
        <h2 style={{color: "black",marginLeft: "58px"}}>{props.title}</h2>
        <img src={props.img}  alt="" style={{marginLeft: "30px"}}  />
        <p style={{color: "black",marginLeft: "58px"}}>{props.description}</p>
        <button onClick={handleClick}  style={{background: "pink",marginTop:"16px" ,marginLeft: '87px',}}>Go any where</button>
    </div>
  )
}

export default Card