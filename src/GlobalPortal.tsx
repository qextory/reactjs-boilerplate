import { createContext, PropsWithChildren, useState } from 'react';
import { createPortal } from 'react-dom';

const PortalContext = createContext<HTMLDivElement | null>(null);

function PortalProvider({ children }: PropsWithChildren) {
  const [portalRef, setPortalRef] = useState<HTMLDivElement | null>(null);
  return (
    <PortalContext.Provider value={portalRef}>
      {children}
      <div
        id="portal"
        ref={elem => {
          if (portalRef !== null || elem === null) {
            return;
          }
          setPortalRef(elem);
        }}
      />
    </PortalContext.Provider>
  );
}

function PortalConsumer({ children }: PropsWithChildren) {
  return (
    <PortalContext.Consumer>
      {portalRef => {
        if (portalRef === null) {
          return null;
        }
        return createPortal(children, portalRef);
      }}
    </PortalContext.Consumer>
  );
}

const GlobalPortal = Object.assign({
  Provider: PortalProvider,
  Consumer: PortalConsumer,
});

export { GlobalPortal };
