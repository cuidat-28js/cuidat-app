import Image from "next/image";
import React from "react";

function Benefits() {
    return(
        <React.Fragment>
            <div 
            className="componentLanding " 
            width={298}
            height={133} >
                <Image src="/botiquin-icon.svg"/>
                <p>Guarda tu informacion medica importante para no perderla de vista</p>
            </div>
            <div 
            className="componentLanding " 
            width={298}
            height={133} >
                <Image src="/recete-icon.svg"/>
                <p>Manten seguimiento de tus tratamientos y citas medicas</p>
            </div>
            <div 
            className="componentLanding " 
            width={298}
            height={133} >
                <Image src="/cruz-icon.svg"/>
                <p>Mejora la atencion de tu salud por tu cuenta sin necesidad de terceros</p>
            </div>
        </React.Fragment>
    )
}

export default Benefits