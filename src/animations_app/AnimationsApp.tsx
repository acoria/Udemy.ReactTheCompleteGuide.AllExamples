import { useState } from "react";
import { Backdrop } from "./components/backdrop/Backdrop";
import { List } from "./components/list/List";
import { AnimationModal } from "./components/modal/animationModal/AnimationModal";
import { TransitionModal } from "./components/modal/transitionModal/TransitionModal";
import Transition, {
  TransitionStatus,
} from "react-transition-group/Transition";

export const AnimationsApp: React.FC = () => {
  const [showTransitionModal, setShowTransitionModal] = useState(false);
  const [showAnimationModal, setShowAnimationModal] = useState(false);
  const [showBlock, setShowBlock] = useState(false);

  const opacity = (state: TransitionStatus): number => {
    switch (state) {
      case "exiting":
        return 0;
      case "entering":
        return 0;
      case "entered":
        return 1;
      case "exited":
        return 1;
      default:
        return 1;
    }
  };

  return (
    <div className="AnimationsApp">
      <h1>Animations</h1>
      <button onClick={() => setShowBlock((previous) => !previous)}>
        Toggle block
      </button>
      {/* Transition component: waits until the state is "exited" to remove the element from the DOM //(if unmountOnExit is set) } */}
      <Transition in={showBlock} timeout={1000} mountOnEnter unmountOnExit>
        {(state) => (
          <div
            style={{
              backgroundColor: "blue",
              height: 100,
              width: 100,
              margin: "auto",
              transition: "opacity 1s ease-out",
              opacity: opacity(state),
              // opacity: state === "exiting" ? 0 : 1,
            }}
          ></div>
        )}
      </Transition>
      <TransitionModal
        onClose={() => {
          setShowTransitionModal(false);
        }}
        showModal={showTransitionModal}
      />
      <AnimationModal
        onClose={() => {
          setShowAnimationModal(false);
        }}
        showModal={showAnimationModal}
      />
      <Backdrop showBackdrop={showTransitionModal} />
      <button className="Button" onClick={() => setShowTransitionModal(true)}>
        Open Modal by CSS Transition
      </button>
      <button className="Button" onClick={() => setShowAnimationModal(true)}>
        Open Modal by CSS Animation
      </button>
      <h3>Animating lists:</h3>
      <List />
    </div>
  );
};
