import "./StartSection.css";
import { useState, useEffect } from "react";

function StartSection() {
  const words = [
    "Give me a list of important philosophical works.",
    "Calculate 897 times 62.",
    "Translate “Good morning” into Japanese.",
    "Name all the elements in the periodic table.",
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const currentWord = words[wordIndex];
    let typingSpeed = isDeleting ? 15 : 40;

    if (!isDeleting && characterIndex === currentWord.length) {
      // pausing after word is fully typed out
      setIsPaused(true);
      setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 1500); // wait 1.5 seconds after typing is done
      return;
    }

    if (isDeleting && characterIndex === 0) {
      // pause before typing the next word after deletion
      setIsPaused(true);
      setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(false); // start typing the next word
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 1000); // 1 second pause after deletion
      return;
    }

    const timeout = setTimeout(() => {
      const nextCharacterIndex = isDeleting
        ? characterIndex - 1
        : characterIndex + 1;
      setCharacterIndex(nextCharacterIndex);
      setCurrentText(currentWord.substring(0, nextCharacterIndex));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [characterIndex, isDeleting, wordIndex, isPaused]);

  return (
    <div className="startSection">
      <div className="startSectionContainer">
        <div className="headingItem">
          <h1 className="mainHeading">Deine Website in einem Schritt</h1>
        </div>
        <div className="searchItem">
          <p className="searchText">
            {currentText}
            <span></span>
          </p>
          <img src="/searcharrow.svg" alt="Search" />
        </div>
        <div className="iconItem">
          <div className="icon">
            <img src="/whatsapp.svg" alt="" />
          </div>
          <div className="icon">
            <img src="/instagram.svg" alt="" />
          </div>
          <div className="icon">
            <img src="/tiktok.svg" alt="" />
          </div>
          <div className="icon">
            <img src="email.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartSection;
