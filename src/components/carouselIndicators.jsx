import React from "react";

const CarouselIndicators = ({ itemCount, activeIndex, onClick }) => {
    const indicators = Array.from({ length: itemCount }, (_, index) => (
        <button
            key={index}
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to={index}
            className={index === activeIndex ? "active" : ""}
            onClick={() => onClick(index)}
            aria-label={`Slide ${index + 1}`}
        ></button>
    ));

    return (
        <div className="carousel-indicators">
            {indicators}
        </div>
    );
};

export default CarouselIndicators;
