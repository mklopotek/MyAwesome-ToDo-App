import React, { Component } from 'react';

import { MuiThemeProvider } from 'material-ui/styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { purpleA700, purple900, purpleA100 } from 'material-ui/styles/colors'

import ToDo from './ToDo/ToDo';
import Auth from './Auth'



const muiTheme = getMuiTheme({
  palette: { primary1Color: purpleA700,
    primary2Color: purple900,
    primary3Color: purpleA100
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div className="App">
      <Auth>
        <ToDo />
      </Auth>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
