import { CARDS } from '../../constants/cards';
import Card from '../card/Card';
import { StyledCardsContainer } from './cardsContainer.styles';

const CardsContainer = () => {
  return (
    <StyledCardsContainer>
      {CARDS.map(card => (
        <Card
          key={card.id}
          title={card.title}
          text={card.text}
          borderColor={card.borderColor}
          src={card.src}
          alt={card.alt}
        />
      ))}
    </StyledCardsContainer>
  );
};

export default CardsContainer;
