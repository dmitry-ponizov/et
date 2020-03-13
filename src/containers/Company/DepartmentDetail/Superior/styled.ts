import styled from "styled-components";

type ValueStyledType = {
    isEmail: boolean
}

export const Container = styled.div`
    border-bottom: 1px solid #D5D5E5;
`

export const Avatar = styled.div`
    width: 102px;
    height: 102px;
    img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
    }
`

export const FullName = styled.div`
    color: #464754;	
    font-family: CircularStd;	
    font-size: 18px;	
    font-weight: bold;
    line-height: 23px;
    margin-top: 16px;
`

export const Position = styled.div`
    color: #9191AF;	
    font-family: CircularStd;	
    font-size: 12px;	
    font-weight: 300;	
    line-height: 15px;
    margin-top: 8px;
`

export const Contacts = styled.div`
    margin-top: 24px;
    padding-bottom: 24px;
`

export const Contact = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 14px;
`
export const Icon = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #08A5F0;
`


export const Value = styled.div`
	color: 	${(props: ValueStyledType) => props.isEmail ? '#08A5F0': '#9191AF'};
    font-family: CircularStd;	
    font-size: 12px;	
    font-weight: 500;	
    letter-spacing: -0.26px;	
    line-height: 15px;
    text-decoration: ${(props: ValueStyledType) => props.isEmail ? 'underline': 'none'};
    cursor: pointer;
`

export const Label = styled.div`
    color: #464754;	
    font-family: CircularStd;	
    font-size: 12px;	
    font-weight: 500;	
    letter-spacing: -0.26px;	
    line-height: 15px;
    margin: 0 8px;
`