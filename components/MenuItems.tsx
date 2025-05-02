import React from 'react';
import Link from 'next/link';
import { menuLinks } from '@/constants';

const MenuItems = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-5 md:flex md:flex-col lg:flex lg:flex-row lg:gap-[1.3rem] text-left whitespace-nowrap">
        {menuLinks.map(({ title, id, url }) => (
          <li key={id}>
            <Link href={url}>
              <p className="text-headline-5 text-black lg:text-black font-medium">
                {title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MenuItems