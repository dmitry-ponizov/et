import styled from 'styled-components';

type DepartmentStyledType = {
    heightLine: number;
    active: boolean;
}

type AvatarStyledType = {
    rtl: boolean
}

export const Container = styled.div`
    position: relative;
    height: 202px;
    width: 250px;	
    border:  ${(props: DepartmentStyledType) => props.active ? '2px solid #08A5F0' : '1px solid #E3E5E9'};
    border-radius: ${(props: DepartmentStyledType) => props.active ? '12px' : '2px'};
    background-color: #FFFFFF;
    margin-right: 50px;
    margin-top: 16px;
    cursor: pointer;
    padding: 16px;
    transition: all 0.3s ease-in-out;
    /* &::before {
        border-top: 1px solid #08A5F0;
        content: '';
        width: 15px;
        position: absolute;
        height:  ${(props: DepartmentStyledType) => props.heightLine + 'px'};
        border-right: 1px solid #08A5F3;
        right: -16px;
        top: 101px;
        border-top-right-radius: 20px;
    }
    &::after {
        content: '';
        width: 8px;
        height: 8px;
        background: #08A5F0;
        right: -4px;
        top: 98px;
        position: absolute;
        border-radius: 50%;
    } */
`;

export const Title = styled.div`
    color:${(props: {active: boolean}) => props.active ? '#08A5F0' : '#464754'};
    font-family: CircularStd;	
    font-size: 16px;	
    font-weight: 500;	
    line-height: 20px;
    padding-bottom: 12px;
    border-bottom: 1px solid #E5E5EA;
    min-height: 53px;
    transition: all 0.3s ease-in-out;

`
export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    align-items: center;
`

export const Avatars = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Avatar = styled.div`
    width: 26px;
    height: 26px;
    position: relative;
    &:nth-child(2) {
        ${(props: AvatarStyledType) => props.rtl ? {
            left: '10px'
        } : {
            right: '10px'
        }}
    }
    &:nth-child(3) {
        ${(props: AvatarStyledType) => props.rtl ? {
                left: '20px'
            } : {
                right: '20px'
            }}
        }
    img{ 
        border-radius: 50%;
        height: 100%;
        width: 100%;
    }
`

export const Users = styled.div`
    width: 22px;
    height: 22px;
    border-radius: 50%;
    position: relative;
    color: #95969F;	
    font-family: CircularStd;	
    font-size: 10px;	
    font-weight: 500;	
    line-height: 13px;	
    text-align: center;
    border: 1px solid #D5D5E5;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    ${(props: AvatarStyledType) => props.rtl ? {
        left: '30px'
        } : {
        right: '30px'
        }
    }
    
`
export const Amount = styled.div`
    color: #6A6B77;	
    font-family: CircularStd;	
    font-size: 12px;	
    font-weight: 300;	
    line-height: 18px;	
    text-align: right;
    display: flex;
    align-items: center;
    span {
        margin: 0 5px;
    }
`
export const ContactBtn = styled.div`
    height: 28px;	
    width: 113px;	
    border-radius: 4px;	
    background-color: #E4F6FF;
    margin-top: 40px;
    padding: 6px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const TitleBtn = styled.div`
	color: #08A5F0;	
    font-family: CircularStd;	
    font-size: 10px;	
    font-weight: bold;	
    line-height: 18px;	
    text-align: right;
`