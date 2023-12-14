import { styled } from "../../../stitches.config";
import sectionBackground from "../../assets/sectionBackground.png";
import Button from "../../components/Button";


export const HomeContainer = styled("div", {
    "& > h1": {
        fontFamily: "Baloo-2, sans-serif",
        fontWeight: "800",
        fontSize: "2rem",
        marginBottom: "2rem",
        position: "absolute",
        top: "calc(100vh + 20px)"
    },
});

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

    [`& ${Button}`]: {
        marginTop: "4.5rem",
        width: "21rem",
    },

    "& > div": {
        marginTop: "9.8rem",
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

    '@media(max-width:632px)': {
        "& > div": {
            marginTop: "5rem",
        },

        [`& ${Button}`]: {
            marginTop: "3rem",
            width: "100%",
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

export const CoffeesSection = styled("div", {
    position: "absolute",
    top: "calc(100vh + 160px)",
    paddingRight: "11%",
    display: "grid",
    gridGap: "2.5rem 2.5rem",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    paddingBottom: "8rem",

    '@media(max-width:1800px)': {
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gridGap: "2.5rem 0.8rem",
    },

    '@media(max-width:1600px)': {
        gridTemplateColumns: "1fr 1fr 1fr",
        gridGap: "2.5rem 3rem",
    },

    '@media(max-width:1400px)': {
        gridTemplateColumns: "1fr 1fr 1fr",
        gridGap: "2.5rem 0.8rem",
    },

    '@media(max-width:1200px)': {
        gridTemplateColumns: "1fr 1fr",
        gridGap: "2.5rem 3rem",
    },

    '@media(max-width:800px)': {
        gridTemplateColumns: "1fr 1fr",
        gridGap: "2.5rem 0.8rem",
    },

    '@media(max-width:780px)': {
        gridTemplateColumns: "1fr",
        gridGap: "3.5rem 0.1rem",
    },

    '@media(max-width:640px)': {
        paddingRight: "6%",
    },
});