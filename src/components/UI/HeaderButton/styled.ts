import styled from 'styled-components';

type HeaderBtnProps = {
    isMobile: boolean;
}

export const HeaderButtonContainer = styled.div`
    height: 36px;	
    border: 1px solid ${props => props.theme.colors.greyBorder};
    border-radius: 4px;
    padding: ${(props: HeaderBtnProps) => props.isMobile ?  '0px' : '9px 16px' };
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    margin-left: ${(props: HeaderBtnProps) => !props.isMobile ?  '16px' : '0px' };
`;

export const Icon = styled.div`
    height: 20px;
    width: 20px;
    /* margin-left: ${(props: HeaderBtnProps) => props.isMobile ?  '10px' : '0px' }; */
`

export const Title = styled.div`
    color: #464754;	
    font-family: CircularStd;	
    font-size: ${props => props.theme.fontSizes.small14Fs};	
    font-weight: 300;	
    line-height: 18px;
    padding: 0 12px;
    white-space: nowrap; 
`;