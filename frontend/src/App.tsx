import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Layout from './components/Layout/Layout';
import { GlobalStyles } from './styles/GlobalStyles';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
