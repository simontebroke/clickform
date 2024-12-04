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
              <NavLink to={`/design${index}`} className="nav-link">
                <div
                  key={index}
                  className="embla__slide__image"
                  style={{ backgroundImage: `url('/design${index}.png')` }}
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
                  <img
                    src={
                      {
                        1: "/apple.svg",
                        2: "/starbucks.svg",
                        3: "/ibm.svg",
                        4: "/ikea.svg",
                        5: "/bauhaus.svg",
                      }[index] || "Product"
                    }
                    alt=""
                    className="logo"
                  />
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
