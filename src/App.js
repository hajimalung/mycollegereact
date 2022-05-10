import React, { Component } from 'react';
import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';
import AppBar from '../node_modules/material-ui/AppBar';
import Drawer from '../node_modules/material-ui/Drawer';
import IconButton from '../node_modules/material-ui/IconButton';
import SvgIcon from '../node_modules/material-ui/SvgIcon';
import appConfig from './appConfig.js';
import Login from './Login.js';
import Registration from './Registration.js'
import MiddlewareSDK from './middleware/middlewaresdk.js';

class App extends Component {
  constructor(props){
    super(props)
    this.clientsdk = new MiddlewareSDK();
    this.state={
      isAppMenuOpen:false
    }
  }
  toggleAppDrawer(){
    this.setState({
      isAppMenuOpen:!this.state.isAppMenuOpen
    });
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar position='fixed' title={appConfig.collegeName} onLeftIconButtonClick={()=>this.toggleAppDrawer()}>            
          </AppBar>
          <Login sdkObject={this.clientsdk}>Login component</Login>
         {/*<Registration/>*/}
         <Drawer open={this.state.isAppMenuOpen} onClose={()=>this.toggleAppDrawer()}>
          <IconButton onClick={()=>this.toggleAppDrawer()} dire>
            <SvgIcon>
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </SvgIcon>
          </IconButton>
         </Drawer> 
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
