"use client"
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    function hideMenu() {
        setIsMenuVisible(false);
    }
    function showMenu() {
        setIsMenuVisible(true);
    }
    return (
        <nav>
            <Link href="/" className="logo">Xplore
                <i className="fab fa-staylinked"></i>kill
            </Link>
            <div className="nav-links" id="navLinks" style={{ right: isMenuVisible ? '0' : '-200px' }}>
                <i className="fa fa-times" onClick={hideMenu}></i>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/courses">Course</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            <i className="fa fa-bars" onClick={showMenu}></i>
        </nav>

    )
}
