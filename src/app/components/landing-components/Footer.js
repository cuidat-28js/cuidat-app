import Image from "next/image"
import Link from "next/link"

function Footer() {
    return(
        <footer class="min-w-80 mt-7 footer footer-center p-3 bg-[#4D3AC9]">
            <aside>
                <button className="btn rounded-full">
                <Image src="/logo-lg.svg" width="100" height="100" viewBox="0 0 24 24"/>
                </button>
                <p className="font-lato-regular text-[#FFFFFF]">Copyright © 2024 - All right reserved</p>
            </aside>
        </footer>
    )
}

export default Footer;