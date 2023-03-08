import React from 'react';
import { Button, Card } from 'react-bootstrap';
import '../Components/Card.css';
import bruschettaImage from '../Components/bruschetta.jpg';
import greekSaladImage from '../Components/greeksalad.jpeg';
import lemonDessertImage from '../Components/lemondessert.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';


const text1="The famous greek salad of crispy lettuice, olives, peppers and the chicago style feta cheese garnishes with crunchy garlic and rose marry croutons.";
const text2="Our bruchetta is made of grilled bread that has been smeared with garlic and seasoned with salt and olive oil.";
const text3="This comes straight from grandma's reciepe book, every last ingredient has been sourced adn is as authentic as can be imagined";
const Cards = () => {
  const cardInfo = [
    {
      image: bruschettaImage,
      title: 'Bruschetta',
      text: text2,
      price: '$12',
    },
    {
      image: greekSaladImage,
      title: 'Greek Salad',
      text: text1,
      price: '$15',
    },
    {
      image: lemonDessertImage,
      title: 'Lemon Dessert',
      text:text3,
      price: '$20',
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: '18rem' }} key={index} className="box">
        <Card.Img className="Images" variant="top" src={card.image} />
        <Card.Body className="Body">
          <Card.Title className="Head">
            <div>
              {card.title}
            </div>
            <div className="paragraph">
              <p>{card.price}</p>
            </div>
          </Card.Title>
          <Card.Text>
            {card.text}
          </Card.Text>
        </Card.Body>
        <div className="d-flex justify-content-left align-items-center"  style={{ backgroundColor: 'rgb(246, 243, 243)'}}>
          <Button variant={null} className="Btn-custom" style={{color: 'black', fontFamily: 'Arial', fontSize: '14px'}}>Order a delivery <FontAwesomeIcon icon={faTruck} />
           </Button>
        </div>
      </Card>
    );
  };

  return (
    <div className="center">
      <div className="grid d-flex justify-content-center flex-wrap">
        {cardInfo.map(renderCard)}
      </div>
    </div>
  );
};

export default Cards;