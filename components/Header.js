import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Switch from "@mui/material/Switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Header = () => {
  const { theme, setTheme } = useTheme("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderChangeThemeButton = () => {
    if (!mounted) {
      return null;
    }

    return (
      <span>
        {theme === "dark" ? (
          <DarkModeIcon className="text-black" />
        ) : (
          <LightModeIcon className="text-orange-400" />
        )}
        <Switch onChange={onChangeTheme} checked={theme === "dark"} />
      </span>
    );
  };

  const onChangeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      return;
    }
    setTheme("light");
  };
  return (
    <div className="fixed top-0 bg-emerald-100 w-full text-center mb-[10px] flex justify-between dark:bg-blue-200">
      <span>Interactive E-library</span>
      {renderChangeThemeButton()}
    </div>
  );
};

export default Header;
