import { useEffect } from "react";
import { IconCard } from "./components/IconCard/IconCard";


import { TECH_SVG_PATH, SOCIAL_NETWORK_SVG_PATH, COMMON_SVG_PATH } from "./utils/svgPaths"

const assignNameCollection = (svgString: string, nameCollection: string) => {

  const tempContainer = document.createElement('div');
  // Trim to remove any accidental whitespace
  tempContainer.innerHTML = svgString.trim();

  // Select the SVG root element
  const svgElement = tempContainer.querySelector('svg');

  if (svgElement) {
    // Modify the className of the SVG root element
    svgElement.setAttribute("classname", `collection-${nameCollection}`);
    // console.log(svgElement)
  }

  return tempContainer.innerHTML;
}

const loadSprite = (path: string, name2Sprite: string) => {

  // First Check
  if (document.querySelector(`div.${name2Sprite}`))
    return;

  fetch(path)
    .then(response => response.text())
    .then((svgString) => {

      // Checking if exist that div - Second Check
      if (document.querySelector(`div.${name2Sprite}`))
        return;



      // Inserting div
      const div = document.createElement('div');
      div.style.display = 'none';
      div.className = name2Sprite
      div.innerHTML = assignNameCollection(svgString, name2Sprite);
      // div.innerHTML = svg;
      document.body.insertBefore(div, document.body.childNodes[0]);

    });
};

function App() {

  useEffect(() => {
    loadSprite(TECH_SVG_PATH, "tech");
    loadSprite(SOCIAL_NETWORK_SVG_PATH, "social-networks");
    loadSprite(COMMON_SVG_PATH, "commons");
  }, []);

  return (
    <>
      <h1>ICONS</h1>

      <p>This website is under building process. Now it is used to serve SVG Icons to another personal websites.</p>
      <p>I will make improvements in a future.</p>

      <h1>Tech Icons</h1>
      <div className="grid-icon-card">
        <IconCard name="bw-tech-c" size={64} />
        <IconCard name="bw-tech-freeRTOS" size={64} />
        <IconCard name="bw-tech-STM" size={64} />
        <IconCard name="bw-tech-cpp" size={64} />
        <IconCard name="bw-tech-python" size={64} />
        <IconCard name="bw-tech-qt" size={64} />
        <IconCard name="bw-tech-pandas" size={64} />
        <IconCard name="bw-tech-sql" size={64} />
        <IconCard name="bw-tech-opencv" size={64} />
        <IconCard name="bw-tech-solidworks" size={64} />
        <IconCard name="bw-tech-catia" size={64} />
        <IconCard name="bw-tech-inventor" size={64} />
        <IconCard name="bw-tech-matplotlib" size={64} />
        <IconCard name="bw-tech-react" size={64} />
        <IconCard name="bw-tech-javascript" size={64} />
        <IconCard name="bw-tech-html" size={64} />
        <IconCard name="bw-tech-css" size={64} />
      </div>


      <h1>Social Networks Icons</h1>
      <div className="grid-icon-card">
        <IconCard name="bw-sn-linkedin" size={64} />
        <IconCard name="bw-sn-github" size={64} />
        <IconCard name="bw-sn-youtube" size={64} />
      </div>

      <h1>Common Icons</h1>
      <div className="grid-icon-card">
        <IconCard name="bw-common-pdf-file" size={64} />
        <IconCard name="bw-common-pdf-file-line" size={64} />
        <IconCard name="bw-common-envelop" size={64} />
        <IconCard name="bw-common-envelop-line" size={64} />
        <IconCard name="bw-common-briefcase" size={64} />
        <IconCard name="bw-common-book-open" size={64} />
        <IconCard name="bw-common-globe" size={64} />

      </div>

    </>
  )
}

export default App
