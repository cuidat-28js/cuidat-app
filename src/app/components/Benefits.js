import Image from "next/image";
import React from "react";

function Benefits() {
    return(
        <React.Fragment>
        <div className="w-80" >
            <div 
            className="componentLanding " 
            width={298}
            height={133} >
                <Image src="/botiquin-icon.svg" 
                width={100}
                height={100}/>
                <p>Guarda tu informacion medica importante para no perderla de vista</p>
            </div>
            <div 
            className="componentLanding " 
            width={298}
            height={133} >
                <Image src="/recete-icon.svg"
                width={100}
                height={100}/>
                <p>Manten seguimiento de tus tratamientos y citas medicas</p>
            </div>
            <div 
            className="componentLanding " 
            width={298}
            height={133} >
                <Image src="/cruz-icon.svg" 
                width={100}
                height={100}/>
                <p>Mejora la atencion de tu salud por tu cuenta sin necesidad de terceros</p>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Benefits