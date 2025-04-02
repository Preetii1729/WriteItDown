import React from "react";

function Footer(){
    var currYear = new Date().getFullYear();
    return (
        <footer>
            <p> 
                Copyright &copy; {currYear}
                {/* <i class="fa-solid fa-copyright"></i> */}
                {/* <FontAwesomeIcon icon="fa-solid fa-copyright" /> */} 
            </p>
        </footer>
    );
}

export default Footer;