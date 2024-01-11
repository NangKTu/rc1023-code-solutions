import { useState } from 'react';

interface RotatingBannerProps {
  items: string[];
}

export function RotatingBanner({ items }: RotatingBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <Banner word={items[currentIndex]} />
      <div>
        <Prev onClick={handlePrev} />
      </div>
      <Indicators
        currentIndex={currentIndex}
        items={items}
        onIndicatorClick={handleIndicatorClick}
      />
      <div>
        <Next onClick={handleNext} />
      </div>
    </>
  );
}

interface BannerProps {
  word: string;
}

function Banner({ word }: BannerProps) {
  return <h1>{word}</h1>;
}

interface PrevProps {
  onClick: () => void;
}

function Prev({ onClick }: PrevProps) {
  return <button onClick={onClick}>Prev</button>;
}

interface NextProps {
  onClick: () => void;
}

function Next({ onClick }: NextProps) {
  return <button onClick={onClick}>Next</button>;
}

interface IndicatorsProps {
  items: string[];
  currentIndex: number;
  onIndicatorClick: (index: number) => void;
}

function Indicators({
  items,
  currentIndex,
  onIndicatorClick,
}: IndicatorsProps) {
  return (
    <>
      {items.map((item, index) => (
        <button
          key={index}
          style={{ backgroundColor: currentIndex === index ? 'lightblue' : '' }}
          onClick={() => onIndicatorClick(index)}>
          {index}
        </button>
      ))}
    </>
  );
}
