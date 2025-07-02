'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { menuLinks } from '@/constants';

const MenuItems = ({ onClickLink }: { onClickLink?: () => void }) => {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const firstItemRefs = useRef<{ [key: number]: HTMLAnchorElement | null }>({});

  const toggleDropdown = (id: number) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  useEffect(() => {
    if (openDropdownId !== null && firstItemRefs.current[openDropdownId]) {
      firstItemRefs.current[openDropdownId]?.focus();
    }
  }, [openDropdownId]);

  return (
    <nav>
      <ul className="flex flex-col gap-5 md:flex md:flex-col lg:flex lg:flex-row lg:gap-[1.3rem] text-left whitespace-nowrap">
        {menuLinks.map(({ title, id, url, dropdownItems }) => (
          <li
            key={id}
            className="relative group" // Added group for hover
            onMouseEnter={() => dropdownItems && setOpenDropdownId(id)}
            onMouseLeave={() => dropdownItems && setOpenDropdownId(null)}
          >
            {dropdownItems ? (
              <div className="relative"> {/* Wrapper div for hover continuity */}
                {/* Dropdown Trigger */}
                <button
                  className="text-headline-5 text-black font-medium hover:text-teal-500 focus:outline-none rounded-md"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown(id);
                  }}
                  aria-haspopup="true"
                  aria-expanded={openDropdownId === id}
                >
                  {title}
                </button>

                {/* Dropdown Menu */}
                <ul
                  className={`lg:absolute lg:left-0 lg:top-full lg:w-48 lg:bg-teal-100 lg:shadow-lg lg:rounded-md 
                    transition-all duration-200 ease-in-out z-[100] pointer-events-auto
                    ${openDropdownId === id ? 'block group-hover:block' : 'hidden'}`}
                  role="menu"
                >
                  {dropdownItems.map((item, index) => (
                    <li
                      key={item.href}
                      role="menuitem"
                      className="pb-2 mb-2 last:mb-0 lg:last:mb-0"
                    >
                      <Link
                        href={item.href}
                        className={`block px-4 py-2 text-headline-5 text-black font-medium hover:bg-teal-200 focus:outline-none rounded-md
                          ${index === 0 ? 'lg:rounded-t-md' : ''} 
                          ${index === dropdownItems.length - 1 ? 'lg:rounded-b-md' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenDropdownId(null);
                          onClickLink?.();
                        }}
                        ref={(el) => {
                          if (index === 0) {
                            firstItemRefs.current[id] = el;
                          }
                        }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                href={url}
                className="text-headline-5 text-black font-medium hover:text-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-md"
                onClick={onClickLink}
              >
                {title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuItems;