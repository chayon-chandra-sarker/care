"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const path = usePathname();
    return (
        <div>
            <Link className={`${path == href && "text-[#0B4665]  border-b-2 border-[#0B4665]"} medium text-xl`} href={href}>
                {children}
            </Link>
        </div>
    );
};

export default NavLink;