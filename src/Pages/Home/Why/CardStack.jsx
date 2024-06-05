import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

// Import your logos here
import logo1 from '/Eco-friendly-icon.png'; // Update the path to your logo
import logo2 from '/Attention-Icon.png';
import logo3 from '/Insured-icon.png';
import logo4 from '/b.png';
import logo5 from '/Customer-icon.png';
import logo6 from '/Fast-icon.png';

const cardData = [
    
  { id: 1, backgroundColor: '#325B64', logo: logo6, text: 'Fast and Reliable Team' },
  { id: 2, backgroundColor: '#28515A', logo: logo5, text: 'Customer Satisfaction' },
  
  { id: 3, backgroundColor: '#1E4750', logo: logo4, text: 'No Bailt and Switch' },
  { id: 4, backgroundColor: '#143D46', logo: logo3, text: 'Insured Cleaning Company' },
  
  { id: 5, backgroundColor: '#14333C', logo: logo2, text: 'Attention to Detail' },
  { id: 6, backgroundColor: '#002932', logo: logo1, text: 'Eco-Friendly Products' },
  
];

const Container = styled.div`
  position: relative;
  height: 600px; /* Adjust the height of the container */
  width: 500px; /* Increase the width of the container */
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Card = styled(motion.div)`
  width: 250px; /* Reduce the width of the card */
  height: 150px; /* Reduce the height of the card */
  background-color: ${({ backgroundColor }) => backgroundColor};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 24px;
  color: #fff;
  position: absolute;
  right: ${({ index }) => `${index * 30}px`}; /* Adjust overlap for right stacking */
  top: ${({ index }) => `${index * 30}px`}; /* Adjust overlap for top stacking */
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 50px; /* Adjust size as needed */
  height: 50px; /* Adjust size as needed */
  margin-bottom: 10px;
`;

const Text = styled.div`
  font-size: 18px; /* Adjust size as needed */
`;

const CardStack = () => {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    setCards((prevCards) => {
      if (prevCards.length < 6) { // Limit to six cards
        return [cardData[prevCards.length], ...prevCards];
      }
      return prevCards;
    });
  };

  return (
    <Container onClick={addCard}>
      <AnimatePresence>
        {cards.map((card, index) => (
          <Card
            key={card.id}
            index={index}
            backgroundColor={card.backgroundColor}
            initial={{ opacity: 0, y: '100vh' }} // Start from bottom of the screen
            animate={{ opacity: 1, y: 0 }} // Animate to the stack position
            exit={{ opacity: 0, y: '100vh' }} // Exit animation
            transition={{ duration: 0.5 }}
            style={{
              zIndex: cards.length - index, // First card at the bottom
            }}
          >
            <CardContent>
              <Logo src={card.logo} alt="logo" />
              <Text>{card.text}</Text>
            </CardContent>
          </Card>
        ))}
      </AnimatePresence>
    </Container>
  );
};

export default CardStack;
