import { RouterProvider } from "react-router-dom";
import { StyledEngineProvider } from '@mui/material/styles';
import './App.scss';
import router from "./router";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <RouterProvider router={router} />
    </StyledEngineProvider>
  );
}

export default App;
