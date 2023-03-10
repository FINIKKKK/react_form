import React from "react";
import { Form } from "./components";

function App() {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsVisible(true)} className="btn">
        Форма
      </button>
      {isVisible && <Form setIsVisible={setIsVisible} />}
    </div>
  );
}

export default App;
