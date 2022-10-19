import { concepts } from "./Concepts";
import { MasterDetail } from "./masterDetail/MasterDetail";

function App() {
  return (
    <div>
      <MasterDetail concepts={concepts} />
    </div>
  );
}

export default App;
