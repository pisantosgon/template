import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './Dashboard';
import CadastroUsuario from "./pages/CadastroUsuario";
import ErroPage from './pages/ErroPage';
import App from './pages/App';
import CadastroProduto from './pages/CadastroProduto';
import "./App.css";
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#9a2ead',
      light: '#983898',
      dark: '#060606',
      contrastText: '#f9f9f9',
    },
    secondary: {
      main: '#6f098a',
      light: '#823498',
      dark: '#8c1faa',
    },
    success: {
      main: '#b18cf3',
      contrastText: '#000000',
      light: '#370c81',
      dark: '#b18cf3',
    },
    info: {
      main: '#4a148c',
      light: '#4a148c',
      contrastText: 'rgba(0,0,0,0.87)',
      dark: '#4a148c',
    },
    warning: {
      main: '#8c1c8c',
      contrastText: 'rgba(0,0,0,0.87)',
      light: '#8c1c8c',
      dark: '#8c1c8c',
    },
    error: {
      main: '#35205c',
      dark: '#35205c',
      contrastText: '#000000',
      light: '#35205c',
    },
    text: {
      primary: '#000000',
      secondary: '#000000',
      disabled: '#8623bf',
    },
    background: {
      default: '#ce93d8',
      paper: '#ffffff',
    },
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErroPage />
  },
  {
    path: "/cadastro",
    element: <CadastroUsuario />,
    errorElement: <ErroPage />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children:[
      {
        path: "produtos",
        element: <App />
      },
      {
        path: "cadastro/produto",
        element: <CadastroProduto />
      },
      {
        path: "editar/produto/:id",
        element: <CadastroProduto />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline></CssBaseline>
    <RouterProvider router={router} />
  </ThemeProvider>
);
