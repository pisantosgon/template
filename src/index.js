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
      main: '#f76a00',
      dark: '#ef6c00',
      contrastText: '#000000',
    },
    secondary: {
      main: '#2235bf',
      light: '#0b29c9',
      dark: '#0b29c9',
      contrastText: '#000000',
    },
    success: {
      main: '#558b2f',
      contrastText: '#000000',
      light: '#558b2f',
      dark: '#558b2f',
    },
    info: {
      main: '#448aff',
      light: '#448aff',
      contrastText: 'rgba(0,0,0,0.87)',
      dark: '#448aff',
    },
    warning: {
      main: '#e4e41a',
      contrastText: 'rgba(0,0,0,0.87)',
      light: '#e4e41a',
      dark: '#e4e41a',
    },
    error: {
      main: '#da1e1e',
      dark: '#da1e1e',
      contrastText: '#000000',
      light: '#da1e1e',
    },
    text: {
      primary: '#000000',
      secondary: '#000000',
      disabled: '#000000',
    },
    background: {
      default: '#e8e5e5',
      paper: '#ea883b',
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
