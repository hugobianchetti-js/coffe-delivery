import { styled } from "../../../stitches.config";
import sectionBackground from "../../assets/sectionBackground.png";

export const HomeBannerBackground = styled("div", {
    position: "absolute",
    left: "0",
    background: "$background",
    backgroundImage: `url(${sectionBackground})`,
    backgroundRepeat: "repeat-y",
    backgroundSize: "cover",
    backgroundBlendMode: "hard-light",
    height: "720px",
    width: "100%",
    zIndex: "-1",
});

export const HomeBanner = styled("div", {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    color: "$title",

    "& > div": {
        marginTop: "5.8rem",
    },

    "& h1": {
        fontFamily: "Baloo-2, sans-serif",
        fontWeight: "800",
        fontSize: "3rem",
    },

    "& h2": {
        fontWeight: "normal",
        fontSize: "1.25rem",
        marginTop: "1rem",
    },

    "& > img": {
        marginTop: "8rem",
        marginRight: "3rem",
    },

    '@media(max-width:1600px)': {
        "& > img": {
            display: "none"
        },
    },

    '@media(max-width:820px)': {
        "& br": {
            display: "none"
        },
    },

    
});

export const FeatureSection = styled("div", {
    display: "grid",
    gridGap: "1.6rem",
    gridTemplateColumns: "auto auto",
    marginTop: "4.25rem",

    "& div": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },

    "& label": {
        marginLeft: "10px",
    }

});