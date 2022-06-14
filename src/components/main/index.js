import React from 'react';
import { 
    Container,
    EndText,
    Top,
    Timer,
    Bottom
} from './styles/main';

export default function Main({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    );
}

Main.EndText = function MainEndText({ children, ...restProps }) {
    return <EndText {...restProps}>{children}</EndText>;
}

Main.Top = function MainTop({ children, ...restProps }) {
    return <Top {...restProps}>{children}</Top>;
}

Main.Timer = function MainTimer({ children, ...restProps }) {
    return <Timer {...restProps}>{children}</Timer>;
}

Main.Bottom = function MainBottom({ children, ...restProps }) {
    return <Bottom {...restProps}>{children}</Bottom>;
}