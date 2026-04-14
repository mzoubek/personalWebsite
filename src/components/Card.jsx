import { ProjectCards } from "../components/index";
import Reveal from "./Reveal";

const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {ProjectCards.map((card, index) => (
        <Reveal key={index}>
          <a
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-surface border border-white/[0.06] rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5"
          >
            <div className="h-44 md:h-48 overflow-hidden bg-surface-light">
              <img
                src={card.img}
                alt={card.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
            </div>
            <div className="p-6">
              <h3 className="font-poppins text-base md:text-lg font-semibold text-white mb-2">
                {card.title.replace("\n", " ")}
              </h3>
              <p className="font-poppins text-sm text-zinc-500 leading-relaxed line-clamp-3">
                {card.description}
              </p>
              <div className="flex items-center gap-1.5 mt-4 text-accent text-sm font-poppins font-medium">
                View project
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  );
};

export default Card;
