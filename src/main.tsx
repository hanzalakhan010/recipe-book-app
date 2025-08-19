import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { routes } from './routes.tsx'
import { Provider } from 'react-redux'
import { store, persistor } from './app/store.tsx'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<div>Loading</div>}>
        <RouterProvider router={routes} />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
