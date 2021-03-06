import React, { createContext } from 'react';

export const TransitionContext = createContext({ user: null });

const TransitionProvider = props => {
  const pageTransitions = {
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
    }
  };

  return (
    <TransitionContext.Provider value={pageTransitions}>
      {props.children}
    </TransitionContext.Provider>
  );
};

export default TransitionProvider;
