import styled from 'styled-components';

export const SelectedDateStyled = styled.div`
    flex: 2;
`;
export const VacationsIcon = styled.div`
    border: 1px solid ${props => props.theme.colors.orange};
    background: ${props => props.theme.colors.orangeBcg};
    width: 12px;
    height: 12px;
    border-radius: 50%;
`;

export const LeavesIcon = styled.div`
    background: ${props => props.theme.colors.orangeStr};
    width: 12px;
    height: 12px;
    border-radius: 50%;
`;

export const AbsenceIcon = styled.div`
    background: ${props => props.theme.colors.darkOrange};
    width: 12px;
    height: 12px;
    border-radius: 50%;
`;

export const ExceptionIcon = styled.div`
    background: ${props => props.theme.colors.purple};
    width: 12px;
    height: 12px;
    border-radius: 50%;
`;
export const SelectedDateContainer = styled.div`
    max-width: 295px;
    @media(max-width: 768px) {
        max-width: 100%;
    }
`;


