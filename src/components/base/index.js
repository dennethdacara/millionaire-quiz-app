import React from 'react';
import { Container } from './styles/base';

export default function Base({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    );
}
