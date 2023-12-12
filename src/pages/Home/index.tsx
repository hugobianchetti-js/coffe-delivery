import { FeatureSection, HomeBanner, HomeBannerBackground } from "./styles";
import cartIcon from "../../assets/cartIcon.svg";
import boxIcon from "../../assets/boxIcon.svg";
import timeIcon from "../../assets/timeIcon.svg";
import coffeeIcon from "../../assets/coffeeIcon.svg";
import coffee from "../../assets/coffee.svg";


export default function Home(){
    return (
        <div>
            <HomeBannerBackground/>
            <HomeBanner>
                <div>
                    <h1>Find the perffect coffee<br/> at any time of the day</h1>
                    <h2>With Coffee Delivery you receive your coffee wherever<br/> you are, anytime</h2>
                    <FeatureSection>
                        <div><img src={cartIcon} alt="" /><label>Simple and secure purchase</label></div>
                        <div><img src={boxIcon} alt="" /><label>Packaging keeps the coffee intact</label></div>
                        <div><img src={timeIcon} alt="" /><label>Fast and tracked delivery</label></div>
                        <div><img src={coffeeIcon} alt="" /><label>The coffee arrives fresh to you</label></div>
                    </FeatureSection>
                </div>
                <img src={coffee} alt="" />
            </HomeBanner>
        </div>
    );
}