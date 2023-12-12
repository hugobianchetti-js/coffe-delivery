import { styled } from "../../../stitches.config";

export const LayoutContainer = styled("div", {
    width: "100%",
    height: "100%",
    padding: "2rem 11% 0 11%",

    '@media(max-width:640px)': {
        padding: "2rem 6% 0 6%",
    },
});