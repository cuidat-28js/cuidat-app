import Image from "next/image"
import Link from "next/link"

function Footer() {
    return(
        <div className="section-footer">
            <div className="text-center py-4" >
                <Link>
                    <Image src="/logo-lg.svg"></Image>
                </Link>
                <p>VitaliApp 2024 | Todos los derechos reservados</p>
            </div>
        </div>
    )
}

export default Footer;