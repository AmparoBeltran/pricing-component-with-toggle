/* eslint-disable react/prop-types */
import { data } from "../data";
import { CardsStyled } from "./styles/Cards.styled";

export default function Cards({ isAnnually }) {
    return (
        <CardsStyled>
            {data.map((item) => (
                <div className="container" key={item.title}>
                    <span className="title">{item.title}</span>
                    <h1><small>$</small>{isAnnually ? item.priceYear : item.priceMonth}</h1>

                    <div>
                        <span>{item.storage} Storage</span>
                        <span>{item.users} Users Allowed</span>
                        <span>Send up to {item.gbSend} GB</span>
                    </div>

                    <a href="#">learn more</a>

                </div>
            ))}
        </CardsStyled>
    )
}