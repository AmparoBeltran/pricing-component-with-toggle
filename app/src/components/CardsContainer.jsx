/* eslint-disable react/prop-types */
import Cards from "./Cards";
import { CardsContainerStyled } from "./styles/CardsContainer.styled";

export default function CardsContainer({ isAnnually }) {
    return (

        <CardsContainerStyled>
            <Cards isAnnually={isAnnually} />
        </CardsContainerStyled>
    )
}