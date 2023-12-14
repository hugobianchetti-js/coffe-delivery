import { styled } from "../../../stitches.config";

export const HeaderBackground = styled("div", {
    position: "fixed",
    background: "$background",
    left: "0",
    right: "0",
    top: "0",
    width: "100%",
    height: "6rem",
    zIndex: "98",
});

export const HeaderContainer = styled("div", {
    position: "fixed",
    top: "2rem",
    left: "11%",
    right: "11%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "3rem",
    zIndex: "99",

    "& div": {
        display: "flex",
        flexDirection: "row",
    },

    "@media(max-width:640px)": {
        left: "6%",
        right: "6%",
    },
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