import React, { lazy } from "react";
import DOMPurify from "dompurify";
import styled from "styled-components";
import UnderConstruction from "../../content/UnderConstruction.json";
import { underConstructionGifPath } from "../assets";

const Container = lazy(() => import("../../common/Container"));

const GifContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`

const UnderConstructionPage = () => {
    const sanitizedContent = DOMPurify.sanitize(UnderConstruction.content);

    return (
        <Container padding="20% 10%" maxWidth="1700px">
            <Container>
            <h1 style={{"fontSize": "40px", "paddingTop": "50%", "color": "black", "textAlign": "center" }}> { UnderConstruction.title } </h1>
            <p dangerouslySetInnerHTML={{ __html: sanitizedContent}} style={{ "color": "black", "textAlign": "center"  }}></p>
            </Container>
            <GifContainer>
                <img src={ underConstructionGifPath } alt="cat-working-gif"/>
            </GifContainer>
        </Container>
    )
}

export default UnderConstructionPage;