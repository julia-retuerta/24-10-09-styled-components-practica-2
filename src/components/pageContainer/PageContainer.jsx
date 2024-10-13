import CardsContainer from '../cardsContainer/CardsContainer';
import IntroSection from '../introSection/IntroSection';
import { StyledPageContainer } from './pageContainer.styles';

const PageContainer = () => {
  return (
    <StyledPageContainer>
      <IntroSection
        title='Reliable, efficient delivery'
        subtitle='Powered by Technology'
        description='Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful'
      />
      <CardsContainer />
    </StyledPageContainer>
  );
};

export default PageContainer;
