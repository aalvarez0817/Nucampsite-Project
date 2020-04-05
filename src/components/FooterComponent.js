import React from 'react';

function Footer(props) {
    return (
        <footer className="site-footer">
            
                <div className="row" style={{ backgroundColor: "darkred" }}>

                    <div className="col-12 pt-5 pb-2">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a>
                    </div>
                    <br />
                    <br />
                
                    <div className="col pb-3" >
                        <a role="button" class="btn btn-link text-white"href="tel:+12065551234"><i class="fa fa-phone"></i> 1-888-777-5544</a><br />
                        <a role="button" class="btn btn-link text-white" href="mailto:contactus@royalschack.com"><i class="fa fa-envelope-o"></i> contactus@royalshack.com</a>

                    </div>
               
           </div>

        </footer>

    );
}

export default Footer;


