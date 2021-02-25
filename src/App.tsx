import { Layout } from './shared/components/Layout';
import GlobalStyles from './shared/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import dark from './shared/styles/themes/dark';
import { Dashboard } from './pages/Dashboard';

export const App = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  );
};
