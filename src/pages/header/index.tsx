import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import styles from './header.module.css';
import { useRouter } from 'next/router';
import RequestDemoModal from './request-demo';


export default function Header() {
    const router = useRouter()
    const [toggleMenu, setToggleMenu] = useState(false);
    const [stickyClass, setStickyClass] = useState('relative');
    const [modalShow, setModalShow] = useState(false);
    const openMenu = () => { setToggleMenu(true); }
    const closeMenu = () => { setToggleMenu(false); }

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 100 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
        }
    };

    const openModal = () => {
        setModalShow(true);
    }

    return (
        <>
            <header className={`${styles.header} ${stickyClass}`}>
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
                        <li><Link href="/" className={`${router.pathname === '/' ? `${styles.active}` : ''}`}>Home</Link></li>
                        <li><Link href="/platform" className={`${router.pathname === '/platform' ? `${styles.active}` : ''}`}>Platform</Link></li>
                        <li><Link href="/data-engineering" className={`${router.pathname === '/data-engineering' ? `${styles.active}` : ''}`}>Solutions</Link></li>
                    </ul>
                    <button onClick={openModal} className={`${styles.btnDemo}`}><span>Request Demo</span></button>
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
                                <li><Link href="/data-engineering" className={`${styles.active}`}>Solutions</Link></li>
                            </ul>
                            <button onClick={openModal} className={`${styles.btnDemo}`}><span>Request Demo</span></button>
                        </div>
                    }
                </div>
            </header>

            {modalShow && (
                <RequestDemoModal show={modalShow} onHide={() => setModalShow(false)} />
            )}
        </>
    );
}