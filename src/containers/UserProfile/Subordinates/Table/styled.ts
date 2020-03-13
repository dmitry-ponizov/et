import styled from "styled-components";

export const TableStyled = styled.div`
    margin-top: 16px;
    padding-bottom: 24px;
    table {
        thead{
            tr {
                th {
                    color: #464754;	
                    font-family: CircularStd;	
                    font-size: 14px;	
                    font-weight: 500;	
                    line-height: 18px;
                    text-align: ${(props: {rtl: boolean}) => props.rtl ? 'right' : 'left'}!important;
                }
            }
        }
        tbody {
            tr {
                cursor: pointer;
                &:hover {
                    background: #e4f6ff!important;
                    .viewProfile {
                        display: block;
                    }
                    .jobInfo {
                        color: #464754;
                    }
                }
                td {
                    vertical-align: middle;
                    text-align: ${(props: {rtl: boolean}) => props.rtl ? 'right' : 'left'}!important; 
                }
            }
        }
        .viewProfile {
            display: none;
            font-family: CircularStd;
            font-size: 12px;
            font-weight: 500;
            text-align: right;
            color: #08a5f0;
            margin:0 10px;
        }
        .employeeNumber {
             font-family: CircularStd;
            font-size: 14px;
            font-weight: normal;
            color: #464754;
           
        }
        .employee {
            width: 200px;
        }
        .jobTitle {
            width: 67%;
        }
        .full_arabic_name {
            min-width: 220px;
        }
        .jobInfo {
            font-family: CircularStd;
            font-size: 14px;
            font-weight: normal;
            color: #9191af;
        }
    }
`