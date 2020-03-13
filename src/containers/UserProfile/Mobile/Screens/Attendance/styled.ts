import styled from 'styled-components';

type AttendanceStyled = {
    width: number | undefined;
}

export const AttendanceStyled = styled.div`
    background: ${props => props.theme.colors.white};
    height:100%;
    display: flex;
    flex-direction: column;
`;

export const SliderContainer = styled.div`
    max-width: ${(props: AttendanceStyled) => props.width + 'px'};
    margin-top: 20px;
    padding-bottom: 5px;
`;

export const MainContent = styled.div`
    padding: 15px;
`;
export const CalendarBlock = styled.div`
  margin-top: 10px;
`;


export const CalendarSection = styled.div`
    border-top: 1px solid ${props => props.theme.colors.btnBorder};
    padding: 8px 0;
`;

export const SelectedDateSection = styled.div`
    margin-top: 10px;
`;

export const SelectedDateBlock = styled.div`
    padding: 10px;
`;
export const ErrorCodesSection = styled.div`
    margin-top: 10px;
`;
export const ErrorCodesBlock = styled.div`
    padding: 10px;
`;