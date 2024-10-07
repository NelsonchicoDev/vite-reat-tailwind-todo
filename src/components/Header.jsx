import { useEffect, useState } from 'react';
import IconMoon from './icons/IconMoon';
import IconSun from './icons/IconSun';

const inicialStateDarkMode = localStorage.getItem('theme') === 'dark';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(inicialStateDarkMode);

  // const handleClickToggleTheme = () => {};
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);
  return (
    <header className=" container mx-auto px-4 pt-8 md:max-w-xl">
      <div className=" flex justify-between">
        <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">
          Todo
        </h1>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? <IconSun /> : <IconMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
