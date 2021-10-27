import {Background} from "./components/Background.style";
import "./reset.css";
import NavSection from "./sections/NavSection.style";
import {SectionDivider} from "./components/SectionDivider.style";
import DataSection from "./sections/DataSection";
import RescueShipsSection from "./sections/RescueShipsSection";

function App() {
  return (
      <Background>
          <NavSection/>
          <SectionDivider background={'#5C5C5D'}/>
          <DataSection/>
          <SectionDivider background={'#5C5C5D'}/>
          <RescueShipsSection/>
      </Background>
  );
}

export default App;
