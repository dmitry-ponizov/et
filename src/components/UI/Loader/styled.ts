import styled from "styled-components";

type LoaderProps = {
    margin: string | undefined;
}

export const LoaderContainer = styled.div`
        display: flex;
        flex: 1;
        position: absolute;
        z-index: 999;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;

        /* align-items: center; */
    #loader {
        margin-top: ${(props: LoaderProps) => props.margin ? props.margin : '60px'};
        font-family: CircularStd;
        font-size: 14px;
        font-weight: normal;
        color: #464754;
    }
`;