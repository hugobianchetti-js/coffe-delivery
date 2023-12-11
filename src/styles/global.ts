import { globalCss } from "../../stitches.config.ts";


export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },

    'body': {
        background: '$background',
        color: '$text',
        fontSmothing: 'antialiased',
    },

    'body, input, textarea, button' : {
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '1rem',
    },
});