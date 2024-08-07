import React from "react";
import styled from "styled-components";
import { Image } from "../Image";

const LineBreakerContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5%;
    justify-content: center;

    h4 {
        color: #161616;
    }
`;

const Line = styled.div`
    height: 1px;
    width: 35%;
`;

const LineLeft = styled(Line)`
    background-image: linear-gradient(to right, transparent 0%, #000000 50%, #000000 100%);
    margin-right: 1%;
`;

const LineRight = styled(Line)`
    background-image: linear-gradient(to left, transparent 0%, #000000 50%, #000000 100%);
    margin-left: 1%;
`;

interface Props {
    text?: string;
}

const LineBreaker = ({ text }: Props) => {
  return (
    <LineBreakerContainer>
        <LineLeft />
            { text ? <h4>{text}</h4> : <Image src="https://assets.thequeensheadfarnham.co.uk/logo.png" alt="logo" /> }
        <LineRight />
    </LineBreakerContainer>
  );
};

export default LineBreaker;