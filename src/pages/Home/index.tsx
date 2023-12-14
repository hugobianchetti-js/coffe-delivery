import { CoffeesSection, FeatureSection, HomeBanner, HomeBannerBackground, HomeContainer } from "./styles";
import cartIcon from "../../assets/cartIcon.svg";
import boxIcon from "../../assets/boxIcon.svg";
import timeIcon from "../../assets/timeIcon.svg";
import coffeeIcon from "../../assets/coffeeIcon.svg";
import coffee from "../../assets/coffee.svg";
import Button from "../../components/Button";
import { CaretDown } from "@phosphor-icons/react";
import { coffees } from '../../../data.json'
import CoffeeCard from "../../components/CoffeeCard";
import { useRef } from "react";

export default function Home(){
    const coffeSectionRef : React.RefObject<HTMLHeadingElement> = useRef(null);

    function handleScrollToCoffeeSection(){
        coffeSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <HomeContainer>
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
                    <Button onClick={handleScrollToCoffeeSection} icon={<CaretDown size={18} weight="bold" />}>Check it out</Button>
                </div>
                <img src={coffee} alt="" />
            </HomeBanner>
            <h1 ref={coffeSectionRef}>Our Coffees</h1>
            <CoffeesSection>
                {coffees.map((coffee => <CoffeeCard key={coffee.id} coffee={coffee}/>))}
            </CoffeesSection>
        </HomeContainer>
    );
}