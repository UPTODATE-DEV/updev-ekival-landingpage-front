import { useTheme } from "next-themes";
import { useState } from "react";

const DarkModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(resolvedTheme === "dark");

  const handleToggle = () => {
    setIsDark(!isDark);
    setTheme(isDark ? "light" : "dark");
  };

  const sliderStyle = {
    left: isDark ? "calc(100% - 1.5rem)" : "0",
    transition: "left 0.3s",
  };

  return (
    <button
      type="button"
      className="relative inline-flex items-center justify-center w-10 h-6 rounded-full bg-gray-400 dark:bg-gray-600 focus:outline-none"
      onClick={handleToggle}
    >
      <div
        className="absolute w-6 h-6 bg-white rounded-full shadow flex justify-center items-center "
        style={sliderStyle}
      >
        {isDark ? "🌙" : "🌞"}
      </div>
    </button>
  );
};

export default DarkModeToggle;
