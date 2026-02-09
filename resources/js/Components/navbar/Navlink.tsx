import { Link } from "@inertiajs/react";
import { useCallback } from "react";
import clsx from "clsx";

interface NavigationLinksProps {
    isMobile?: boolean;
    onLinkClick?: () => void;
    url: string;
}

interface NavLink {
    href: string;
    translationKey: string;
}

const links: NavLink[] = [
    { href: "/", translationKey: "Beranda" },
    { href: "/belanja", translationKey: "Belanja" },
    // { href: "/gallery", translationKey: "Galeri" },
    { href: "/about", translationKey: "Tentang" },
];

export function NavigationLinks({ isMobile = false, onLinkClick, url }: NavigationLinksProps) {
    const isActive = useCallback(
        (path: string) => (path === '/' ? url === path : url.startsWith(path)),
        [url]
    );

    const linkClass = isMobile
        ? "block px-4 py-3 rounded-md text-sm font-medium transition-colors"
        : "relative px-1 py-2 text-sm font-medium transition-colors group";

    const activeLinkClass = isMobile
        ? "bg-gray-100 text-gray-900 font-semibold"
        : "text-gray-900 font-semibold";

    const inactiveLinkClass = isMobile
        ? "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
        : "text-gray-700 hover:text-gray-900";

    return (
        <>
            {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    onClick={onLinkClick}
                    className={clsx(
                        linkClass,
                        isActive(link.href) ? activeLinkClass : inactiveLinkClass
                    )}
                >
                    {link.translationKey}
                    {!isMobile && (
                        <span className={clsx(
                            "absolute bottom-0 left-0 h-0.5 bg-gray-900 transition-all duration-300",  
                            isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                        )}></span>
                    )}
                </Link>
            ))}
        </>
    );
}
