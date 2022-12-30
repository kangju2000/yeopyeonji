import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from '@/styles/GlobalStyles';
import { ROUTES } from '@/constants/routes';
import Home from '@/pages/Home/Home';
import Layout from '@/components/Layout/Layout';
import Select from '@/pages/Select/Select';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SELECT} element={<Select />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
