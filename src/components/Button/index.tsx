import { ButtonContainer, ButtonIcon } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children : React.ReactNode;
    icon?: React.ReactNode;
}


export default function Button({children, icon, ...props} : ButtonProps) {
    return (
        <ButtonContainer {...props} className="custom_button">
            {children}
            <ButtonIcon>
                {icon}
            </ButtonIcon>
        </ButtonContainer>
    );
}

Button.toString = () => '.custom_button';