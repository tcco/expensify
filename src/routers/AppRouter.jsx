import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header.jsx';
import NotFound from '../components/NotFound.jsx';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.jsx';
import AddExpensePage from '../components/AddExpensePage.jsx';
import EditExpensePage from '../components/EditExpensePage.jsx';
import HelpPage from '../components/HelpPage.jsx';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ExpenseDashboardPage />} exact={true} />
        <Route path="/create" element={<AddExpensePage />} />
        <Route path="/edit" element={<EditExpensePage />} />
        <Route path="/help" element={<HelpPage />} />
        /* * TC note: Not sure about this since Switch * doesn't work
        react-router beyond 6.0.0. * Adding path just for purposes of continuing
        */
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default AppRouter;
