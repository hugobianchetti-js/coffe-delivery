import { styled } from "../../../stitches.config";

export const CoffeeCardContainer = styled("div", {
    background: "$card",
    borderRadius: "6px 36px 6px 36px",
    padding: "0 1.25rem",

    "& > div": {
        position: "relative",
        top: "-2rem",

        display: "flex",
        flexDirection: "column",

        alignItems: "center",
        textAlign: "center",
    },

    "& > div > label": {
        height: "3.5rem",
    },


    "& h3": {
        marginTop: "1rem",
        marginBottom: "0.5rem",
        fontSize: "1.25rem",
        fontWeight: "bold",
        fontFamily: "Baloo-2, sans-serif",
        color: "$subtitle",
    },

    "& > label": {
        color: "$label",
        textAlign: "center",
        padding: "0 2rem",
    }
});

export const CoffeeTagContainer = styled("div", {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    gap: "0.6rem",
    marginTop: "0.8rem",

    "& label": {
        padding: "0.3rem 0.6rem",
        background: "$yellowLight",
        borderRadius: "90px",
        color: "$yellowDark",
        fontWeight: "600",
        fontSize: "0.8rem",
    }
});

export const CardControlContainer = styled("div", {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    fontFamily: "Baloo-2, sans-serif",
    gap: "1rem",
    marginTop: "1rem",

    "& span": {
        fontSize: "0.8rem",
        color: "$label",
        marginRight: "0.2rem",
    },

    "& > label": {
        fontSize: "1.5rem",
        fontWeight: "800",
        color: "$text",
    },
});

export const AmountController = styled("div", {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    background: "$input",
    borderRadius: "8px",

    "& > label": {
        fontWeight: "800",
        color: "$text",
        width: "2rem",
    },
});