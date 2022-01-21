import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Switch,
  Link,
  NavLink,
} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>This is from my dashboard component</div>
);

const AddExpensePage = () => <div>This is from my add component</div>;

const EditExpensePage = () => <div>This is from my edit component</div>;

const HelpPage = () => <div>This is from my help page</div>;

const NotFound = () => (
  <div>
    Hello World?
    <Link to="/">Go home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <div>
      <NavLink to="/" activeClassName="is-active" exact={true}>
        Home
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        Create Expense
      </NavLink>
      <NavLink to="/edit" activeClassName="is-active">
        Edit Expense
      </NavLink>
      <NavLink to="/help" activeClassName="is-active">
        Help
      </NavLink>
    </div>
  </header>
);

const routes = (
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
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

ReactDom.render(routes, document.getElementById('app'));
