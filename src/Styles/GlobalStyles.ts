import { createGlobalStyle } from "../typed-components";

export default createGlobalStyle`
    * {
        box-sizing:border-box;
    }
    body {
        font-size:14px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    a {
        text-decoration:none;
    }
    input:focus{
        outline:none;
    }
`;
