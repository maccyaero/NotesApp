import React from 'react';
const now = new Date();
const currentYear = now.getFullYear();

function Footer(){
    return(
        <footer>
            <p>
                Copyright © {currentYear}
            </p>
        </footer>
    );
}
export default Footer;