import Image from "next/image";
import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
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
            {/* <ul className={`${styles.menuList}`}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/platform">Platform</Link></li>
                <li><Link href="/solutions" className={`${styles.active}`}>Solutions</Link></li>
                <li><Link href="/industries">Industries</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul> */}
            <Link href="#scheduling" className={`${styles.btnDemo}`}><span>Request Demo</span></Link>
        </div>
    </header>
  );
}