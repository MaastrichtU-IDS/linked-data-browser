import * as React from 'react';
// TODO: which one to keep?
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
//import ReactDOM from 'react-dom';

import NavBar from './components/navbar';
import Footer from './components/footer';
import SparqlComponent from './components/sparql';
import DescribeComponent from './components/describe';
import DatasetsOverviewComponent from './components/datasets_overview';
import ComunicaComponent from './components/comunica';

const css = require('./App.css');
// import * as css from './App.css'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
// import blueGrey from '@material-ui/core/colors/blueGrey';
// import orange from '@material-ui/core/colors/orange';

// Change theme color and typography here
const theme = createMuiTheme({
  palette: {
    primary: { light: '#eceff1', main: blue[700], dark: blue[900] },
    // Same color as Angular into-the-graph: blue[700] / #1976d2
    // primary: { light: blue[50], main: blue[600], dark: blue[900] },
    secondary: { light: '#fafafa', main: '#fafafa', dark: grey[600] }
  },
  typography: {
    "fontFamily": "\"Open Sans\", \"Roboto\", \"Arial\"",
    "fontSize": 16,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   }
});

// Routing happens here
export class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
          <div style={{width: '100%', height: '100%', fontFamily: 'Open Sans'}}>
            <NavBar />
            <Switch>
              <Route exact path='/' component={DatasetsOverviewComponent} />
              <Route exact path='/sparql' component={SparqlComponent} />
              <Route exact path='/describe' component={DescribeComponent} />
              <Route exact path='/comunica' component={ComunicaComponent} />
            </Switch>
            <Footer />
          </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}
// export default (App);