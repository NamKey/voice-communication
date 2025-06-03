import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './NavLink.css';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
    const pathname = usePathname();
    const isActive = pathname === href;
  
    return (
        <div className={isActive ? 'navLinkactive' : 'navLink'}>
            <Link href={href}>
                {children}
            </Link>
        </div>
    );
  };
  
  export default NavLink;