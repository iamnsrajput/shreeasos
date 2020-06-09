import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Slide from 'react-reveal/Slide';

import SideDrawer from './sideDrawer';

class Header extends Component {

    state={
        drawerOpen: false,
        headerShow: false
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if(window.scrollY > 0){
            this.setState({
                headerShow:true
            })
        } else {
            this.setState({
                headerShow:false
            })
        }
    }

    toggleDrawer = ( value ) => {
        this.setState({
            drawerOpen:value
        })
    }
render() {
    return (
    <div>
        <AppBar position="fixed"
        style={{
            backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',
            boxShadow:'none',
            padding:'10px 0px'
        }}
        >
        <ToolBar>
            <div className="header_logo">
            <Slide top>
            <div className="font_righteous header_logo_venue">Shree Associates</div>
            </Slide>
            <Slide left>
            <div className="header_logo_title">Premium Industrial Belts</div>
        </Slide>
                
            </div>
            <IconButton 
            area-label="Menu"
            color="inherit"
            onClick={() => this.toggleDrawer(true)}>
                <MenuIcon/>
            </IconButton>
            <SideDrawer
                open={this.state.drawerOpen}
                onClose={(value) => this.toggleDrawer(value)}
            />
        </ToolBar>
        </AppBar>
    </div>
    )
}
}
export default Header;