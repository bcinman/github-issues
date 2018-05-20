import { injectGlobal } from "emotion";

injectGlobal`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    margin: 0;
  }
  
  * { 
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  p, ul, pre {
    font-size: 14px;
    margin-bottom: 20px;
    line-height: 20px;
    color: #666666;
  }
  
  pre {
    background-color: #F9FAFB;
    padding: 20px;
  }

  li {
    margin-bottom: 10px;
  }

  img {
    max-width: 100%;
  }

  h1, h2, h3 {
    font-weight: 500;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 24px;
  }
`;
