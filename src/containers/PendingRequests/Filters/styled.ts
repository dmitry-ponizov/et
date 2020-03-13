import styled from "styled-components";

export const FiltersContainer = styled.div`
    padding: 25px 30px;
    background: ${props => props.theme.colors.white};
    width: 100%;
    display: flex;
    justify-content: space-between;
    user-select: none;
`;

export const Dropdowns = styled.div`
    max-width: 460px;
`;
export const Buttons = styled.div`
    display: flex;
    width: 320px;
    justify-content: space-between;
`;