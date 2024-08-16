import { useEffect } from "react";
import { IconCard } from "./components/IconCard/IconCard";


const path2svg = "/svg-icons-sprite-sheets/bw_logos.svg";

const loadSprite = (path: string, name2Sprite: string) => {

  // First Check
  if (document.querySelector(`div.${name2Sprite}`))
    return;

  fetch(path)
    .then(response => response.text())
    .then(svg => {

      // Checking if exist that div - Second Check
      if (document.querySelector(`div.${name2Sprite}`))
        return;

      // Inserting div
      const div = document.createElement('div');
      div.style.display = 'none';
      div.className = name2Sprite
      div.innerHTML = svg;
      document.body.insertBefore(div, document.body.childNodes[0]);

    });
};

function App() {

  useEffect(() => {
    loadSprite(path2svg, "svg-sprite-sheet");
  }, []);

  return (
    <>
      <h1>ICONS</h1>

      <p>This website is under building process. Now it is used to serve SVG Icons to another personal websites.</p>
      <p>I will make improvements in a future.</p>

      <div className="grid-icon-card">
        <IconCard name="bw-tech-c" size={64} />
        <IconCard name="bw-tech-freeRTOS" size={64} />
        <IconCard name="bw-tech-STM" size={64} />
        <IconCard name="bw-tech-cpp" size={64} />
        <IconCard name="bw-tech-qt" size={64} />
        <IconCard name="bw-tech-pandas" size={64} />
        <IconCard name="bw-tech-sql" size={64} />
        <IconCard name="bw-tech-opencv" size={64} />
        <IconCard name="bw-tech-solidworks" size={64} />
        <IconCard name="bw-tech-catia" size={64} />
        <IconCard name="bw-tech-inventor" size={64} />
        <IconCard name="bw-tech-matplotlib" size={64} />
      </div>

    </>
  )
}

export default App
