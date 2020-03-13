import styled from "styled-components";

export const PaginationStyled = styled.div`
    padding-top: 30px;
    padding-bottom: 10px;
    display: flex;
    width: 100%;
    justify-content: center; 
    .ui.pagination.menu  {
        min-height: 32px;
    }
    .ui.pagination.menu .item  {
        padding: 12px;
        min-width: 32px;
        height: 32px;
        font-family: CircularStd;
        font-size: ${props => props.theme.fontSizes.small14Fs};
        font-weight: normal;
        color: ${props => props.theme.colors.categoryColor};
        &:focus {
            outline: none;
        }
    }
    .ui.pagination.menu .active.item {
        background-color: ${props => props.theme.colors.blue};
        color: ${props => props.theme.colors.white};
    }
`;