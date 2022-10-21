import { concepts } from "./ConceptsList";
import { Concepts } from "./concepts/Concepts";

function App() {
  return (
    <div>
      <Concepts concepts={concepts} />
    </div>
  );
}

export default App;
