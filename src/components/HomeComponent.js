import React from 'react';



function Home() {
    return (
        <React.Fragment>
            <div className="jumbotron jumbotronFluid mb-0" style={{backgroundImage:"url(../images/The-Tap.jpg)", backgroundSize: "cover", backgroundRepeat:"no-repeat", height:"600px"}}>
          
            <div className="container">
                <div className="col">
                    <div className="row">
                        <h1 className="welcome-text"> THE ROYAL SHACK</h1>
                        <p className="welcome-message">
                            DRINK GOOD BEER WITH GOOD FRIENDS.
                        </p>
                    </div>
                </div>
            </div>
            </div>
        <div style={{ backgroundColor: "darkred" }}>
            <div className="row" >
                <div className="col  pt-3 pb-2 text-white">
                    <h3>ENJOY GOURMET BURGERS AND MORE WITH OUR FINE CRAFT BEERS.</h3>
                </div>
            </div>
        </div>

        <div className="pt-5 pb-2"  style={{ backgroundColor: "black" }}>
            <div className="row text-white">
                <div className="col-lg-4 center-white-div">
                    <img className="home-img" src="/images/Drinks.jpg" />
                    <h3>DRINKS</h3>
                </div>
                <div className="col-lg-4 center-white-div">
                    <img className="home-img" id="menu-burgers" src="/images/Burgers.jpg" />
                    <h3>MENU</h3>
                </div>
                <div class="col-lg-4 center-white-div">
                    <img className="home-img" src="images/band-playing2.jpg" />
                    <h3>EVENTS</h3>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
}

export default Home;
