import styled from 'styled-components';

const StyledCard = styled.div`
  position: relative;
  width: 311px;
  height: 222px;
  background-color: #ffffff;
  border-top: 4px solid ${({ borderColor }) => borderColor};
  border-radius: 8px;
  padding: 28px;
  box-shadow: 0px 15px 30px -11px rgba(131, 166, 210, 0.5);
`;

const StyledCardH2 = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 10px;
`;

const StyledCardP = styled.p`
  font-size: 13px;
  letter-spacing: 0.09px;
  opacity: 0.5;
  margin: 0;
`;

const StyledCardImg = styled.img`
  position: absolute;
  width: 57px;
  height: 57px;
  bottom: 28px;
  right: 28px;
`;

export { StyledCard, StyledCardH2, StyledCardP, StyledCardImg };
