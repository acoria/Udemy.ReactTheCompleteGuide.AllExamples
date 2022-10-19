import { Concepts } from "./Concepts";
import { MasterDetail } from "./masterDetail/MasterDetail";

function App() {
  return (
    <div>
      <MasterDetail concepts={Concepts} />
    </div>
  );
}

export default App;
