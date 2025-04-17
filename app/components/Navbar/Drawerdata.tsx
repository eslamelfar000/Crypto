import React from "react";
import Link from "next/link";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '#home-section', current: false },
    { name: 'Exchange', href: '#exchange-section', current: false },
    { name: 'Features', href: '#features-section', current: false },
    { name: 'FAQ', href: '#faq-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Data = () => {
    return (
        <div className="rounded-md max-w-sm w-full">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        <ul className="space-y-3 mb-10">
                            {navigation.map((item) => (
                            <li key={item.name} className={`text-white hover:bg-gray-700 hover:text-gray-400`}>
                                <Link
                                href={item.href}
                                className={`
                                    block py-2 rounded-md text-base font-medium
                                `}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                            </li>
                        ))}
                        </ul>
                        <div className="mt-4"></div>
                        <button className="bg-white text-navyblue w-full hover:text-white hover:bg-black font-medium py-3 px-4 rounded transition duration-300">
                            Connect Wallet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
