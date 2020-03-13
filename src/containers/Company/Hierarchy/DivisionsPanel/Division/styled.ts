import styled from "styled-components";

type DivisionStyleType = {
    active: boolean
}

export const Container = styled.div`
	color: ${(props: DivisionStyleType) => props.active ? '#08A5F0' : '#9191AF'};
    font-family: CircularStd;	
    font-size: 12px;	
    font-weight: 300;	
    letter-spacing: 0.43px;	
    line-height: 15px;
    text-transform: uppercase;
    padding: 10px 16px;
    border-bottom: 2px solid ${(props: DivisionStyleType) => props.active ? '#08A5F0' : 'transparent'};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    white-space: nowrap;
`