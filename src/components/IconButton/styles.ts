import { styled } from "../../../stitches.config";

export const ButtonContainer = styled("button", {
    outline: "none",
    border: "none",
    background: "$yellow",
    color: "white",
    borderRadius: "6px",
    padding: "0.6rem",
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    
    transition: "background 0.3s ease",


    "&:hover": {
        background: "$yellowDark",
    },

    variants: {
        type: {
            normal: {},
            transparent: {
                background: "transparent",
                color: "$purple",

                "&:hover": {
                    background: "$hover",
                },
            },
            primary: {
                background: "$purple",

                "&:hover": {
                    background: "$purpleDark",
                },
            }
        }
    }
});