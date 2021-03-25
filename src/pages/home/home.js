import React from 'react';
import './home.css';
import web from "../../medias/images/web.png";
import resto from "../../medias/images/restaurant.svg";
import habit from "../../medias/images/habit.svg";
import coli from "../../medias/images/coli.svg";
import cam1 from "../../medias/images/cam1.svg";
import cam2 from "../../medias/images/cam2.svg";
import shop from "../../medias/images/shop.svg";
import boutic from "../../medias/images/boutic.svg";




function Home() {    
    return( 
    <div> 
        <div className="progress-container" >
            <div className="progress-bar" id="myBar"></div>
        </div>
        <div id="maintop">
           <div id="top" >
                <div id="carrousel">
                    <img  src={web} alt="image de logo"/>
                </div>
                <fieldset id="blockServices">
                    <legend id="icons"><img src={shop}/></legend>
                    <p>disponible sur le web et le mobile</p>
                    <p>disponible sur le web et le mobile</p>
                    <div>
                        
                    </div>
                </fieldset>
            </div>
            <div id="top" >
                <div id="carrousel">
                    <img  src={web} alt="image de logo"/>
                </div>
                <fieldset id="blockServices">
                    <legend id="icons"><img id="" src={shop}/></legend>
                    <p>disponible sur le web et le mobile</p>
                    <div>
                        <span className="material-icons">directions_bike</span>
                        <span className="material-icons">delivery_dining</span>
                        <span className="material-icons">local_shipping</span>
                    </div>
                </fieldset>
            </div>
            <div id="top" > 
                <div id="carrousel">
                    <img  src={web} alt="image de logo"/>
                </div>
                <fieldset id="blockServices">
                    <legend id="icons"><img id="" src={shop}/></legend>
                    <p>disponible sur le web et le mobile</p>
                    
                </fieldset>
            </div>
            <div id="top" > 
                <div id="carrousel">
                    <img  src={web} alt="image de logo"/>
                </div>
                <fieldset id="blockServices">
                    <legend id="icons"><img id="" src={shop}/></legend>
                    <p>disponible sur le web et le mobile</p>
                    
                </fieldset>
            </div>
            <div id="top" > 
                <div id="carrousel">
                    <img  src={web} alt="image de logo"/>
                </div>
                <fieldset id="blockServices">
                    <legend id="icons"><img id="" src={shop}/></legend>
                    <p>disponible sur le web et le mobile</p>
                    
                </fieldset>
            </div>
            <div id="top" > 
                <div id="carrousel">
                    <img  src={web} alt="image de logo"/>
                </div>
                <fieldset id="blockServices">
                    <legend id="icons"><img id="" src={shop}/></legend>
                    <p>disponible sur le web et le mobile</p>
                    
                </fieldset>
            </div>
            <div id="top" > 
                <div id="carrousel">
                    <img  src={web} alt="image de logo"/>
                </div>
                <fieldset id="blockServices">
                    <legend id="icons"><img id="" src={shop}/></legend>
                    <p>disponible sur le web et le mobile</p>
                    
                </fieldset>
            </div>
            <div id="servicesIcon" >
                <img id="tool" src={shop}/>
                <img id="tool" src={boutic}/>
                <img id="tool" src={resto}/>
                <img id="tool"src={habit}/>
                <img id="tool"src={coli}/>
                <img id="tool"src={cam1}/>
                <img id="tool"src={cam2}/>
            </div>
        </div>
        <Main/>
        <Foot/>
    </div>
    );
}
function Main(){
    return(
        <div id="cor">
            <h1 id="corpsTitle">Services</h1>
            <div id="corServices">
                <div id="money">
                    <div id="imgService">
                        <img  src={web} alt="image de logo"/>
                    </div>
                    <div id="describ">
                        <h1>Ean money</h1>
                        <p></p>
                    </div>
                </div>
                <div id="recieve">
                    <div id="imgService">
                    <img  src={web} alt="image de logo"/>
                    </div>
                    <div id="describ">
                        <h1>Recieve your delivery </h1>
                        <p></p>
                    </div>
                </div>
                <div id="pub">
                    <div id="imgService">
                        <img  src={web} alt="image de logo"/>
                    </div>
                    <div id="describ">
                        <h1> Get pub, being partener</h1>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, doloribus! Facere nam, nemo labore ad aliquam adipisci delectus assumenda commodi asperiores nobis praesentium vel alias possimus, iusto cupiditate libero mollitia? </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
function Foot(){
    return(
    <div>
        <div>
            <h1 id="corpsTitle">Temoignage</h1>
            <div id="money">
                <div id="">
                    <img/>
                    <h1>Ean money</h1>
                    <p></p>
                </div>
            </div>
            <div id="money">
                <div id="">
                    <img/>
                    <h1>Ean money</h1>
                    <p></p>
                </div>
            </div>
            <div id="money">
                <div id="">
                    <img/>
                    <h1>Ean money</h1>
                    <p></p>
                </div>
            </div>
        </div>
        <div>
            <h1 id="corpsTitle">disponibilité</h1>
            <div id="">
                <div id="">
                    <img/>
                    <img/>
                </div>
                <div id="">
                    <h1>Ean money</h1>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
    );                
}

export default Home;


{/* <h1>{title}</h1>
            <div>{JSON.stringify( clients)}</div>
            <div>{clients.map((clients)=>(<li>{clients.id} est {clients.prenom}</li>))}</div>
            <input id ="mail" value={mail} onChange={ (e) => setmail(e.target.value)}/>
            <h1>{mail} </h1>
            <img src={senegal} id></img>
            <div id="top">
                <img id="img_globe" src={monde} alt="image de logo"/>
            </div> */}
            {/* <span className="material-icons">directions_bike</span>
                    <span className="material-icons">directions_bike</span> */}