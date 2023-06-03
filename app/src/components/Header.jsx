/* eslint-disable react/prop-types */

import { HeaderStyled } from "./styles/Header.styled";
import Toggle from "./Toggle";

export default function Header({ isAnnually, handleToggle }) {

    return (
        <HeaderStyled>
            <h1>Our Pricing</h1>
            <Toggle
                isAnnually={isAnnually}
                onToggle={() => handleToggle()}
            />
        </HeaderStyled>
    )
}