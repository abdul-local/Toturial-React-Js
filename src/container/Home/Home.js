import React, { Component,Fragment,createContext } from 'react';
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



import BlogPost from '../pages/BlogPost/BlogPost';
import Product from '../pages/Product/Product';
import Coursel1 from '../pages/Coursel/Coursel1';
import YoutubeMain from '../pages/YoutubeMain/YoutubeMain';
import ProdukState from '../pages/ProdukState/ProdukState';
import ProductStateContex from '../pages/ProductStateContex/ProductStateContex';
import Hooks from '../pages/Hooks/Hooks';

export const rootContex= createContext();
const Provider = rootContex.Provider;

export default class Home extends Component {

  state={
    order:0
  }

  dispatch=(action)=>{

    if (action.type==='PLUS_ORDER'){
      return this.setState({
        order:this.state.order+1
      })
     
    }

    if (action.type==='MINUS_ORDER'){
      return this.setState({
        order:this.state.order-1
      })
    }
  }


    render() {

    
        return (
          <Router >
            <Provider value={
            {
              state:this.state,
              dispatch:this.dispatch
              
            }}
            >
            <Fragment >
            <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/produk">Produk</Nav.Link>
              <Nav.Link href="/produkstate">ProdukState</Nav.Link>
              <Nav.Link href="/produkstatecontex">ProdukStatecontex</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/youtube">Youtube</Nav.Link>
              <Nav.Link href="/hooks">Hooks</Nav.Link>
              <NavDropdown title="Mamber" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Login</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Register</NavDropdown.Item>
          </NavDropdown>
            </Nav>
            </Container>
          </Navbar>
         

  
          <Route path='/' exact component={Coursel1} />
        <Route path='/produk'  component={Product} />
        <Route path='/produkstate'  component={ProdukState} />
        <Route path='/produkstatecontex'  component={ProductStateContex} />
        <Route path='/blog' component={BlogPost} />
        <Route path='/youtube' component={YoutubeMain} />
        <Route path='/hooks' component={Hooks} />

       

        </Fragment>
        </Provider>
        </Router>
       
        );
    }
}
