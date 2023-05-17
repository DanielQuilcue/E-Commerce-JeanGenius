import React, { useState } from 'react';
import Link from 'next/link';
import { BsChevronDown } from 'react-icons/bs';

export const Menu = ({ showCatMenu, setShowCatMenu, categories }) => {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Inicio", url: "/" },
    { id: 3, name: "Categorías", subMenu: true },
    { id: 2, name: "Somos", url: "/about" },
    { id: 4, name: "Contacto", url: "/contact" },
  ]);
  const subMenuData = [
    { id: 1, name: "Dama", doc_count: 11 },
    { id: 2, name: "Caballero", doc_count: 8 },
    { id: 3, name: "Proximamente", doc_count: "" },
  ];

  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {menuItems.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className={`cursor-pointer flex items-center gap-2 relative ${selectedCategory === item.id ? 'active' : ''
                  }`}
                onMouseEnter={() => setIsSubMenuOpen(true)}
                onMouseLeave={() => setIsSubMenuOpen(false)}
                onClick={() => {
                  setSelectedCategory(item.id);
                  setIsSubMenuOpen(!isSubMenuOpen);
                }}
              >
                {item.name}
                <BsChevronDown size={14} />

                {isSubMenuOpen && selectedCategory === item.id && (
                  <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                    {subMenuData.map(({ id, name, doc_count }) => (
                      <li
                        key={id}
                        className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md"
                      >
                        {name}
                        <span className="opacity-50 text-sm">
                          {`(${doc_count})`}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer">
                <Link href={item?.url}>{item.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};
