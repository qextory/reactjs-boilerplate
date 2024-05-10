import { RouterProvider } from 'react-router-dom';

import { GlobalPortal } from './GlobalPortal';
import { router } from './router';

function App() {
  return (
    <GlobalPortal.Provider>
      <RouterProvider router={router} />
    </GlobalPortal.Provider>
  );
}

export default App;
