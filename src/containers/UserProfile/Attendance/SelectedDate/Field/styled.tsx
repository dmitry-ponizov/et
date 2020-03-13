import styled from "styled-components";

export const FieldStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 23px;
    &:last-child{
        padding-bottom: 0px;
    }

    ${(props: { type?: string, rowDirection?: boolean  }) => props.type && {
        flexDirection: 'column',
        alignItems: 'flex-start',
    }};

    ${(props: { type?: string, rowDirection?: boolean }) => !props.rowDirection && {
        flexDirection: 'row',
    }};
    

    @media(max-width: 768px) {
        border-bottom: 1px solid ${props => props.theme.colors.borderColor};
        padding: 15px 0;
    }
`;


export const Title = styled.div`
    color: 	${props => props.theme.colors.titleColor};
    font-family: CircularStd;
    font-size: ${props => props.theme.fontSizes.small14Fs};
    font-weight: 500;	
    line-height: 18px;
    padding: 0 12px;
`;

export const Value = styled.div`
    color: ${props => props.theme.colors.greyValue};
    font-family: CircularStd;	
    font-size: ${props => props.theme.fontSizes.small14Fs};
    font-weight: 300;	
    line-height: 18px;
    direction: ltr;
`;



export const IconBlock = styled.div`
    display: flex;
    align-items: center;
`;

