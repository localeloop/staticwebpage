import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    ::root { 
        --header-color: #ddd
        --paragraph-color: #ddd
    }

    @font-face {
        font-family: "Cinzel", sans-serif;
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    body,
    html,
    a {
        font-family: 'Cinzel', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background-image: url("/img/images/bg.png");
        background-position: 50% 50%;
        background-size: 500px;
        overflow-x: hidden;
    }

    a:hover {
        color: #18216d;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #2e186a 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h5,
    h6 {
        font-family: 'Cinzel', serif;
        color: #ddd;
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    h3,h4 {
        font-size: 200%;

        @media only screen and (max-width: 459px) {
          font-size: 100%;
        }
    }

    p {
        color: #ddd;   
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        color: #fff;

        :hover {
            color: #fff;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`;
