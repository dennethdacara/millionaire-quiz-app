import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 25%;
    background-color: #020230;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MoneyList = styled.ul`
    padding: 20px;
    list-style: none;
    width: 100%;
`;

export const MoneyListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 5px;

    &:active {
        background-color: teal;
    }
`;

export const MoneyListItemNumber = styled.span`
    width: 30%;
    font-size: 18px;
    font-weight: 100;
`;

export const MoneyListItemAmount = styled.span`
    font-size: 20px;
    font-weight: 300;
`;