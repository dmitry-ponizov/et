import styled from "styled-components";
type AvatarLoadType = {
    loaded: boolean
}

export const FullNameStyled = styled.div`
    display: flex;
    align-items: center;
    min-width: 200px;
    div {
        font-family: CircularStd;
        font-size: 14px;
        font-weight: 400;
        color: #464754;
        white-space: nowrap;
    }
    img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        margin: 0 10px;

    }
`;

export const AvatarImage = styled.img`
  display: ${(props: AvatarLoadType) => props.loaded ? 'none' : 'block'}
`