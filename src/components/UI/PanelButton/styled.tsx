import styled from "styled-components";

type PanelButtonStyled = {
    noMargin: boolean | undefined;
    active: boolean;
    theme: any;
    type: string;
}
export const PanelButtonStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin-left: ${(props: PanelButtonStyled) => props.noMargin ? '5px' : '20px'};
    margin-right: 20px;
    .title {
        font-family: CircularStd;
        font-size: ${props => props.theme.fontSizes.small14Fs};
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.71;
        margin-top: 4px;
        letter-spacing: normal;
        color: ${(props:PanelButtonStyled) => props.active ? props.theme.colors[props.type] : props.theme.colors.subMenuColor};
        white-space: nowrap;
      
    }
    &:hover {
        /* .title {
            color: ${props => props.theme.colors.textBlue};
        }     */
        /* svg {
            path {
                stroke: ${props => props.theme.colors.textBlue};
            }
        }
        #IconNew, #IconView {
            path { 
                stroke: none;
                fill: ${props => props.theme.colors.textBlue};
            }
        }
        #IconCancelRequest {
            g {
                circle {
                    stroke: ${props => props.theme.colors.textBlue};
                }
            }
        } */
    }
    @media(max-width: 768px) {
        flex-direction: row;
        margin: 0;
        padding-bottom: 10px;
        /* .title {
            margin-left: 10px;
            color:  ${props => props.theme.colors.textBlue};
        }
        svg {
            path {
                stroke: ${props => props.theme.colors.textBlue};
            }
        } */
    }
`;

export const IconStyled = styled.div`
    height: 20px;
    i {
        color: ${props => props.theme.colors.subMenuColor};
        font-weight: normal;
    }
    /* svg {
        path {
            stroke: ${props =>  props.theme.colors.subMenuColor};
        }
    }
    #IconNew, #IconView {
        path { 
            stroke: none;
            fill: ${props =>  props.theme.colors.subMenuColor}
        }
    }
    #IconCancelRequest {
        g {
            circle {
                stroke: ${props =>  props.theme.colors.subMenuColor}
            }
        }
    } */
`;