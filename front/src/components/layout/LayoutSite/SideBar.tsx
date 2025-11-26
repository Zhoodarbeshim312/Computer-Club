"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import scss from "./SideBar.module.scss";

const SideBar = () => {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/zones/standard", label: "Standard Zone" },
    { href: "/zones/comfort", label: "Comfort Zone" },
    { href: "/zones/vip", label: "Vip Zone" },
    { href: "/zones/luxury", label: "Luxury Zone" },
  ];
  return (
    <aside className={scss.sidebar}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <h3>Computer Club</h3>
          </div>
          <nav className={scss.nav}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? scss.active : ""}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
