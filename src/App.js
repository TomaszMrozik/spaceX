import {Background} from "./components/Background.style";
import "./reset.css";
import NavSection from "./sections/NavSection.style";
import {SectionDivider} from "./components/SectionDivider.style";

function App() {
  return (
      <Background>
          <NavSection/>
          <SectionDivider/>
      </Background>
  );
}

export default App;
