import { createTheme, loadTheme } from 'office-ui-fabric-react/lib/Styling';
import { context } from './context';

export const lightTheme = createTheme({
   palette: {
      white: '#FAF9F8',
   },
});

export const darkTheme = createTheme({
   palette: {
      white: '#323130',
      neutralSecondary: '#e1dfdd',
      neutralPrimary: '#edebe9',
      neutralDark: '#f3f2f1',
      neutralLighter: '#3b3a39',
      neutralLight: '#605e5c',
      neutralQuaternaryAlt: '#8a8886',
   },
});

context.on('darkMode', isDarkMode => {
   context.darkMode = isDarkMode;
   loadTheme(isDarkMode ? darkTheme : lightTheme);
});

export function initTheme() {
   loadTheme(context.darkMode ? darkTheme : lightTheme);
}
