import Image from "next/image"
import Link from "next/link"

function Footer() {
    return(
        <footer class="footer footer-center p-3 bg-primary text-primary-content">
            <aside>
                <Image src="/logo-lg.svg" width="100" height="100" viewBox="0 0 24 24"/>
                <p>Copyright © 2024 - All right reserved</p>
            </aside>
        </footer>
    )
}

export default Footer;