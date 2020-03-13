import styled from 'styled-components';

export const TableStyled = styled.div`
    margin: 8px;
    border-top: solid 1px ${props => props.theme.colors.borderColor};
    border-left: solid 1px ${props => props.theme.colors.borderColor};
    border-right: solid 1px ${props => props.theme.colors.borderColor};
`;