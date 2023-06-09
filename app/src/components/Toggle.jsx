/* eslint-disable react/prop-types */
import { ToggleStyled } from "./styles/Toggle.styled";

export default function Toggle({ onToggle }) {
    return (
        <ToggleStyled>
            <span>Annually</span>
            <label className="toggle-switch">
                <input
                    type="checkbox"
                    // checked={darkMode}
                    onChange={onToggle} />
                <span className="switch" />
            </label>
            <span>Monthly</span>
        </ToggleStyled>
    )
}