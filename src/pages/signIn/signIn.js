import React from 'react';
import   './signIn.css';
// import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


import { Link } from 'react-router-dom';

function SignIn () {
  const styles = {
    width :'350px',
    backgroundColor: ' #36383a ',
    textAlign : 'center',
    display : 'flex',
    flexDirection: 'column',
    padding: '5px',
    position: 'relative',
    borderRadius: '15px'
  }
  const style = {
    // backgroundColor:'red'

  }
      return(
        <div id="sign">
         
        <Popup open={true} disabled className="popup" contentStyle={styles}  overlayStyle={style}>
         {open => (
        <div  id="modal">  
          <div style={{ backgroundColor: '#21272e',position: 'relative'}}>
            <Link to='/'>
              <button id="close" style={{right: '0px',position: 'absolute'}}>
               &times;
              </button>
            </Link>
          </div>  
            <div id="poptitre">Thiak_thiak </div>
            <form action=''>
              <div className="form" style={{display:'flex', flexDirection: 'column',textAlign: 'center',margin: '25px',marginBottom: '5px'}}>
                <label > login</label>
                <input id="inpute" type="text" required placeholder=" Login"/>
                <label >Password</label>
                <input id="inpute" type="text" required placeholder=" PassWord"/>
                <button className="valider">valider</button>
              </div>
            </form>
            
      </div>
    )}
  </Popup>
        </div>
      );
}
export default SignIn;