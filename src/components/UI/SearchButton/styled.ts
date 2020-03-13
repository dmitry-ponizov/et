import styled from "styled-components";

type SearchButtonStyled = {
    fillable: boolean;
    theme: any;
}

export const SearchButtonStyled = styled.div`
    width: 156px;
    height: 32px;
    border: 1px solid ${(props: SearchButtonStyled) => props.fillable ? 'trasparent' : props.theme.colors.lightGrey};	
    border-radius: 4px;
    color: ${(props: SearchButtonStyled) => props.fillable ? props.theme.colors.white : props.theme.colors.lightGrey};	
    font-family: CircularStd;	
    font-size:  ${props => props.theme.fontSizes.small14Fs};
    font-weight: 500;
    padding: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props: SearchButtonStyled) => props.fillable ? props.theme.colors.sideBarColor : props.theme.colors.white };
    cursor: pointer;
    user-select: none;
    svg {
        width: 16px;
        height: 16px;
    }
    @media(max-width: 768px) {
        height: 48px;
        width: 100%;
    }
`;

export const IconStyled = styled.div`
    margin: 0 10px;
`;

export const TitleStyled = styled.div`

`;