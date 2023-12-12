import { styled } from "../../../stitches.config";

export const HeaderContainer = styled("div", {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "3rem",

    "& div": {
        display: "flex",
        flexDirection: "row",
    }
});

export const CartButton = styled("div", {
    padding: "0.6rem",
    backgroundColor: "$yellowLight",
    borderRadius: "6px",
    cursor: "pointer",
    marginLeft: "12px",

    display: "flex",
    alignContent: "center",
    justifyContent: "center",

    '& .cartIcon': {
        color: "$yellow",
        
    }
});