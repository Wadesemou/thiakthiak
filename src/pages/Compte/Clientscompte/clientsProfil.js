import { render } from '@testing-library/react';
import RcQueueAnim from 'rc-queue-anim';
import React, {useState} from 'react';
import Maps from '../../maps/map'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import web from '../../../medias/images/web.png';
import './clientsProfil.css';
// import {GoogleApiWrapper} from 'google-maps-react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
  // const show=true;

function ClientProfil(){
  
  return (
    <div >
      <ClientOption/>
    </div>
  );
}

function ClientOption(){
  return (
    <div id ="">
      <Menu/>
      
    </div>
  );
}

function Menu(){ 
  
  const [home, setStatehome] = useState({show:false});
  function showhome(){
    setState2 ({show:false});
    setState3 ({show:false});
    setState4 ({show:false});
    setState5 ({show:false});
    setState6 ({show:false});
    setState7 ({show:false});
    setState8 ({show:false});
    setState1 ({show:false});
    setStatehome({show:true})
  }
  const [state1, setState1 ] = useState({show:false});
  function boutonIcon1(){
    setState2 ({show:false});
    setState3 ({show:false});
    setState4 ({show:false});
    setState5 ({show:false});
    setState6 ({show:false});
    setState7 ({show:false});
    setState8 ({show:false});
    setState1 ({show:true})
  }
  const [state2, setState2] = useState({show:false});
  function boutonIcon2(){
    setState1 ({show:false});
    setState3 ({show:false});
    setState4 ({show:false});
    setState5 ({show:false});
    setState6 ({show:false});
    setState7 ({show:false});
    setState8 ({show:false});
    setState2 ({show:true})
  }
  const [state3, setState3] = useState({show:false});
  function boutonIcon3(){
    setState1 ({show:false});
    setState2 ({show:false});
    setState4 ({show:false});
    setState5 ({show:false});
    setState6 ({show:false});
    setState7 ({show:false});
    setState8 ({show:false});
    setState3 ({show:true})
  }
  const [state4, setState4] = useState({show:false});
  function boutonIcon4(){
    
    setState3 ({show:false});
    setState1 ({show:false});
    setState2 ({show:false});
    setState5 ({show:false});
    setState6 ({show:false});
    setState7 ({show:false});
    setState8 ({show:false});
    setState4 ({show:true})
  
  }
  const [state5, setState5] = useState({show:false});
  function boutonIcon5(){
    
    setState2 ({show:false});
    setState3 ({show:false});
    setState4 ({show:false});
    setState1 ({show:false});
    setState6 ({show:false});
    setState7 ({show:false});
    setState8 ({show:false});
    setState5 ({show:true})
  
  }
  const [state6, setState6] = useState({show:false});
  function boutonIcon6(){
    
    setState4 ({show:false});
    setState3 ({show:false});
    setState1 ({show:false});
    setState5 ({show:false});
    setState2 ({show:false});
    setState7 ({show:false});
    setState8 ({show:false});
    setState6 ({show:true})
  
  }
  const [state7, setState7] = useState({show:false});
  function boutonIcon7(){
    
    setState6 ({show:false});
    setState3 ({show:false});
    setState4 ({show:false});
    setState5 ({show:false});
    setState1 ({show:false});
    setState8 ({show:false});
    setState2 ({show:false});
    setState7 ({show:true})
  
  }
  const [state8, setState8] = useState({show:false});
  function boutonIcon8(){
    
    setState7 ({show:false});
    setState3 ({show:false});
    setState4 ({show:false});
    setState5 ({show:false});
    setState6 ({show:false});
    setState1 ({show:false});
    setState2 ({show:false});
    setState8 ({show:true})
  
  }
  
  const [val,setval] = useState({ val : "menu"});

  // function seted(){
  //     if (val.val=="menu"){
  //       setval({ 
  //       val:"close"
  //       })
  //     }
  //     else{
  //       setval({ 
  //         val:"menu"
  //         })
  //     }
  //    }
  
 
  return(
    <div id="fix">
      <div id="head">
        <div id="sequance">
          <div id="option">
           <div id="mine">
            <div  id="avatar" ><img src={web}/></div>
            <p id="ICT">Semou </p>
            </div>
          </div>
          <div id="menutop">
            <span id="icon" className="material-icons"  onClick={()=>{showhome()}}>home</span>
            <span id="icon" className="material-icons">notifications</span>
            <span id="icon" className="material-icons">mark_chat_unread</span>
          </div>
          {/* <div onClick={ ()=>{seted()} } className="material-icons">{val.val}</div> */}
          <div id="recherche">
            <input type="text"  />
            <span id="iconsearch" className="material-icons">search</span>
          </div> 
        </div>
      </div>
      <div id="conteneur"> 
        <div id="left_hand">
          <div id="bouton">
            {/* <div id="boutonIcon" onClick={()=>{boutonIcon1()}}>
              <span className="material-icons">add_shopping_cart</span><p>Shopping</p>
            </div>
            <div id="boutonIcon" onClick={()=>{boutonIcon2()}}>
              <span className="material-icons">bookmark</span><p>Bookmark</p>
            </div> */}
            <div id="boutonIcon" onClick={() =>{boutonIcon3()}}>
              <span className="material-icons">location_searching</span><p>Deliver</p>
              {/* API_KEY=AIzaSyD4gubYMnGgmeItMZAiSwjosI1MqqcW1zU */}
            </div>
            {/* <div id="boutonIcon" onClick={()=>{boutonIcon4()}}>
              <span className="material-icons">favorite_border</span><p>Favorites</p>
            </div> */}
            <div id="boutonIcon" onClick={() =>{boutonIcon5()} }>
              <span id="setting" className="material-icons">group_add</span><p>Friends</p>
            </div>
            <div id="boutonIcon" onClick={() =>{boutonIcon6()}}>
              <span id="setting" className="material-icons">error</span> <p>Infos</p>
            </div>
            <div id="boutonIcon" onClick={() =>{boutonIcon7()}}>            
              <span id="setting" className="material-icons">help</span> <p>Help</p>
            </div>
            {/* <div id="boutonIcon" onClick={()=>{boutonIcon8()}}>        
              <span className="material-icons">settings</span><p>shopping</p>
            </div> */}
          </div>
        </div>
        <div id="page" key="b">
        <RcQueueAnim   type="scaleBig" ease="easeInCubic" delay ={0.2} >
              {home.show ?[ 
                <div id="page8 sittiing">
                  <div>
                    <h1>home</h1>
                    <p></p>
                  </div>
                </div>
              ]:null}
          </RcQueueAnim>
          <RcQueueAnim   type="scaleBig" ease="easeInCubic" delay ={0.2} >
            {state1.show ? [
              <p id="title" key="a">welcom to your shopping page</p>,
              <div id="prod" key="b">
                <div id="lineconteneur"> 
                  <div id="img"><img src={web}/></div>
                  <div id="imgtext">plat thiebou dieune</div>
                  <div id="imgoption">
                    <span className="material-icons">favorite_border</span>
                    <span className="material-icons">thumb_down</span>
                    <span className="material-icons">thumb_up</span>
                    <span className="material-icons">bookmark_add</span>
                    <span className="material-icons">shopping_cart</span>
                  </div>
                </div>
                <div id="lineconteneur"> 
                  <div id="img"><img src={web}/></div>
                  <div id="imgoption">
                    <span className="material-icons">favorite_border</span>
                    <span className="material-icons">thumb_down</span>
                    <span className="material-icons">thumb_up</span>
                    <span className="material-icons">bookmark_add</span>
                    <span className="material-icons">shopping_cart</span>
                  </div>
                </div>
                
              </div>
            ]:null
            }  
          </RcQueueAnim >    
          <RcQueueAnim id="#page2"  type="scaleBig" ease="easeInCubic" delay ={0.2} >
              {state2.show ?[ 
                <div>
                  <p id="title" key="a">welcom to your BookMark</p>,
                  <p> <h1 >Note</h1>
                    Here is what you have to know about this your Bookmark, this option will permitte your to 
                    track a task  that you want to do in the future for exemple track a pruduact that you love but your are not sure 
                    to buy right now, programe a delivery for a moment later etc... 
                  </p>
                  <div id="optioneldiv">
                    <p>Your bookmark does not contain a task! </p>
                    <Link herf="#" className="popup pour demander la programmer un achat ou une livraison">
                      let's add some task ?
                    </Link>
                  </div>
                  <div>
                    <ul>
                  <p>livraison</p>
                  <li> 
                    <div id ="leftBloc" className="all imagesProducts"> 
                        {/* for (let i = 0; i < 4 ; i++) {
                          <div id ="trackedProducts">
                              <Link href="#"><img src={web} alt="Track1"/></Link>
                          </div>  
                        } */}         
                      </div>
                    </li>
                  <p>shopping</p>
                  <li> 
                    <div id ="leftBloc" className="all imagesProducts"> 
                        {/* for (let i = 0; i < 4 ; i++) {
                          <div id ="trackedProducts">
                              <Link href="#"><img src={web} alt="Track1"/></Link>
                          </div>  
                        } */}         
                      </div>
                    </li>
                </ul>
                  </div>
                  <div id="render task or list of task to do">
                      <div id="categorie Prod"> 
                        <img/>
                        <span>description de l'image du produit a acheter</span>
                        <button>lien pour valider ou non le produit avec affichage de popUp</button>
                        <button> ou non le produit avec affichage de popUp</button>
                      </div>
                      <div id="popup confirm task"> 
                        <label> payment card</label>
                        <input/>
                        <button>valider la tache </button>
                        <button>annuler</button>
                      </div>
                      <div id="popup de validation de la tache">
                        <p>valider avec succé le produit est en livraison </p>
                        <button>voir la livraison </button>
                        <button>voir lle profil du vendeur </button>
                      </div>
                      <div id="popup d'annulation de la tache">
                        <p>confirmation annuler avec succé! Voulez-vous conserver le, (les) produit(s)</p>
                        <button>OUI </button>
                        <button>NON </button> 
                      </div>  
                  </div>
                  <div id="render full a delivery task">
                      <div id="categorie Prod"> 
                        <span>scren de la carte du point de départ vers l'arrivè</span>
                        <ul>
                          <li>NOM</li>
                          <li>Prenom</li>
                          <li>Phone</li>
                          <li>address</li>
                          <li>lieu de depart</li>
                          <li>lieu d'arriver</li>
                          <li>poid du produit </li>
                          <li>type de vehicule</li>
                          <li>description à ajouter</li>
                        </ul>
                        <button>Confirmer la livraison avec affichage de popUp</button>
                        <button>ou non la livraison avec affichage de popUp</button>
                      </div>
                      <div id="popup confirm delivery task"> 
                        <label> payment card</label>
                        <input/>
                        <button>valider la livraison </button>
                        <button>annuler la livraison</button>
                      </div>
                      <div id="popup de validation de la tache de livraison">
                        <p>valider avec succé, livraison en cour!</p>
                        <Link>voir la livraison </Link>
                      </div>
                      <div id="popup d'annulation de la tache de livraison">
                        <p>confirmation annuler avec succé! Voulez-vous conserver la, tache</p>
                        <button>OUI </button>
                        <button>NON </button> 
                      </div>  
                  </div>
                </div> 
              ]:null}
          </RcQueueAnim >
          <RcQueueAnim   type="scaleBig" ease="easeInCubic" delay ={0.2} >
              {state3.show ? [
                <Maps/>
              ]:null}      
          </RcQueueAnim >
          <RcQueueAnim   type="scaleBig" ease="easeInCubic" delay ={0.2} >
              {state4.show ?[ 
                <div id="page favoris">
                  <div id="fovorites deliver">
                    <h1 id="page3"> vos favoris parmis les livreurs </h1>
                    <img/>
                    <p>description du livreur </p>
                    <p>vos commentaire et note sur lui</p>
                  </div>
                  <div id="favoriteprod">
                  <h1 id="page3"> vos favoris parmis les livreurs </h1>
                  <img/>
                    <p>description du prdo </p>
                    <p>vos commentaire et note sur le prod</p>
                    <p>page du vendeurs</p>
                  </div>
                </div>
              ]:null}
          </RcQueueAnim>
          <RcQueueAnim   type="scaleBig" ease="easeInCubic" delay ={0.2} >
              {state5.show ?[ 
                <div id="page5 invitation">
                  <div>
                    <h1>Mode d'invitation </h1>
                    <button>patager sur un site web</button>
                  </div>
                </div>
              ]:null}
          </RcQueueAnim>
          <RcQueueAnim   type="scaleBig" ease="easeInCubic" delay ={0.2} >
              {state6.show ?[  
                <div id="page6 info">
                  <div>
                    <h1>Notice</h1>
                    <p></p>
                  </div>
                </div>
              ]:null}
          </RcQueueAnim>
          <RcQueueAnim   type="scaleBig" ease="easeInCubic" delay ={0.2} >
              {state7.show ?[
                  <div id="page7 help">
                    <div>
                      <h1>help</h1>
                      <p></p>
                    </div>
                  </div>
              ]:null}
          </RcQueueAnim>
          <RcQueueAnim   type="scaleBig" ease="easeInCubic" delay ={0.2} >
              {state8.show ?[ 
                <div id="page8 sittiing">
                  <div>
                    <h1>setting</h1>
                    <p></p>
                  </div>
                </div>
              ]:null}
          </RcQueueAnim>
        </div>
        {/* <div id="Opmenu">
          <div>
            <h1 id="rightMtitle">menu</h1>
            <div id="prodtype">
              <p>Habillement</p>
              <span id="test" className="material-icons" >add_shopping_cart</span>
            </div>
            <div id="prodtype">
              <p>Restaurant</p>
              <span id="test" className="material-icons" >add_shopping_cart</span>
            </div>
            <div id="prodtype">
              <p>Multimedia</p>
              <span id="test" className="material-icons" >add_shopping_cart</span>
            </div>
            <div id="prodtype">
              <p>Super marche</p>
              <span id="test" className="material-icons" >add_shopping_cart</span>
            </div>
          </div>
            <div >

            </div> 
        </div> 
      */}
      </div>  
    </div>
  );
}

export default ClientProfil;