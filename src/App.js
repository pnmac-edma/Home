import React, { useEffect, useState } from 'react';
import Package from '../package.json';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import homeTheme from './Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { color, font, fontSize } from '@edma/design-tokens/';
import Routing from './components/Routing';

// Current version synced from package.json
const appVer = Package.version;

// Define custom component styles
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    fontFamily: font.body
  }
}));

const useThemeDetector = () => {
  const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const mqListener = (e => {
      setIsDarkTheme(e.matches);
  });

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addListener(mqListener);
    return () => darkThemeMq.removeListener(mqListener);
  }, []);
  return isDarkTheme;
}

export default function App() {
  const custom = useStyles();
  const [ isTransitioning, setTransition ] = useState(false);
  const isDarkTheme = useThemeDetector();

  // Define Kirby theme colors using Tokens in App state,
  // so that we can let users customize them later.
  const [theme, setTheme] = useState({
    typography: homeTheme.typography,
    palette: {
      type: isDarkTheme ? 'dark' : 'light'
    }
  });

  useEffect(() => {
    document.querySelector('body')
      .classList.add(theme.palette.type === 'light' ? 'light' : 'dark');
    return () => {
      document.querySelector('body')
        .classList.remove(theme.palette.type === 'light' ? 'light' : 'dark');
    };
  });

  // Toggles between light and dark modes.
  // This uses all the values defined above, except for palette type.
  const toggleDarkMode = () => {
    let newPaletteType = theme.palette.type === "light" ? "dark" : "light";

    setTimeout(() => {
      setTransition(false);
    }, 1000);
    setTransition(true);

    setTheme({
      typography: {
        body1: theme.typography.body1,
        body2: theme.typography.body2,
        h1: theme.typography.h1,
        h2: theme.typography.h2,
        h3: {
          fontFamily: 'Open Sans',
          fontWeight: 'normal',
          color: theme.palette.type === 'light' ? color.g300 : color.g700,
          minWidth: 260,
          maxWidth: 600,
          fontSize: fontSize['h3'],
          lineHeight: 1.33,
          letterSpacing: 0
        },
        h4: theme.typography.h4,
        h5: theme.typography.h5,
        h6: theme.typography.h6,
      },
      palette: {
        type: newPaletteType
      }
    });
  };

  const kirby = createMuiTheme (theme);

  return (
    <ThemeProvider theme={kirby}>
      <div className={`App ${theme.palette.type === 'light' ? '' : 'dark'}`}>
        <div className={custom.root}>
          <CssBaseline />
          <main className={`main`}>
            <div className={`wrapper`}>
              <Routing onToggle={toggleDarkMode} transitioning={isTransitioning} version={appVer} />
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
