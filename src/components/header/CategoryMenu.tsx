"use client";

import React, { useState, MouseEvent } from "react";

type MenuItem = {
    icon: string;
    label: string;
    submenu: string[] | null;
};

function CategoryMenu() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleMenu = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const menuItems: MenuItem[] = [
        {
            icon: "01.svg",
            label: "Building Materials (مواد البناء)",
            submenu: ["Cement & Concrete", "Steel & Metal", "Bricks & Blocks"],
        },
        {
            icon: "02.svg",
            label: "Construction Tools (أدوات البناء)",
            submenu: ["Power Tools", "Hand Tools", "Measuring Tools"],
        },
        {
            icon: "03.svg",
            label: "Heavy Equipment (المعدات الثقيلة)",
            submenu: null,
        },
        {
            icon: "04.svg",
            label: "Electrical Materials (المواد الكهربائية)",
            submenu: ["Wires & Cables", "Switches", "Conduits"],
        },
        {
            icon: "05.svg",
            label: "Plumbing Supplies (مواد السبا��ة)",
            submenu: null,
        },
        {
            icon: "06.svg",
            label: "Wood & Lumber",
            submenu: null,
        },
        {
            icon: "07.svg",
            label: "Safety Equipment (معدات السلامة)",
            submenu: ["Helmets", "Protective Gear", "Safety Signs"],
        },
        {
            icon: "08.svg",
            label: "Roofing Materials",
            submenu: null,
        },
        {
            icon: "09.svg",
            label: "Insulation & Flooring",
            submenu: null,
        },
        {
            icon: "10.svg",
            label: "Hardware & Fasteners",
            submenu: null,
        },
    ];

    return (
        <div>
            <ul className="category-sub-menu" id="category-active-four">
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <a
                            href={item.submenu ? "#" : `/shop?category=${encodeURIComponent(item.label.split(' (')[0])}`}
                            className="menu-item"
                            onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                                if (item.submenu) {
                                    e.preventDefault();
                                    toggleMenu(index);
                                }
                            }}
                        >
                            <img src={`/assets/images/icons/${item.icon}`} alt="icons" />
                            <span>{item.label}</span>
                            {item.submenu && (
                                <i
                                    className={`fa-regular ${openIndex === index ? "fa-minus" : "fa-plus"
                                        }`}
                                />
                            )}
                        </a>

                        {item.submenu && (
                            <ul
                                className={`submenu mm-collapse ${openIndex === index ? "mm-show" : ""
                                    }`}
                            >
                                {item.submenu.map((subItem, subIdx) => (
                                    <li key={subIdx}>
                                        <a className="mobile-menu-link" href="/shop">
                                            {subItem}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CategoryMenu;
