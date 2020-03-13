import styled from 'styled-components';

export const Wrap = styled.div`
    margin: ${(props: {rtl: boolean}) => props.rtl ? '0px 48px 0px 0px' : '0px 0px 0px 48px'};
    &:nth-child(2) {
        margin: ${(props: {rtl: boolean}) => props.rtl ? '48px 48px 0px 0px' : '48px 0px 0px 48px'};
    }
`
export const Container = styled.div`
    border-radius: 2px;
    border: solid 1px  ${props => props.theme.colors.greyBorder};
    background-color:  ${props => props.theme.colors.white};
    border-top: 4px solid  ${(props: {type: string, theme: any}) => props.type === 'birthdays' ? props.theme.colors.red : props.theme.colors.blueBtn};
    margin-top: 12px;
    min-height: 415px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`

export const Title = styled.div`
    color: ${props => props.theme.colors.titleColor};
    font-family: CircularStd;	
    font-size: ${props => props.theme.fontSizes.medium22Fs};	
    font-weight: bold;	
    line-height: 28px;
    height: 38px;
    align-items: center;
    display: flex;
`