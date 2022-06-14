import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 75%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #020230), url("../images/bg1.jpg") center;
    display: flex;
    flex-direction: column;
`;

export const EndText = styled.h1`
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
`;

export const Top = styled.div`
    height: 50%;
    position: relative;
`;

export const Timer = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 5px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 10px;
    left: 80px;
    font-size: 30px;
    font-weight: 700;
`;

export const Bottom = styled.div`
    height: 50%;
`;