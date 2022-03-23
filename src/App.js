import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './components/Themes';
import GlobalStyle from './globalStyles';

import Main from './components/Main';
import AboutPage from './components/AboutPage';
import MySkillsPage from './components/MySkillsPage';
import ProjectPage from './components/ProjectPage';

function App() {
  return <>
    <GlobalStyle />
      <ThemeProvider theme={ lightTheme }>
        <Switch>
          <Route exact path='/' component={ Main }/>
          <Route exact path='/about' component={ AboutPage }/>
          <Route exact path='/skills' component={ MySkillsPage }/>
          <Route exact path='/portfolio' component={ ProjectPage }/>
        </Switch>
      </ThemeProvider>
  </>
}

export default App

