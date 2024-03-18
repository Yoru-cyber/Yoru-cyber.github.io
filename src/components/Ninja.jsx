import "ninja-keys";
import { useState, useRef, useEffect } from "react";

export default function App() {
  const ninjaKeys = useRef(null);
  const [hotkeys, setHotkeys] = useState([
    {
      id: "Home",
      title: "cd Home",
      hotkey: "cmd+h",
      handler: () => {
        console.log("navigation to home");
      }
    },
    {
      id: "Projects",
      title: "cd Projects",
      hotkey: "alt+p",
      handler: () => {
        document.getElementById("Projects").scrollIntoView({behavior: 'smooth'});
      }
    },
    {
      id: "Theme",
      title: "Change theme...",
      children: [
        {
          id: "Light Theme",
          title: "Change theme to Light",
          handler: () => {
            console.log("theme light");
          }
        },
        {
          id: "Dark Theme",
          title: "Change theme to Dark",
          keywords: "lol",
          handler: () => {
            console.log("theme dark");
          }
        }
      ]
    },
    {
      id: "About",
      title: "About",
      hotkey: "alt+a",
      handler: () => {
        console.log("navigation to about");
      }
    }
  ]);

  useEffect(() => {
    if (ninjaKeys.current) {
      ninjaKeys.current.data = hotkeys;
    }
  }, []);

  return (
   <>
      <ninja-keys ref={ninjaKeys}></ninja-keys>
      </>
  );
}
