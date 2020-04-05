import React from 'react';



function Store() {
    return (
        <React.Fragment>
            <div className="jumbotron jumbotronFluid mb-0" style={{backgroundImage:"url(../images/Gift-Shop-Items.png)", backgroundSize: "cover", backgroundRepeat:"no-repeat", height:"600px"}}>
          
           
            </div>
        <div style={{ backgroundColor: "darkred" }}>
            <div className="row" >
                <div className="col  pt-3 pb-2 text-white">
                    <h3>VISIT OUR ONLINE STORE</h3>
                </div>
            </div>
        </div>

        <div className="pt-5 pb-2"  style={{ backgroundColor: "black" }}>
            <div className="row text-white">
                <div className="col-lg-4 center-white-div">
                    <img className="home-img" src="/images/ShirtsForSale.jpg" />
                    <h3>SHIRTS</h3>
                </div>
                <div className="col-lg-4 center-white-div">
                    <img className="home-img" id="menu-burgers" src="/images/beer-mugs.jpg" />
                    <h3>MUGS</h3>
                </div>
                <div class="col-lg-4 center-white-div">
                    <img className="home-img" src="images/SpecialSale.jpg" />
                    <h3>MORE</h3>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
}

export default Store;
