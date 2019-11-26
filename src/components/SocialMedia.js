import React from 'react';

function SocialMedia() {
    return (
        <a className="socialMedia" href="https://www.facebook.com/marcin.gordziejewski.9?fref=hovercard&hc_location=chat">
            <img
                src="https://image.flaticon.com/icons/svg/124/124010.svg"
                width="48"
                height="48"
                style={{ backgroundColor: '#ffffff' }} />
            <div className="socialMediaText">
                Zajrzyj na mój profil ;)
        </div>
        </a>
    );
};

export default SocialMedia;