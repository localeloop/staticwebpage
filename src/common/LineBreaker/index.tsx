import React from "react";
import styled from "styled-components";
import { Image } from "../Image";
import { color } from "framer-motion";

const LineBreakerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10%;

    h4 {
        color: ${ props => props.color || '#161616' };
    }
`;

const Line = styled.div`
    height: 1px;
    width: 35%;
`;

const LineLeft = styled(Line)`
    background-image: linear-gradient(to right, transparent 0%, ${ props => props.color || '#000000' } 50%, ${ props => props.color || '#000000' } 100%);
    margin-right: 1%;
`;

const LineRight = styled(Line)`
    background-image: linear-gradient(to left, transparent 0%, ${ props => props.color || '#000000' } 50%, ${ props => props.color || '#000000' } 100% );
    margin-left: 1%;
`;

interface Props {
    text?: string;
    color?: string;
}

const LineBreaker = ({ text, color }: Props) => {
  return (
    <LineBreakerContainer color={color}>
        <LineLeft color={color}/>
            { text ? <h4>{text}</h4> : <Image src="https://assets.thequeensheadfarnham.co.uk/logo.png" alt="logo" /> }
        <LineRight color={color} />
    </LineBreakerContainer>
  );
};

export default LineBreaker;