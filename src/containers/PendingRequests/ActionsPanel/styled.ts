import styled from "styled-components";

export const ActionPanelStyled = styled.div`
    display: flex;
    @media(max-width: 768px) {
        flex-direction: column;
    }
    position: relative;
`;

export const VerticalLine = styled.div`
    border-right: 2px solid ${props => props.theme.colors.borderColor};
    margin-bottom: 5px;
`;