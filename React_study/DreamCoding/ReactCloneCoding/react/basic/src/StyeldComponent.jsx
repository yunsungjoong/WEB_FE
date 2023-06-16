import React from 'react';

import styled, { css } from 'styled-components'

const Container = styled.div` 
// 자바스크립트에서 css를 쓰게 해주는 자바스크립트 라이브러리 컴포넌트 자체를 만들어서 실제론 div태그고 버튼이 들어있고 내부적으로 클래스 이름이 들어가 있다
    display: flex;
`;

const Button = styled.button`
    background: transparent;
    border-radius :3px;
    border : 2px solid #3c5b69;
    color : #b9eaff;
    margin: 0 1em;
    padding : 0.25em 1em;
    ${(props) =>
    props.primary &&
    css`
        background : #009cd5;
        color : white;
    `};
`;

export default function StyeldComponent() {
    return (
        <Container>
                <Button>Normal Button</Button>
                <Button primary>primary</Button>
        </Container>
    );
}
