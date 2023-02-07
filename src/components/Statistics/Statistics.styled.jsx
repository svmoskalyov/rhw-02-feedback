import styled from 'styled-components';

export const SubTitle = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
`;

export const TotalTitle = styled(SubTitle)`
  font-weight: ${p => p.theme.fontWeights.bold};
`;
