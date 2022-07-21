import styled from 'styled-components';
import theme from 'styled-theming';
import colors from '../../patters/colors';

const themeColor =  theme('mode',{
  light: colors.white,
  dark: colors.mainBlue,
})

const textThemeColor =  theme('mode',{
  light: colors.darkGray,
  dark: colors.lightGray,
})

export const ToolbarContainer = styled.header`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${colors.lightGray};
  background-color: ${themeColor};
  color: ${textThemeColor};
  padding: 8px 24px;
`;


export const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
  align-items: center;
  align-self: center;
  height: 100%;
`

export const ContainerVersion = styled.div`
  align-self: center;
  padding-left: 8px;
`

export const VerticalLine = styled.div`
  border-left: 1px solid ${colors.mediumGray} !important;
  border-radius: 4px;
  height: 24px;
  margin: 0 3vw;
`

export const ItensContainer = styled.div`
  display: flex;
  justify-content: end;
  flex-grow: 1;
  align-items: center;
  height: 100%;
`



