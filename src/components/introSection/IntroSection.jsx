import { StyledIntroSection, StyledIntroSectionH1, StyledIntroSectionH2, StyledIntroSectionP } from './IntroSection.styles';

const IntroSection = ({ title, subtitle, description }) => {
  return (
    <StyledIntroSection>
      <StyledIntroSectionH1>{title}</StyledIntroSectionH1>
      <StyledIntroSectionH2>{subtitle}</StyledIntroSectionH2>
      <StyledIntroSectionP>{description}</StyledIntroSectionP>
    </StyledIntroSection>
  );
};

export default IntroSection;
