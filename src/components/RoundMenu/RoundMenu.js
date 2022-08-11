import React from "react";

function RoundMenu({
    isOpen = true,
    onOpenMenuButtonClick,
    onButtonClick,
    currentOption = 0,
}) {

    return (
        <div className="round-menu">
            <button
                className={`round-menu__open-button ${isOpen ? 'round-menu__open-button_used' : ''}`}
                type="button"
                onClick={onOpenMenuButtonClick}
            />
            <ul
                className={`round-menu__list ${isOpen ? '' : 'round-menu__list_closed'} ${isOpen && currentOption ? `round-menu__list_rotation_${currentOption}` : ''}`}
            >
                <li
                    className={`round-menu__list-item ${isOpen ? '' : 'round-menu__list-item_closed'}`}
                    onClick={onButtonClick} id="1"
                />
                <li
                    className={`round-menu__list-item ${isOpen ? '' : 'round-menu__list-item_closed'}`}
                    onClick={onButtonClick} id="2"
                />
                <li
                    className={`round-menu__list-item ${isOpen ? '' : 'round-menu__list-item_closed'}`}
                    onClick={onButtonClick} id="3"
                />
                <li
                    className={`round-menu__list-item ${isOpen ? '' : 'round-menu__list-item_closed'}`}
                    onClick={onButtonClick} id="4"
                />
                <li
                    className={`round-menu__list-item ${isOpen ? '' : 'round-menu__list-item_closed'}`}
                    onClick={onButtonClick} id="5"
                />
                <li
                    className={`round-menu__list-item ${isOpen ? '' : 'round-menu__list-item_closed'}`}
                    onClick={onButtonClick} id="6"
                />
            </ul>
        </div>
    )
}

export default RoundMenu;