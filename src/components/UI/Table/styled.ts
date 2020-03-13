import styled from "styled-components";
import {  animated } from 'react-spring';

type TableStyled = {
  overflow: number;
  type: string | undefined
}

export const AnimatedTableStyled = styled(animated.div)`
    max-height: 687px;
    overflow: ${(props: TableStyled) => props.type ? 'none' : 'auto'};
    border-radius: .28571429rem;
    position: relative;

    &::-webkit-input-placeholder {
      color: ${props => props.theme.colors.scrollColor};
    }

    &:-moz-placeholder {
      color:  ${props => props.theme.colors.scrollColor};
    }

    &:focus {
      outline: none;
    }

    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    &::-webkit-scrollbar-track {
      /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
    }

    &::-webkit-scrollbar-thumb {
      background-color: darkgrey;
      outline: 1px solid slategrey;
    }
    &::-webkit-scrollbar-thumb:horizontal{
      background-color: darkgrey;
      outline: 1px solid slategrey;
    }

    table {
      width: ${(props:TableStyled) => props.overflow > 10 ? '2000px': '100%'}!important;
      user-select: none!important;
      border:none!important;
      margin-bottom: 0!important;
      tr {
        .full_arabic_name{
          @media(max-width: 768px) {
            text-align: right;
          }
        }
      }
      tfoot {
        tr {
          th {
            padding: 0 20px!important;
          }
        }
      }
    }
    .tableDataRow{
      cursor: pointer;
    }
    .uiTableHeader {
            tr {
                th {
                    font-family: CircularStd;
                    font-size: ${props => props.theme.fontSizes.small12Fs};
                    font-weight: 500;
                    color: ${props => props.theme.colors.titleColor};
                    position: sticky;
                    top: 0px;         
                }
                .checkboxTableHeader{ 
                  width: 53px;
                  z-index: 2;
                }
                .requestTable {
                  padding-left: 45px;
                }
                .fixedWidth {
                  width: 180px;
                }
        }
    }
    
    .uiTableBody {
        .selectedRow {
          background: #E1EEFE;
        }
        
        tr {
            td {
                font-family: CircularStd;
                font-size: ${props => props.theme.fontSizes.small13Fs};
                font-weight: normal;
                color: ${props => props.theme.colors.titleColor};
                font-style: normal;
                font-stretch: normal;
            }
          
            .fixedWidth{
              width: 200px;
            }
            .requestTable {
              padding-left: 45px;
            }
            .bolded {
                font-weight: 500;
            }
            .strongBolded {
                font-weight: 600;
            }
            .critical {
                background-color: #ff5e5e;
                color: #fff;
                border-color: #fff;
            }
            .medium {
                background-color: #fff4cb;

            }
            .high {
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
        .colored {
            background-color: ${props => props.theme.colors.coloredRow};
        }
    }
    }
`;