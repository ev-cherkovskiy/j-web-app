import React from "react";
import MainPageSection from "../MainPageSection/MainPageSection";
import RoundMenu from "../RoundMenu/RoundMenu";

function Main() {
    const [isMainPageMenuOpen, setIsMainPageMenuOpen] = React.useState(false);
    const [currentMainPageMenuOption, setCurrentMainPageMenuOption] = React.useState(0);

    const handleOpenMainPageMenuButtonClick = () => {
        if (isMainPageMenuOpen) {
            setIsMainPageMenuOpen(false);
            setCurrentMainPageMenuOption(0);
        } else {
            setIsMainPageMenuOpen(true);
        }
    }

    const handleMainPageMenuButtonClick = (evt) => {
        console.log(Number(evt.target.id));
        setCurrentMainPageMenuOption(Number(evt.target.id));
    }

    return (
        <main className="main">
            <RoundMenu
                isOpen={isMainPageMenuOpen}
                onOpenMenuButtonClick={handleOpenMainPageMenuButtonClick}
                onButtonClick={handleMainPageMenuButtonClick}
                currentOption={currentMainPageMenuOption}
            />
            <MainPageSection
                currentOption={currentMainPageMenuOption}
                title="Заголовок секции"
            >
                контент
            </MainPageSection>
            {!currentMainPageMenuOption && (
                <p className="main-page-message">
                    Welcome to J-App! To navigate the page, use the button above.
                </p>
            )}
        </main>
    )
}

export default Main;