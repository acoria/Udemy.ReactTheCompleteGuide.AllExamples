import { Backdrop } from "./components/backdrop/Backdrop";
import { List } from "./components/list/List";
import { Modal } from "./components/modal/Modal";

export const AnimationsApp: React.FC = () => {
  return (
    <div className="AnimationsApp">
      <h1>Animations</h1>
      <Modal onClose={() => {}} />
      <Backdrop />
      <button className="Button">Open Modal</button>
      <h3>Animating lists:</h3>
      <List />
    </div>
  );
};
