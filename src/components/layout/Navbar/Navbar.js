
// 'use client';
// import Link from "next/link";
// import { useState, useRef, useEffect } from "react";
// import styles from './Navbar.module.css';
// import  navItems  from '../../../data/navigation'; 
// import Image from "next/image"; 

// const Navbar = () => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [openDropdownKey, setOpenDropdownKey] = useState(null); 
//     const navRef = useRef(null); 
//     const [isScrolled, setIsScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 50) {
//                 setIsScrolled(true);
//             } else {
//                 setIsScrolled(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     // For Mobile View
//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(prev => !prev);
        
//         if (!isMobileMenuOpen || isMobileMenuOpen) { // This condition can be simplified to just setOpenDropdownKey(null) if menu is closing
//             setOpenDropdownKey(null);
//         }
//         setOpenDropdownKey(null); // Always reset dropdowns when toggling the mobile menu
//     };

//     const handleMobileDropdownToggle = (key, event) => {
//          event.stopPropagation(); 
//         setOpenDropdownKey(prevKey => (prevKey === key ? null : key));
//     };

//     const closeAllMenus = () => {
//         setIsMobileMenuOpen(false);
//         setOpenDropdownKey(null);
//     };

//     // Effect to close mobile menu when clicking outside of it
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (navRef.current && !navRef.current.contains(event.target)) {
//                 if (isMobileMenuOpen) { 
//                    closeAllMenus();
//                 }
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         // Clean Up Function for mousedown event
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [isMobileMenuOpen, navRef]); 

//   return (
//     <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} bg-gray-800`} ref={navRef}>
//         <div className={styles.logo}>
//             <Link href="/" onClick={closeAllMenus}>
            
//                 <Image 
//                   src="/logo.png" 
//                   alt="MOHT Logo" 
//                   width={60} 
//                   height={20} 
//                   priority
//                 />
//             </Link>
//         </div>
//         <div className={styles.menuIcon} onClick={toggleMobileMenu} aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}>
//             <div className={`${styles.menuIconBar} ${isMobileMenuOpen ? styles.bar1Open : ''}`}></div>
//             <div className={`${styles.menuIconBar} ${isMobileMenuOpen ? styles.bar2Open : ''}`}></div>
//             <div className={`${styles.menuIconBar} ${isMobileMenuOpen ? styles.bar3Open : ''}`}></div>
//         </div>
//         <div className={`${styles.navLinksContainer} ${isMobileMenuOpen ? styles.active : ''}`}>
//             {navItems.map((item) => (
//                 <div
//                     key={item.id}
//                     className={`${styles.navItem} ${item.dropdown ? styles.hasDropdown : ''}`}
//                 >
//                     <div className={styles.navItemContent}>
//                         <Link
//                             href={item.href}
//                             className={styles.navLink}
//                             onClick={(e) => {
//                                 if (isMobileMenuOpen && item.dropdown) {
                                    
//                                     e.preventDefault(); 
//                                     handleMobileDropdownToggle(item.id, e);
                                    
//                                 } else if (isMobileMenuOpen && !item.dropdown) {
                                    
//                                     closeAllMenus();
//                                 }
                               
//                             }}
//                         >
//                             {item.label}
//                         </Link>
//                         {item.dropdown && (
//                             <button
//                                 className={styles.dropdownToggleButton}
//                                 onClick={(e) => handleMobileDropdownToggle(item.id, e)}
//                                 aria-expanded={openDropdownKey === item.id && isMobileMenuOpen}
//                                 aria-label={`Toggle ${item.label} submenu`}
//                             >
//                                 <span className={`${styles.dropdownArrow} ${openDropdownKey === item.id && isMobileMenuOpen ? styles.open : ''}`}>▼</span>
//                             </button>
//                         )}
//                     </div>

//                     {item.dropdown && (
//                         <div
//                             className={`${styles.dropdownMenu} ${openDropdownKey === item.id && isMobileMenuOpen ? styles.mobileActive : ''}`}
//                         >
//                             {item.dropdown.map((subItem) => (
//                                 <Link
//                                     key={subItem.href}
//                                     href={subItem.href}
//                                     className={styles.dropdownLink}
//                                     onClick={closeAllMenus} 
//                                 >
//                                     {subItem.label}
//                                 </Link>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             ))}
//         </div>
//     </nav>
//   );
// };

// export default Navbar;

//*** with updated NavItems ***/
'use client';
import React from 'react'; 
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import styles from './Navbar.module.css';
import navItems from '../../../data/navigation';
import Image from "next/image";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdownKey, setOpenDropdownKey] = useState(null);
    const navRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
        setOpenDropdownKey(null); // Always reset dropdowns when toggling the mobile menu
    };

    const handleMobileDropdownToggle = (key, event) => {
        event.stopPropagation();
        setOpenDropdownKey(prevKey => (prevKey === key ? null : key));
    };

    const closeAllMenus = () => {
        setIsMobileMenuOpen(false);
        setOpenDropdownKey(null);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                if (isMobileMenuOpen) {
                    closeAllMenus();
                }
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} bg-gray-800`} ref={navRef}>
            <div className={styles.logo}>
                <Link href="/" onClick={closeAllMenus}>
                    <Image
                        src="/logo.png"
                        alt="MOHT Logo"
                        width={60}
                        height={20}
                        priority
                    />
                </Link>
            </div>
            <div className={styles.menuIcon} onClick={toggleMobileMenu} aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}>
                <div className={`${styles.menuIconBar} ${isMobileMenuOpen ? styles.bar1Open : ''}`}></div>
                <div className={`${styles.menuIconBar} ${isMobileMenuOpen ? styles.bar2Open : ''}`}></div>
                <div className={`${styles.menuIconBar} ${isMobileMenuOpen ? styles.bar3Open : ''}`}></div>
            </div>
            <div className={`${styles.navLinksContainer} ${isMobileMenuOpen ? styles.active : ''}`}>
                {navItems.map((item) => (
                    <div
                        key={item.id}
                        className={`${styles.navItem} ${item.dropdown ? styles.hasDropdown : ''}`}
                    >
                        <div className={styles.navItemContent}>
                            <Link
                                href={item.href}
                                className={styles.navLink}
                                onClick={(e) => {
                                    if (isMobileMenuOpen && item.dropdown) {
                                        e.preventDefault();
                                        handleMobileDropdownToggle(item.id, e);
                                    } else if (isMobileMenuOpen && !item.dropdown) {
                                        closeAllMenus();
                                    }
                                }}
                            >
                                {item.label}
                            </Link>
                            {item.dropdown && (
                                <button
                                    className={styles.dropdownToggleButton}
                                    onClick={(e) => handleMobileDropdownToggle(item.id, e)}
                                    aria-expanded={openDropdownKey === item.id && isMobileMenuOpen}
                                    aria-label={`Toggle ${item.label} submenu`}
                                >
                                    <span className={`${styles.dropdownArrow} ${openDropdownKey === item.id && isMobileMenuOpen ? styles.open : ''}`}>▼</span>
                                </button>
                            )}
                        </div>

                        {item.dropdown && (
                            <DropdownMenu
                                isOpen={openDropdownKey === item.id && isMobileMenuOpen}
                                subItems={item.dropdown}
                                closeAllMenus={closeAllMenus}
                                styles={styles}
                            />
                        )}
                    </div>
                ))}
            </div>
        </nav>
    );
};

const DropdownMenu = ({ isOpen, subItems, closeAllMenus, styles }) => {
    const [transportationOpen, setTransportationOpen] = useState(false);

    const handleTransportationHover = (isHovered) => {
        setTransportationOpen(isHovered);
    };

    return (
        <div className={`${styles.dropdownMenu} ${isOpen ? styles.mobileActive : ''}`}>
            {subItems.map((subItem) => (
                <React.Fragment key={subItem.label}>
                    <div
                        onMouseEnter={() => subItem.label === "Transportation" && handleTransportationHover(true)}
                        onMouseLeave={() => subItem.label === "Transportation" && handleTransportationHover(false)}
                        className={styles.dropdownItemContainer}
                    >
                        <Link
                            href={subItem.href}
                            className={styles.dropdownLink}
                            onClick={closeAllMenus}
                        >
                            {subItem.label}
                        </Link>
                        {subItem.label === "Transportation" && (
                            <div className={`${styles.nestedDropdown} ${transportationOpen ? styles.showNested : ''}`}>
                                {subItem.dropdown &&
                                    subItem.dropdown.map((nestedItem) => (
                                        <Link
                                            key={nestedItem.label}
                                            href={nestedItem.href}
                                            className={styles.dropdownLink}
                                            onClick={closeAllMenus}
                                        >
                                            {nestedItem.label}
                                        </Link>
                                    ))}
                            </div>
                        )}
                        {subItem.dropdown && subItem.label !== "Transportation" && (
                            <div className={styles.nestedDropdown}>
                                {subItem.dropdown.map((nestedItem) => (
                                    <Link
                                        key={nestedItem.label}
                                        href={nestedItem.href}
                                        className={styles.dropdownLink}
                                        onClick={closeAllMenus}
                                    >
                                        {nestedItem.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};

export default Navbar;
