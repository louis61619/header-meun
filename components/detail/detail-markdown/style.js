import styled from "styled-components";

export const DetailMarkdownWrapper = styled.div`
  font-size: 16px;
  margin-bottom: 45px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;
    margin-top: 1em;
    margin-bottom: 16px;
    font-weight: bold;
    line-height: 1.4;
  }

  ul {
    margin-bottom: 16px;
  }

  h1 {
    padding-bottom: 0.3em;
    font-size: 2.25em;
    line-height: 1.2;
    border-bottom: 1px solid #cbcbcb;
    @media (max-width: 576px) {
      font-size: 1.5rem;
    }
  }

  h2 {
    padding-bottom: 0.3em;
    font-size: 1.75em;
    line-height: 1.225;
    border-bottom: 1px solid #cbcbcb;
    @media (max-width: 576px) {
      font-size: 1.5rem;
    } 
  }

  h3 {
    font-size: 1.5em;
    line-height: 1.43;
    @media (max-width: 576px) {
      font-size: 1.3rem;
    } 
  }

  h4 {
    font-size: 1.25em;
  }

  p {
    margin-bottom: 16px;
    font-size: 1rem;
  }

  pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #283646;
    color: #ccc;
    border: 0;
    border-radius: 3px;
  }
  pre > code {
    font-size: 100%;
    white-space: pre;
    background: transparent;
  }
  code {
    display: inline;
    max-width: initial;
    padding: 0;
    margin: 0;
    overflow: initial;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
  }
  blockquote {
    border-left: 4px solid #cbcbcb;
    padding: 10px 10px 10px 30px;
    background-color: #f8f8f8;
  }

  img {
    /* max-height: 5vw; */
    max-width: 100%;
    object-fit: cover;
  }

  a {
    color: #4183c4;
    text-decoration: none;
  }
`;
