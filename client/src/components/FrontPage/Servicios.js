import React, { Component } from 'react';
import { connect } from 'react-redux';
import Responsive from 'react-responsive';
import Zoom from 'react-reveal/Zoom';

import supportsWebP from 'supports-webp';

var urba, hidro, obraAs, obraAp, vigas, ins, mode;
if(supportsWebP) {
  urba = require('../../media/photos/urba.webp');
  hidro = require('../../media/photos/hidro.webp');
  obraAs = require('../../media/photos/obraAs.webp');
  obraAp = require('../../media/photos/obraAp.webp');
  vigas = require('../../media/photos/vigas.webp');
  ins = require('../../media/photos/ins.webp');
  mode = require('../../media/photos/mode.webp');
}else{
  urba = require('../../media/photos/urba.png');
  hidro = require('../../media/photos/hidro.png');
  obraAs = require('../../media/photos/obraAs.png');
  obraAp = require('../../media/photos/obraAp.png');
  vigas = require('../../media/photos/vigas.png');
  ins = require('../../media/photos/ins.png');
  mode = require('../../media/photos/mode.png');
}



class Servicios extends Component {

  render(){

    const Mobile = props => <Responsive {...props} maxWidth={767} />;
    const Default = props => <Responsive {...props} minWidth={768} />;

    const desktopVersion = (
      <div className="row">
        <img alt="vigas" src={vigas} style={{position: 'absolute', opacity: '0.2', width: '100%'}}/>
        <div className="col s12" style={{marginTop: '45px', marginBottom: '37px'}}>

          <div className="row">
            <div className="col s6 m6 l12 xl3 center-align" style={{position: 'relative' }}>
              <h4 style={{color: 'white'}}><b>SERVICIOS</b></h4>
              <div className="row center-align">
                <div className="col s8 offset-s2" style={{position: 'relative'}}>
                  <div className="divider" style={{backgroundColor: '#ff6600'}}/>
                </div>
              </div>
              <p className="flow-text" style={{marginLeft: '40px', marginRight: '40px', color: 'white'}}>
                Ofrecemos una Ingeniería Multidisciplinaria, enfocada en las siguientes especialidades
              </p>
            </div>
            <div className="col s6 m6 l4 xl3">
              <Zoom>
                <div className="card hoverable" style={{width: '100%'}}>
                  <div className="card-image waves-effect waves-block waves-light">
                    <img alt="obra" className="activator" src={obraAp}/>
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">OBRAS SANITARIAS - A.P<i className="material-icons right">arrow_upward</i></span>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">OBRAS SANITARIAS - A.P<i className="material-icons right">arrow_downward</i></span>
                    <ul style={{marginTop: '25px'}}>
                      <li><div id="dot"/>Planes de Desarrollo</li>
                      <li><div id="dot"/>Conducción e impulsión de fluidos</li>
                      <li><div id="dot"/>Diseño y cálculo de redes de distribución</li>
                      <li><div id="dot"/>Sistemas permanentes y transientes</li>
                      <li><div id="dot"/>Estaciones Elevadoras de Agua Potable</li>
                    </ul>
                  </div>
                </div>
            </Zoom>
            </div>
            <div className="col s6 m6 l4 xl3">
              <Zoom delay={300}>
                <div className="card hoverable" style={{width: '100%'}}>
                  <div className="card-image waves-effect waves-block waves-light">
                    <img alt="hidro" className="activator" src={hidro}/>
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">HIDROLOGÍA<i className="material-icons right">arrow_upward</i></span>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">HIDROLOGÍA<i className="material-icons right">arrow_downward</i></span>
                    <ul style={{marginTop: '25px'}}>
                      <li><div id="dot"/>Explotación y cuantificación de recursos de agua subterránea</li>
                      <li><div id="dot"/>Cuantificación de las demandas</li>
                      <li><div id="dot"/>Balances hídricos</li>
                      <li><div id="dot"/>Proyectos de Regadío</li>
                      <li><div id="dot"/>Sistemas de drenaje</li>
                    </ul>
                  </div>
                </div>
              </Zoom>
            </div>
            <div className="col s6 m6 l4 xl3">
              <Zoom delay={600}>
                <div className="card hoverable" style={{width: '100%'}}>
                  <div className="card-image waves-effect waves-block waves-light">
                    <img alt="test" className="activator" src={ins}/>
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">INSPECCIÓN DE OBRAS<i className="material-icons right">arrow_upward</i></span>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">INSPECCIÓN DE OBRAS<i className="material-icons right">arrow_downward</i></span>
                    <ul style={{marginTop: '25px'}}>
                      <li><div id="dot"/>Inspección y Control de Obras</li>
                    </ul>
                  </div>
                </div>
              </Zoom>
            </div>
          </div>

          <div className="row">
            <div className="col s6 m6 l4 xl3">
              <Zoom delay={900}>
                <div className="card hoverable" style={{width: '100%'}}>
                  <div className="card-image waves-effect waves-block waves-light">
                    <img alt="test" className="activator" src={obraAs}/>
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">OBRAS SANITARIAS - A.S<i className="material-icons right">arrow_upward</i></span>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">OBRAS SANITARIAS - A.S<i className="material-icons right">arrow_downward</i></span>
                    <ul style={{marginTop: '25px'}}>
                      <li><div id="dot"/>Planes de Desarrollo</li>
                      <li><div id="dot"/>Diseño de P.T.A.S</li>
                      <li><div id="dot"/>Diseño de Estaciones Elevadoras</li>
                      <li><div id="dot"/>Diseño y cálculo de redes de alcantarillado</li>
                    </ul>
                  </div>
                </div>
              </Zoom>
            </div>
            <div className="col s6 m6 l4 xl3">
              <Zoom delay={1200}>
                <div className="card hoverable" style={{width: '100%'}}>
                  <div className="card-image waves-effect waves-block waves-light">
                    <img alt="urba" className="activator" src={urba}/>
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">URBANIZACIÓN<i className="material-icons right">arrow_upward</i></span>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">URBANIZACIÓN<i className="material-icons right">arrow_downward</i></span>
                    <ul style={{marginTop: '25px'}}>
                      <li><div id="dot"/>Planes diseño de arquitectura, estructural, pavimentos</li>
                      <li><div id="dot"/>Evacuación de aguas lluvias, agua potable, alcantarillado</li>
                      <li><div id="dot"/>Diseño de Estaciones Elevadoras</li>
                      <li><div id="dot"/>Obras eléctricas e instalaciones domiciliarias</li>
                    </ul>
                  </div>
                </div>
              </Zoom>
            </div>
            <div className="col s6 m6 l4 xl3">
              <Zoom delay={1500}>
                <div className="card hoverable" style={{width: '100%'}}>
                  <div className="card-image waves-effect waves-block waves-light">
                    <img alt="test" className="activator" src={mode}/>
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">MODELACIÓN HIDRÁULICA<i className="material-icons right">arrow_upward</i></span>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">MODELACIÓN HIDRÁULICA<i className="material-icons right">arrow_downward</i></span>
                    <ul style={{marginTop: '25px'}}>
                      <li><div id="dot"/>Modelación y cálculo de transientes hidráulico</li>
                      <li><div id="dot"/>Cálculo de desagues</li>
                      <li><div id="dot"/>Modelación de cauces</li>
                      <li><div id="dot"/>Analisis de impulsiones</li>
                      <li><div id="dot"/>Estudios con herramienta HEC-RAS 2D y 3D</li>
                    </ul>
                  </div>
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    );

    const mobileVersion = (
      <div className="row">
        <img alt="vigas" src={vigas} style={{position: 'absolute', opacity: '0.2', width: '100%'}}/>
        <div className="col s12" style={{marginTop: '45px', marginBottom: '37px'}}>

          <div className="col s12 center-align" style={{marginTop: '25px', position: 'relative' }}>
            <h4 style={{color: 'white'}}><b>SERVICIOS</b></h4>
            <div className="row center-align">
              <div className="col s8 offset-s2" style={{position: 'relative'}}>
                <div className="divider" style={{backgroundColor: '#ff6600'}}/>
              </div>
            </div>
            <p className="flow-text" style={{marginLeft: '40px', marginRight: '40px', color: 'white'}}>
              Ofrecemos una Ingeniería Multidisciplinaria, enfocada en las siguientes especialidades
            </p>
          </div>
          <div className="col s12">
            <div className="card hoverable" style={{width: '100%'}}>
              <div className="card-image waves-effect waves-block waves-light">
                <img alt="test" className="activator" src={obraAs}/>
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">OBRAS SANITARIAS - A.P<i className="material-icons right">arrow_upward</i></span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">OBRAS SANITARIAS - A.P<i className="material-icons right">arrow_downward</i></span>
                <ul style={{marginTop: '25px'}}>
                  <li><div id="dot"/>Planes de Desarrollo</li>
                  <li><div id="dot"/>Conducción e impulsión de fluidos</li>
                  <li><div id="dot"/>Diseño y cálculo de redes de distribución</li>
                  <li><div id="dot"/>Sistemas permanentes y transientes</li>
                  <li><div id="dot"/>Estaciones Elevadoras de Agua Potable</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col s12">
            <div className="card hoverable" style={{width: '100%'}}>
              <div className="card-image waves-effect waves-block waves-light">
                <img alt="test" className="activator" src={hidro}/>
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">HIDROLOGÍA<i className="material-icons right">arrow_upward</i></span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">HIDROLOGÍA<i className="material-icons right">arrow_downward</i></span>
                <ul style={{marginTop: '25px'}}>
                  <li><div id="dot"/>Explotación y cuantificación de recursos de agua subterránea</li>
                  <li><div id="dot"/>Cuantificación de las demandas</li>
                  <li><div id="dot"/>Balances hídricos</li>
                  <li><div id="dot"/>Proyectos de Regadío</li>
                  <li><div id="dot"/>Sistemas de drenaje</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col s12">
            <div className="card hoverable" style={{width: '100%'}}>
              <div className="card-image waves-effect waves-block waves-light">
                <img alt="test" className="activator" src={ins}/>
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">INSPECCIÓN DE OBRAS<i className="material-icons right">arrow_upward</i></span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">INSPECCIÓN DE OBRAS<i className="material-icons right">arrow_downward</i></span>
                <ul style={{marginTop: '25px'}}>
                  <li><div id="dot"/>Inspección y Control de Obras</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col s12">
            <div className="card hoverable" style={{width: '100%'}}>
              <div className="card-image waves-effect waves-block waves-light">
                <img alt="test" className="activator" src={obraAs}/>
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">OBRAS SANITARIAS <i className="material-icons right">arrow_upward</i></span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">OBRAS SANITARIAS - A.S<i className="material-icons right">arrow_downward</i></span>
                <ul style={{marginTop: '25px'}}>
                  <li><div id="dot"/>Planes de Desarrollo</li>
                  <li><div id="dot"/>Diseño de P.T.A.S</li>
                  <li><div id="dot"/>Diseño de Estaciones Elevadoras</li>
                  <li><div id="dot"/>Diseño y cálculo de redes de alcantarillado</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col s12">
            <div className="card hoverable" style={{width: '100%'}}>
              <div className="card-image waves-effect waves-block waves-light">
                <img alt="test" className="activator" src={urba}/>
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">URBANIZACIÓN<i className="material-icons right">arrow_upward</i></span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">URBANIZACIÓN<i className="material-icons right">arrow_downward</i></span>
                <ul style={{marginTop: '25px'}}>
                  <li><div id="dot"/>Planes diseño de arquitectura, estructural, pavimentos</li>
                  <li><div id="dot"/>Evacuación de aguas lluvias, agua potable, alcantarillado</li>
                  <li><div id="dot"/>Diseño de Estaciones Elevadoras</li>
                  <li><div id="dot"/>Obras eléctricas e instalaciones domiciliarias</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col s12">
            <div className="card hoverable" style={{width: '100%'}}>
              <div className="card-image waves-effect waves-block waves-light">
                <img alt="test" className="activator" src={mode}/>
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">MODELACIÓN HIDRÁULICA<i className="material-icons right">arrow_upward</i></span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">MODELACIÓN HIDRÁULICA<i className="material-icons right">arrow_downward</i></span>
                <ul style={{marginTop: '25px'}}>
                  <li><div id="dot"/>Modelación y cálculo de transientes hidráulico</li>
                  <li><div id="dot"/>Cálculo de desagues</li>
                  <li><div id="dot"/>Modelación de cauces</li>
                  <li><div id="dot"/>Analisis de impulsiones</li>
                  <li><div id="dot"/>Estudios con herramienta HEC-RAS 2D y 3D</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    return(
      <div>
        <Default>{desktopVersion}</Default>
        <Mobile>{mobileVersion}</Mobile>
      </div>
    );
  }
};

export default connect(null)(Servicios);
