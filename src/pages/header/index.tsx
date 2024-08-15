import React, {useState} from 'react';
import Image from "next/image";
import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const openMenu = () => { setToggleMenu(true); }
    const closeMenu = () => { setToggleMenu(false); }
  return (
    <header className={`${styles.header}`}>
        <div className={`${styles.logo}`}>
            <Link href="/">
                <Image
                    src="/img/shodatLogo.svg"
                    alt="shodat-logo"
                    height={28}
                    width={164}
                    className={`${styles.logoImage}`}
                />
            </Link>
        </div>
        <div className={`${styles.menu}`}>
            <ul className={`${styles.menuList}`}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/platform">Platform</Link></li>
                <li><Link href="/solutions" className={`${styles.active}`}>Solutions</Link></li>
                <li><Link href="/industries">Industries</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
            <Link href="#scheduling" className={`${styles.btnDemo}`}><span>Request Demo</span></Link>
        </div>
        <div className={`${styles.mobileMenu}`}>
            <button 
                className={`${styles.openButton}`}
                onClick={openMenu}
            >
                <Image
                    src="/img/menu_burger_white.svg"
                    alt="shodat-logo"
                    height={35}
                    width={35}
                />
            </button>
            {
                toggleMenu && 
                <div className={`${styles.menuWrap}`}>
                    <button 
                        className={`${styles.closeButton}`}
                        onClick={closeMenu}
                        >
                        <Image
                            src="/img/cross_white.svg"
                            alt="shodat-logo"
                            height={35}
                            width={35}
                        />
                    </button>
                <ul className={`${styles.menuList}`}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/platform">Platform</Link></li>
                    <li><Link href="/solutions" className={`${styles.active}`}>Solutions</Link></li>
                    <li><Link href="/industries">Industries</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul>
                <Link href="#scheduling" className={`${styles.btnDemo}`}><span>Request Demo</span></Link>
                </div>
            }
        </div>
    </header>
  );
}