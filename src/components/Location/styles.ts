import { styled } from "../../../stitches.config";

export const LocationButtonContainer = styled("div", {
    padding: "0.6rem",
    backgroundColor: "$purpleLight",
    color: "$purple",
    borderRadius: "6px",
    cursor: "pointer",

    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",

    "& label": {
        cursor: "pointer",
        userSelect: "none",
    },


    "& .locationIcon": {
        color: "$purple",
        marginRight: "3px",
    }
});