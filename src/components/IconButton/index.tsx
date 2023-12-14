import { ButtonContainer } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children? : React.ReactNode;
    buttonType?: "normal" | "transparent" | "primary";
}


export default function IconButton({children, buttonType = "normal", ...props} : ButtonProps) {
    return (
        <ButtonContainer {...props} className="icon_button" type={buttonType}>
            {children}
        </ButtonContainer>
    );
}

IconButton.toString = () => '.icon_button';