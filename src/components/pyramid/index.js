import React from 'react';
import { 
    Container,
    MoneyList,
    MoneyListItem,
    MoneyListItemNumber,
    MoneyListItemAmount
} from './styles/pyramid';

export default function Pyramid({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Pyramid.MoneyList = function PyramidMoneyList({ children, ...restProps }) {
    return (<MoneyList {...restProps}>{children}</MoneyList>);
}

Pyramid.MoneyListItem = function PyramidMoneyListItem({ isActive, children, ...restProps }) {
    return (
        <MoneyListItem 
            {...restProps}
            style={{ backgroundColor: isActive ? 'teal' : '' }}
        >
            {children}
        </MoneyListItem>
    );
}

Pyramid.MoneyListItemNumber = function PyramidMoneyListItemNumber({ children, ...restProps }) {
    return <MoneyListItemNumber {...restProps}>{children}</MoneyListItemNumber>;
}

Pyramid.MoneyListItemAmount = function PyramidMoneyListItemAmount({ children, ...restProps }) {
    return <MoneyListItemAmount {...restProps}>{children}</MoneyListItemAmount>;
}