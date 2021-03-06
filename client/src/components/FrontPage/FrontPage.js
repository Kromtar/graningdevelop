import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { Link, Element } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom';
import Responsive from 'react-responsive';
import ScrollingColorBackground from 'react-scrolling-color-background';

import supportsWebP from 'supports-webp';

import Parallax from './Parallax';
import Servicios from './Servicios';
import Proyectos from './Proyectos';
import QuienesSomos from './QuienesSomos';
import Clientes from './Clientes';
import Equipo from './Equipo';
import Contacto from './Contacto';

var logo, pin;
if(supportsWebP) {
  logo = require('../../media/photos/logo.webp');
  pin = require('../../media/photos/pin.webp');
}else{
  logo = require('../../media/photos/logo.png');
  pin = require('../../media/photos/pin.png');
}

class FrontPage extends Component {

  componentDidMount(){
    $('.button-collapse').sideNav({
      draggable: true,
      closeOnClick: true
    });
  }

  render(){

      const Mobile = props => <Responsive {...props} maxWidth={992} />;
      const Default = props => <Responsive {...props} minWidth={993} />;

      return(
        <div>

          <Default>
            <nav>
              <div className="nav-wrapper">
                <Link style={{cursor: 'pointer'}} className="brand-logo" to="parallax" spy={true} smooth={true} duration={500} isDynamic={true}>
                  <img alt="logo" src={logo} style={{height: '88px', marginLeft: '20px'}}/>
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li>
                    <Link style={{color: '#00305b'}} to="test1" spy={true} smooth={'easeInCubic'} offset={-88} duration={500} isDynamic={true}> {/* 64 tamaño de navbar */}
                      SERVICIOS
                    </Link>
                  </li>
                  <li>
                    <Link style={{color: '#00305b'}} to="test2" spy={true} smooth={'easeInCubic'} offset={-130} duration={500} isDynamic={true}>
                      PROYECTOS
                    </Link>
                  </li>
                  <li>
                    <Link style={{color: '#00305b'}} to="test3" spy={true} smooth={'easeInCubic'} offset={-70} duration={500} isDynamic={true}>
                      QUIENES SOMOS
                    </Link>
                  </li>
                  <li>
                    <Link style={{color: '#00305b'}} to="test4" spy={true} smooth={'easeInCubic'} offset={-150} duration={500} isDynamic={true}>
                      EQUIPO
                    </Link>
                  </li>
                  <li>
                    <Link style={{color: '#00305b'}} to="test5" spy={true} smooth={'easeInCubic'} offset={-88} duration={500} isDynamic={true}>
                      CONTACTO
                    </Link>
                  </li>
                  <li>
                    <RouterLink
                      to={'/clientportal'}
                      style={{color: '#00305b'}}
                    >
                      PORTAL CLIENTE
                    </RouterLink>
                  </li>
                  <li>
                    <a
                      target={'_blank'}
                      href={'https://servercl07.outservers.net:2096/'}
                      style={{color: '#00305b'}}
                    >
                      WEBMAIL
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </Default>

          <Mobile>
            <nav>
              <div className="nav-wrapper row">
                <div className="col s2">
                  <a data-activates="slide-out" className="button-collapse"><i className="material-icons" style={{color: '#ff6600', fontSize: '40px', lineHeight: '86px'}}>menu</i></a>
                </div>
                <div className="col s10 right-align">
                  <img alt="logo" src={logo} style={{height: '88px', marginLeft: '20px'}}/>
                </div>
              </div>
            </nav>
            <ul id="slide-out" className="side-nav" style={{zIndex: '1000'}}>
              <li>
                <div className="center-align" style={{height: '88px', paddingTop: '20px'}}>
                  <a>
                    <img alt="pin" src={pin}/>
                  </a>
                </div>
              </li>
              <li>
                <Link style={{color: '#00305b'}} to="parallax" spy={true} smooth={'easeInCubic'} offset={-88} duration={500} isDynamic={true}>
                  PORTADA
                </Link>
              </li>
              <li>
                <Link style={{color: '#00305b'}} to="test1" spy={true} smooth={'easeInCubic'} offset={-88} duration={500} isDynamic={true}>
                  SERVICIOS
                </Link>
              </li>
              <li>
                <Link style={{color: '#00305b'}} to="test2" spy={true} smooth={'easeInCubic'} offset={-130} duration={500} isDynamic={true}>
                  PROYECTOS
                </Link>
              </li>
              <li>
                <Link style={{color: '#00305b'}} to="test3" spy={true} smooth={'easeInCubic'} offset={-100} duration={500} isDynamic={true}>
                  QUIENES SOMOS
                </Link>
              </li>
              <li>
                <Link style={{color: '#00305b'}} to="test4" spy={true} smooth={'easeInCubic'} offset={-150} duration={500} isDynamic={true}>
                  EQUIPO
                </Link>
              </li>
              <li>
                <Link style={{color: '#00305b'}} to="test5" spy={true} smooth={'easeInCubic'} offset={-88} duration={500} isDynamic={true}>
                  CONTACTO
                </Link>
              </li>
              <li>
                <a
                  target={'_blank'}
                  href={'https://servercl07.outservers.net:2096/'}
                  style={{color: '#00305b'}}
                >
                  WEBMAIL
                </a>
              </li>
            </ul>
          </Mobile>


          <ScrollingColorBackground
            selector='.js-color-stop[data-background-color]'
            colorDataAttribute='data-background-color'
            initialRgb='rgb(0, 0, 0)'
            style={{
              zIndex: '-150',
              position: 'fixed',
              top: '0px',
              left: '0px',
              bottom: '0px',
              right: '0px'
            }}
          />

          <section data-background-color='rgb(51, 153, 255)' className='js-color-stop'>
            <Element name="parallax">
              <Parallax />
            </Element>
          </section>

          <section data-background-color='rgb(26, 100, 173)' className='js-color-stop'>
            <Element name="test1" className="element">
              <Servicios />
            </Element>
          </section>

          <section data-background-color='rgb(13, 74, 132)' className='js-color-stop'>
            <Element name="test2" className="element" style={{color: 'white'}}>
              <Proyectos />
            </Element>
          </section>

          <section data-background-color='rgb(0, 48, 91)' className='js-color-stop'>
            <Element name="test3" className="element" style={{ color: 'white'}}>
              <QuienesSomos />
              <Clientes />
            </Element>
          </section>

          <section data-background-color='rgb(13, 74, 132)' className='js-color-stop'>
            <Element name="test4" className="element">
              <Equipo />
            </Element>
          </section>

          <section data-background-color='rgb(26, 100, 173)' className='js-color-stop'>
            <Element name="test5" className="element">
              <Contacto />
            </Element>
          </section>
        </div>
      );
    }
};

export default connect(null)(FrontPage);
