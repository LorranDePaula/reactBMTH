"use client";

import { useRouter } from 'next/navigation';
import styles from '@/components/header/header.module.css';
import Link from 'next/link';

export default function Header() {
    const router = useRouter();
    const pathname = router.pathname;

    const headerClass = pathname === '/' ? styles.headerHome : pathname === '/live' ? styles.headerLive : styles.header;

    console.log('Current path:', pathname);  
    console.log('Header class:', headerClass); 

    return (
        <header>
            <nav>
                <ul className={headerClass}>
                    <li><Link href="/">HOME</Link></li>
                    <li><Link href="/live">L1VE</Link></li>
                    <li><Link href="/videos">VIDEO5</Link></li>
                    <li><Link href="/music">MU5IC</Link></li>
                    <li><Link href="/update">UPDAT3</Link></li>
                    <li><Link href="/">M3RCH</Link></li>
                    <li><Link href="/">STORE</Link></li>
                </ul>
            </nav>
        </header>
    );
}


