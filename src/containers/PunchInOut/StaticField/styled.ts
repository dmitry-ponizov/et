import styled from "styled-components";

export const Field = styled.div`
    display: flex;
    justify-content:space-between;
    padding-bottom: 24px;
    min-width: 140px;
    @media(max-width: 768px) {
        min-width: 100%;
        flex-direction: column;
        align-items: flex-start;
        padding-bottom: 15px;
	    border-bottom: 1px solid #E3E5E9;
        margin-top: 15px;
        &:first-child{
            margin-top: 0px;
        }
    }
`
export const TitleField = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;
    white-space: nowrap;
    color: #464754;	
    font-family: CircularStd;	
    font-size: 14px;	
    font-weight: 500;	
    letter-spacing: -0.3px;	
    line-height: 18px;
    margin: 0 16px;
    @media(max-width: 768px) {
        color: #6A6B77;
        font-family: CircularStd;	
        font-size: 12px;	
        font-weight: 500;	
        line-height: 15px;
    }
    	
`


export const ValueField = styled.div`
    display: flex;
    flex: 1;
    white-space: nowrap;
    color: #6A6B77;	
    font-family: CircularStd;	
    font-size: 14px;	
    font-weight: 500;	
    letter-spacing: -0.3px;	
    line-height: 18px;
    @media(max-width: 768px) {
        margin-top: 5px;
        color: #464754;	
        font-family: CircularStd;	
        font-size: 16px;	
        font-weight: 300;	
        line-height: 20px;
    }
`