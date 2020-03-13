import styled from 'styled-components';



export const BreadcrumbsStyled = styled.div`
    display: flex;
    margin: 0 auto;
`;

export const CrumbStyled = styled.div`
    color:  ${props => props.theme.colors.sideBarColor};
    font-family: CircularStd;
    font-size: ${props => props.theme.fontSizes.small14Fs};
    font-weight: normal;
    cursor: pointer;
    margin-left: 5px;
    &:nth-child(1) {
        margin-left: 0px;
    }
`;

export const LastCrumb = styled.div`
    color: ${props => props.theme.colors.titleColor}; 
    font-family: CircularStd;
    font-size: ${props => props.theme.fontSizes.small14Fs};
    font-weight: normal;
    margin:0 7px;
`;
