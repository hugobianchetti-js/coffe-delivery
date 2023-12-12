import { CartButton, HeaderContainer } from "./styles";
import logo from "../../assets/logo.svg";
import LocationButton from "../Location";
import { ShoppingCart } from "@phosphor-icons/react";

export default function Header(){
    return (
        <HeaderContainer>
            <img src={logo} alt="" />
            <div>
                <LocationButton />
                <CartButton>
                    <ShoppingCart className="cartIcon" weight="fill" size={21} />
                </CartButton>
            </div>
        </HeaderContainer>
    )
}