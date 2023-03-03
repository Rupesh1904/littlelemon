import React from 'react'
import Button from 'react-bootstrap/Button';
import image1 from '../Components/bruschetta.jpg';
import image2 from '../Components/greeksalad.jpeg';
import image3 from '../Components/lemondessert.jpeg';
import {Card} from "react-bootstrap";
import '../Components/Card.css';



const Cards=()=> {
  const cardInfo=[
    {image:image1,title:'Bruchetta',text:"hello to you",price:'$12'},
    {image:image2,title:'Greek Salad',text:"hello to you",price:'$15'},
    {image:image3,title:'Lemon Dessert',text:"hello to you",price:'$20'}
  ];

  const renderCard=(card, index)=>{
    return(
      <Card style={{ width: '18rem' }} key={index} className="box">
      <Card.Img className='Images' variant="top" src={card.image}/>
      <Card.Body className='Body'>
          <Card.Title className='Head'>
            <div>
            {card.title}
            </div>
            <div className='paragraph'>
              <p>{card.price}</p>
            </div>
            </Card.Title>
        <Card.Text>
          {card.text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    )
  }
  return(
    <div className="center">
    <div className="grid">
      {cardInfo.map(renderCard)}
    </div>
  </div>
  );
  }
  export default Cards;