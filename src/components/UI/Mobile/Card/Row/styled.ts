import styled from "styled-components";

type AlignTopType = {
    alignTop: boolean | undefined
}

export const RequestRow = styled.div`
    display: flex;
    border-bottom: 1px solid #e4e9ee;
    &:last-child {
        border-bottom: none;
    }
`

export const FirstRequestCell = styled.div`
    padding: 8px 16px;
    border-right: 1px solid #e4e9ee;
    flex: 1;
    font-family: CircularStd;
    font-size: 12px;
    font-weight: 500;
    color: #6a6b77;
`
export const RequestCell = styled.div`
    padding: 8px 16px;
    flex: 1;
    font-family: CircularStd;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #464754;
    align-items: ${(props: AlignTopType) => props.alignTop ? 'flex-start' : 'center'};
    display: flex;
`

export const Icon = styled.div`
    min-width: 35px;
    display: flex;
`