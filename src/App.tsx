import { concepts } from "./Concepts";
import { MasterDetail } from "./concepts/Concepts";

function App() {
  return (
    <div>
      <MasterDetail concepts={concepts} />
    </div>
  );
}

export default App;
