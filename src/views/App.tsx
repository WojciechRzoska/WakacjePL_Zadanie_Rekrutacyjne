import { Navigate, Route, Routes } from 'react-router-dom';
import MainTemplate from '../components/template/MainTemplate';

import './App.css';
import { Home } from './Home/Home';
import { Search } from './Search/Search';

export const App = () => {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />}>
          {/* <Route path=":id" element={<Search />} /> */}
        </Route>
      </Routes>
    </MainTemplate>
  );
};
