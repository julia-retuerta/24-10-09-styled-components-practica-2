import { StyledCard, StyledCardH2, StyledCardImg, StyledCardP } from './card.styles';

const Card = ({ title, text, borderColor, src, alt }) => {
  return (
    <StyledCard borderColor={borderColor}>
      <StyledCardH2>{title}</StyledCardH2>
      <StyledCardP>{text}</StyledCardP>
      <StyledCardImg src={src} alt={alt} />
    </StyledCard>
  );
};

export default Card;
