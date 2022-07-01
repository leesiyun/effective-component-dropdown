import Hamburger from "hamburger-react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hamburger
          direction="right"
          size={32}
          color="red"
          duration={0.1}
          onToggle={(toggle) => {
            if (toggle) {
              console.log("open menu");
            } else {
              console.log("close menu");
            }
          }}
        />
      </header>
    </div>
  );
}

export default App;
