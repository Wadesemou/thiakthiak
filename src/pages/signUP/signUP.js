import React from 'react';
import   './signUp.css';
// import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


import { Link } from 'react-router-dom';

function SignUP () {
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
              <button id="close">
                &times;
              </button>
            </Link>
          </div>  
            <div id="poptitre">Thiak_thiak </div>
            <form action=''>
              <div className="form" method="GET" action="log.php" style={{display:'flex', flexDirection: 'column',textAlign: 'center',margin: '25px',marginBottom: '5px'}}>
                <label > First Name</label>
                <input id="inpute" name="Fname" type="text" required placeholder="what's your First name"/>
                <label > Last Name</label>
                <input id="inpute" type="text" required placeholder="what's your Last name"/>
                <label > numberPhone</label>
                <input id="inpute" type="text" required placeholder="+221-7X-XXX-XX-XX" />
                <button className="valider">valider</button>
                
              </div>
            </form>
            {/* <div className="actions">
              <Popup
                trigger={<button className="button"> Trigger </button>}
                position="top center"
                nested
              >
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                  magni omnis delectus nemo, maxime molestiae dolorem numquam
                  mollitia, voluptate ea, accusamus excepturi deleniti ratione
                  sapiente! Laudantium, aperiam doloribus. Odit, aut.
                </span>
              </Popup>  
              {/* <button
                className="button"
                onClick={() => {
                  console.log('modal closed ');
                  close();
                }}
              >
                close modal
              </button>
            </div> */}
      </div>
    )}
  </Popup>
        </div>
      );
}
export default SignUP;