'use client';
import Link from "next/link";
import { useState } from "react";
import styles from './Navbar.module.css';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
        <Link href="/">
        <span>Your Logo</span>
        </Link>
        </div>
        <div className={styles.menuIcon} onClick={toggleMenu}>
            {/* For hamburger menu icon */}
            <div></div>
        <div></div>
        <div></div>
        </div>
        <div className={`${styles.navLinks} ${isOpen? styles.active: ''}`}>
            <Link href="/destinations" onClick={()=>setIsOpen(false)}>Destinations</Link>
            <Link href="/destinations" onClick={()=>setIsOpen(false)}>Articles</Link>
            <Link href="/destinations" onClick={()=>setIsOpen(false)}>Events</Link>
            <Link href="/destinations" onClick={()=>setIsOpen(false)}>Plan Your Trip</Link>
            <Link href="/destinations" onClick={()=>setIsOpen(false)}>Myanmar Cultures</Link>
        </div>
    </nav>
  )
}

export default Navbar