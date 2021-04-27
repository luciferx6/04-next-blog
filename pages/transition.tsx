import { useState } from "react";
import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const Fade = ({ inProp }) => (
  <Transition in={false} timeout={duration}>
    {(state) => {
      console.log(state);

      return (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          I'm a fade Transition!
        </div>
      );
    }}
  </Transition>
);

const TransitionPage = () => {
  const [inProp, setInProp] = useState(false);

  return (
    <>
      <Fade inProp={inProp} />
      <button onClick={() => setInProp(!inProp)}>Click to Enter</button>
    </>
  );
};

export default TransitionPage;
