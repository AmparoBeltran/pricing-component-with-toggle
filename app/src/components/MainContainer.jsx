import { useState } from "react";
import CardsContainer from "./CardsContainer";
import Header from "./Header";
import { MainContainerStyled } from "./styles/MainContainer.styled";

export default function MainContainer() {
    const [isAnnually, setIsAnnually] = useState(false)

    function handleToggle() {
        setIsAnnually((toggled) => !toggled)
    }
    return (
        <MainContainerStyled>
            <Header handleToggle={handleToggle} />
            <CardsContainer isAnnually={isAnnually} />
        </MainContainerStyled>
    )
}