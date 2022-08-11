import React from "react";

function MainPageSection({ children, currentOption, title }) {

    return (
        <div
            className={`main-page-section ${currentOption ? `main-page-section_color_${currentOption}` : 'main-page-section_closed'}`}
        >
            <h2 className="main-page-section__title">
                {title}
            </h2>
            {children}
        </div>
    )
}

export default MainPageSection;