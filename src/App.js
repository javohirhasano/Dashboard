import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux';
import Menu from './pages/Menu';
import store from './redux/store';
import Photos from './pages/Photos';
import ThemeContext from './ThemeConext';
import { useState } from 'react';
import colors from './components/colors/colors';

function App() {
  const [theme, setTheme] = useState("dark")


  const toggleTheme = () => theme === "dark" ? setTheme("light") : setTheme("dark")
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors: colors[theme] }}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Redirect to="dashboard/home" />
            </Route>

            <Route path="/dashboard/:menu">
              <Menu />
            </Route>

          </Switch>
        </Router>
      </Provider>
    </ThemeContext.Provider>
  );
}
export default App;
