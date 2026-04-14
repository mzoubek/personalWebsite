import { SkillCards } from "./index";
import Reveal from "./Reveal";
import RevealFromSide from "./RevealFromSide";

const SkillCard = () => {
  return (
    <div className="mt-20 md:mt-28">
      <RevealFromSide>
        <p className="font-poppins text-accent text-xs md:text-sm tracking-[0.3em] uppercase mb-6">
          Certifications
        </p>
      </RevealFromSide>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SkillCards.map((card, index) => {
          const titleText = card.title.replace("\n", " ");
          const skillText = card.skill.replace("\n", " ");
          return (
            <Reveal key={index}>
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-surface border border-white/[0.06] rounded-2xl p-6 transition-all duration-300 hover:border-accent/20 hover:bg-surface-light h-full"
              >
                <p className="font-poppins text-xs text-zinc-600 mb-1">
                  {titleText}
                </p>
                <p className="font-poppins text-base font-semibold text-white">
                  {skillText}
                </p>
                <div className="flex items-center gap-1 mt-4 text-accent/50 text-xs font-poppins group-hover:text-accent transition-colors duration-200">
                  View certificate
                  <svg
                    className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5"
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
              </a>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCard;
