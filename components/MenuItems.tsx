'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { menuLinks, MenuLink } from '@/constants';

const MenuItems = () => {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  const toggleDropdown = (id: number) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  return (
    <nav>
      <ul className="flex flex-col gap-5 md:flex md:flex-col lg:flex lg:flex-row lg:gap-[1.3rem] text-left whitespace-nowrap">
        {menuLinks.map(({ title, id, url, dropdownItems }) => (
          <li key={id} className="relative group">
            {dropdownItems ? (
              <>
                {/* Dropdown Trigger */}
                <button
                  className="text-headline-5 text-black lg:text-black font-medium hover:text-teal-600 focus:outline-none"
                  onClick={() => toggleDropdown(id)}
                  onMouseEnter={() => setOpenDropdownId(id)}
                  onMouseLeave={() => setOpenDropdownId(null)}
                >
                  {title}
                </button>
                {/* Dropdown Menu */}
                <ul
                  className={`lg:absolute lg:left-0 lg:mt-2 lg:w-48 lg:bg-teal-100 lg:shadow-lg lg:rounded-md 
                    transition-all duration-200 ease-in-out
                    ${openDropdownId === id ? 'block lg:opacity-100 lg:visible' : 'hidden lg:opacity-0 lg:invisible'}
                    lg:group-hover:opacity-100 lg:group-hover:visible`}
                  onMouseEnter={() => setOpenDropdownId(id)}
                  onMouseLeave={() => setOpenDropdownId(null)}
                >
                  {dropdownItems.map((item, index) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block px-4 py-2 text-headline-5 text-black font-medium hover:bg-gray-100
                          ${index === 0 ? 'lg:rounded-t-md' : ''} 
                          ${index === dropdownItems.length - 1 ? 'lg:rounded-b-md' : ''}`}
                        onClick={() => setOpenDropdownId(null)} // Close dropdown on click
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link href={url}>
                <p className="text-headline-5 text-black lg:text-black font-medium hover:text-teal-600">
                  {title}
                </p>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuItems;