import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// prettier-ignore
i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
    debug: true,
    fallbackLng: "en",
    resources: {
        en: {
            translation: {
                "home": {
                    "currently": "Currently working on...",
                    "blocks": {
                        "first_block": "Actively seeking a Frontend Developer position in a team where I can grow and contribute real value",
                        "second_block": "Pursuing my Bachelor's in IT at VSB-TUO with a strong focus on low-level development (C, Assembly, OS)",
                        "third_block": "Working at VertiFlex, integrating Geek+ robotics to optimize warehouse operations, collaborating closely with the founders to deliver cutting-edge intralogistics solutions",
                        "fourth_block": "Combining martial arts (jiu-jitsu) and programming to train discipline, clarity, and focus",
                    },
                },
                "about": {
                    "first_article": "I believe in building things that matter — products that are not only functional, but meaningful.",
                    "second_article": "I thrive in environments where trust, autonomy, and feedback are part of the culture. I enjoy collaborating with people who care — about the code, the user, and the team.",
                    "third_article": "What drives me is progress. I&apos;m passionate about learning low-level fundamentals (C, Assembly, memory) not to stay in the past, but to build smarter in the future.",
                    "fourth_article": "For me, development isn't just about shipping features — it&apos;s about crafting well-thought-out experiences that make someone's day easier, faster, or more joyful.",
                },
            },
        },
        cs: {
            translation: {
                "home": {
                    "currently": "V současné době pracuji na...",
                    "blocks": {
                        "first_block": "Aktivně hledám pozici Frontend Developera v týmu, kde mohu růst a přinášet reálnou hodnotu",
                        "second_block": "Studuji IT na VŠB-TUO se zaměřením na low-level vývoj (C, Assembler, OS)",
                        "third_block": "Pracuji ve společnosti VertiFlex na integraci robotů Geek+ pro optimalizaci skladových operací, úzce spolupracuji se zakladateli na dodávání špičkových intralogistických řešení",
                        "fourth_block": "Spojuji bojová umění (jiu-jitsu) a programování pro trénink disciplíny a soustředění",
                    },
                },
                "about": {
                    "first_article": "Věřím ve smysluplné věci — produkty, které nejsou jen funkční, ale přinášejí hodnotu.",
                    "second_article": "Daří se mi v prostředí, kde funguje důvěra, zpětná vazba a prostor pro růst. Baví mě spolupráce s lidmi, kterým záleží — na kódu, uživateli i týmu.",
                    "third_article": "Co mě pohání, je pokrok. Fascinuje mě low-level svět (C, Assembler, paměť), ne kvůli nostalgii, ale abych v budoucnu stavěl efektivněji a chytřeji.",
                    "fourth_article": "Vývoj pro mě není jen o funkcích. Je to o tom navrhovat promyšlené zážitky, které někomu zjednoduší den — ať už o 1 % nebo o 100 %.",
                },
            },
        }
    }
});

export default i18next;
