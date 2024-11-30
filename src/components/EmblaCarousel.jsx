import React from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay,
} from "./EmblaCarouselSelectedSnapDisplay";
import useEmblaCarousel from "embla-carousel-react";
import { NavLink } from "react-router-dom";

function EmblaCarousel(props) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  return (
    <section className="embla">
      <div className="embla__controls">
        <p className="heading">ChatGPT</p>
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              {/* NavLink für jede Slide */}
              <NavLink
                to={`/${index}`} // Ziel-Route basierend auf dem Index
                className="embla__slide__link"
              >
                <div
                  className="embla__slide__image"
                  style={{ backgroundImage: `url('/${index}.jpg')` }}
                  alt=""
                >
                  <p className="company">
                    {index === 1
                      ? "Apple"
                      : index === 2
                      ? "Starbucks"
                      : index === 3
                      ? "IKEA"
                      : "Product"}
                  </p>
                  <p className="logo">fe</p>
                  <p className="description">
                    Very modern looking site with clean grey and white tones.
                  </p>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EmblaCarousel;
