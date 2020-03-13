import styled from 'styled-components';

export const RowStyled = styled.div`
    display: flex;
    width: 100%;
    background-color: ${props => props.theme.colors.white};
    border-bottom: solid 1px ${props => props.theme.colors.borderColor};
    font-family: CircularStd;
    font-size: ${props => props.theme.fontSizes.small14Fs};
            .Critical {
                background-color: #ff5e5e;
                color: #fff;
                border-color: #fff;
            }
            .Medium {
                background-color: #fff4cb;

            }
            .High {
                background-color: #ff612c;
                color: #fff;
                border-color: #fff;
            }
            .S4 {
              color: #1161BE
            }
            .E4 {
              color: #1161BE
            }
            .E1 {
              color: #1161BE
            }
            .SF {
              color: #F64540
            }
            .S1 {
              color: #F64540
            }
            .S5 {
              color: #F64540
            }
            .M1 {
              color: #FF612D
            }
            .M2 {
              color: #FF612D
            }
            .SQ {
              color: #FF612D
            }
            .EQ {
              color: #FF612D
            }
            .EQ {
              color: #464754
            }
`;

export const CellTitleStyled = styled.div`
    padding: 16px;
    width: 130px;
    border-right: solid 1px ${props => props.theme.colors.borderColor};
    font-weight: 500;
    color: ${props => props.theme.colors.titleColor};
    
`;
export const CellValueStyled = styled.div`
    display: flex;
    flex: 1;
    padding: 16px;
    font-weight: normal;
    color: ${props => props.theme.colors.titleColor};
`;

export const CellSecondValueStyled = styled.div`
    display: flex;
    flex: 1;
    padding: 16px;
    font-weight: normal;
    color: ${props => props.theme.colors.titleColor};
    border-left: solid 1px ${props => props.theme.colors.borderColor};
`;