import { CartButton, HeaderContainer } from "./styles";
import logo from "../../assets/logo.svg";
import LocationButton from "../Location";
import { ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export default function Header(){
    return (
        <HeaderContainer>
            <NavLink to="/"><img src={logo} alt="" /></NavLink>
            <div>
                <NavLink to="/cart" style={{textDecoration: "none",}}><LocationButton /></NavLink>
                <NavLink to="/cart">
                    <CartButton>
                        <ShoppingCart className="cartIcon" weight="fill" size={21} />
                    </CartButton>
                </NavLink>
            </div>
        </HeaderContainer>
    )
}