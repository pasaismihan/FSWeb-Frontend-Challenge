import { useEffect, useState, useSyncExternalStore } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const prefferedLang = localStorage.settedLang
    ? localStorage.getItem("settedLang")
    : localStorage.setItem("settedLang", false);
  const [language, setLanguage] = useState(prefferedLang);

  const [theme, setTheme] = useState(
    localStorage.theme
      ? localStorage.getItem("theme")
      : window.matchMedia("(prefers-color-scheme: dark)") === true
      ? "dark"
      : "light"
  );
  localStorage.setItem("theme", theme);
  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const colorScheme = event.matches ? "dark" : "light";
        setTheme(colorScheme);
      });
  }, []);

  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);
  useEffect(() => {
    localStorage.setItem("lang", false);
  }, []);
  const themeHandler = (e) => {
    setTheme(localStorage.theme === "dark" ? "light" : "dark");
  };

  const languageHandler = () => {
    setLanguage(!language);
    localStorage.setItem("settedLang", language);
  };

  return (
    <div className="max-w-[1440px] m-auto dark:bg-[#252128] ">
      <Header
        theme={theme}
        themeHandler={themeHandler}
        languageHandler={languageHandler}
        language={language}
      />
      <Hero language={language} />
      <Skills language={language} />
      <Projects language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
