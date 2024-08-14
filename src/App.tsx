import { useEffect } from "react";
import SVG_Icon from "./components/SVG_Icon";

const path2svg = "../public/bw_logos.svg";

const loadSprite = ( path:string, name2Sprite: string ) => {
  
  // First Check
  if ( document.querySelector(`div.${name2Sprite}`) ) 
    return;

  fetch(path)
    .then(response => response.text())
    .then(svg => {

      // Checking if exist that div - Second Check
      if ( document.querySelector(`div.${name2Sprite}`) ) 
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
    loadSprite( path2svg, "svg-sprite-sheet" );
  }, []);

  return (
    <>
      Hello World!
      <SVG_Icon name="bw-tech-c" color={"#ffffff"} size={64}/>
      <SVG_Icon name="bw-tech-freeRTOS" color={"#ffffff"} size={64}/>
      <SVG_Icon name="bw-tech-STM" color={"#ffffff"} size={64}/>
      <SVG_Icon name="bw-tech-cpp" color={"#ffffff"} size={64}/>
      <SVG_Icon name="bw-tech-qt" color={"#ffffff"} size={64}/>
      <SVG_Icon name="bw-tech-pandas" color={"#ffffff"} size={64}/>
      <SVG_Icon name="bw-tech-pygame" color={"#ffffff"} size={64}/>
      <SVG_Icon name="bw-tech-sql" color={"#ffffff"} size={64}/>
      <SVG_Icon name="bw-tech-opencv" color={"#ffffff"} size={64}/>
      <SVG_Icon name="bw-tech-solidworks" color={"#ffffff"} size={64}/>
      <SVG_Icon name="bw-tech-catia" color={"#ffffff"} size={64}/>
      <SVG_Icon name="bw-tech-inventor" color={"#ffffff"} size={64}/>
      <SVG_Icon name="bw-tech-matplotlib" color={"#ffffff"} size={64}/>
    </>
  )
}

export default App
