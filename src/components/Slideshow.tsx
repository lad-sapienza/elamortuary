import { useCallback, useEffect, useState } from "react";
import susa from "../assets/susa.jpg";
import choghaMish from "../assets/chogha-mish.jpg";
import choghaZanbil from "../assets/chogha-zanbil.jpg";
import tallEGhazir from "../assets/tall-e-ghazir-mound-a.jpg";

interface Slide {
  src: string;
  title: string;
  credit: string;
  alt: string;
}

const slides: Slide[] = [
  { src: susa.src, title: "Susa", credit: "© Loghman Ahmadzadeh", alt: "Susa (© Loghman Ahmadzadeh)" },
  { src: choghaMish.src, title: "Chogha Mish", credit: "© Loghman Ahmadzadeh", alt: "Chogha Mish (© Loghman Ahmadzadeh)" },
  { src: choghaZanbil.src, title: "Chogha Zanbil", credit: "© Loghman Ahmadzadeh", alt: "Chogha Zanbil (© Loghman Ahmadzadeh)" },
  { src: tallEGhazir.src, title: "Tall-e Ghazir, Mound A", credit: "© Loghman Ahmadzadeh", alt: "Tall-e Ghazir, Mound A (© Loghman Ahmadzadeh)" },
];

const INTERVAL = 5000;

export default function Slideshow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (next: number) => setActive((next + slides.length) % slides.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % slides.length), INTERVAL);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <div
      className="carousel slide"
      style={{ marginBottom: "3rem" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carousel-indicators">
        {slides.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            className={i === active ? "active" : ""}
            aria-current={i === active}
            aria-label={`Slide ${i + 1}: ${slide.title}`}
            onClick={() => go(i)}
          />
        ))}
      </div>

      <div className="carousel-inner">
        {slides.map((slide, i) => (
          <div key={slide.title} className={`carousel-item${i === active ? " active" : ""}`}>
            <img src={slide.src} className="d-block w-100" alt={slide.alt} />
            <div className="carousel-caption d-none d-md-block">
              <h3>{slide.title}</h3>
              <span className="subTitle">{slide.credit}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" onClick={() => go(active - 1)}>
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" onClick={() => go(active + 1)}>
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
