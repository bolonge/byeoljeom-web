import { createGlobalStyle } from "../typed-components";

export default createGlobalStyle`
    * {
        box-sizing:border-box;
    }
    body {
        font-size:14px;
        font-family: Inter var,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;    }
    a {
        text-decoration:none;
    }
    input:focus{
        outline:none;
    }
`;
