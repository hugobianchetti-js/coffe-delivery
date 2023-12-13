import { styled } from "../../../stitches.config";

export const ButtonContainer = styled("button", {
    outline: "none",
    border: "none",
    background: "$yellow",
    color: "white",
    borderRadius: "6px",
    padding: "0.8rem",
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    
    transition: "background 0.3s ease",


    "&:hover": {
        background: "$yellowDark",
    }
});

export const ButtonIcon = styled("div", {
    marginLeft: "0.5rem",
});