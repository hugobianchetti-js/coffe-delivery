import { useState } from "react";
import { AmountController, CardControlContainer, CoffeeCardContainer, CoffeeTagContainer } from "./styles";
import { Plus, Minus, ShoppingCartSimple } from "@phosphor-icons/react";
import IconButton from "../IconButton";


interface Coffee {
    id: string,
    title: string,
    description: string,
    tags: string[],
    price: number,
    image: string,
    amount?: number,
}

interface CoffeeCardProps {
    coffee : Coffee
}


export default function CoffeeCard({coffee} : CoffeeCardProps){
    const [amount, setAmount] = useState(1);

    function increaseAmount(){
        setAmount(state => state + 1);
    }

    function decreaseAmount(){
        setAmount(state => state - 1);
    }

    return (
        <CoffeeCardContainer>
            <div>
                <img src={coffee.image} alt={coffee.title} width={100}/>
                <CoffeeTagContainer>
                    {coffee.tags.map(tag => <label key={tag}>{tag.toUpperCase()}</label>)}
                </CoffeeTagContainer>
                <h3>{coffee.title}</h3>
                <label>{coffee.description}</label>
                <CardControlContainer>
                    <label><span>$</span>{coffee.price.toFixed(2)}</label>
                    <AmountController>
                        <IconButton onClick={decreaseAmount} buttonType="transparent"><Minus/></IconButton>
                            <label>{amount}</label>
                        <IconButton onClick={increaseAmount} buttonType="transparent"><Plus/></IconButton>
                    </AmountController>
                    <IconButton buttonType="primary"><ShoppingCartSimple size={21} weight="fill" /></IconButton>
                </CardControlContainer>
            </div>
        </CoffeeCardContainer>
    )
}