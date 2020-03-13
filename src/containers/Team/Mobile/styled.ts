import styled from 'styled-components';

export const TeamMobileStyled = styled.div`
     background-image: url('/images/team_mobile.png');
     background-repeat: no-repeat;
     background-size: cover;
     height: 224px;
     border-bottom-left-radius: 10px;
     border-bottom-right-radius: 10px;
`

export const TeamMobileSection = styled.div`
     min-height: 100%;
     display: flex;
    flex-direction: column;
    flex: 1;
`
export const TeamInfoBlocks = styled.div`
    display: flex;
    margin-top: 10px;
    flex-wrap: wrap;
    padding: 0px 8px 20px 16px;
    margin-top: -116px;
`

export const TeamInfoContent = styled.div`
    flex: 1;
`
export const ErrorContainer = styled.div`
    flex: 1;
    background: ${props => props.theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
`
