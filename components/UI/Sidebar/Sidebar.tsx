"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import style from "./Sidebar.module.css";
import { SidebarProps } from "@/types/common";
import { routes, AppRoute } from "@/lib/navigation/routes";
import { useRoutePrefetch } from "@/hooks/useRoutePrefetch/useRoutePrefetch";
import NavLink from "@/components/UI/NavLink/NavLink";
import { hasBasePath, isActivePath } from "@/lib/paths";

const navItems = [
  { href: routes.home, labelKey: "sidebar.notes" },
  { href: routes.profile, labelKey: "sidebar.profile" },
  { href: routes.archive, labelKey: "sidebar.archive" },
  { href: routes.trash, labelKey: "sidebar.trash" },
] as const;

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const prefetchRoute = useRoutePrefetch();

  const prefetchHandlers = useMemo(
    () =>
      hasBasePath()
        ? ({} as Record<AppRoute, () => void>)
        : navItems.reduce<Record<AppRoute, () => void>>(
            (handlers, { href }) => {
              handlers[href] = () => prefetchRoute(href);
              return handlers;
            },
            {} as Record<AppRoute, () => void>,
          ),
    [prefetchRoute],
  );

  return (
    <aside className={className || style.sidebar}>
      <nav className={style.nav} aria-label={t("sidebar.nav_label")}>
        {navItems.map(({ href, labelKey }) => (
          <NavLink
            key={href}
            href={href}
            prefetch
            onMouseEnter={prefetchHandlers[href]}
            className={`${style.navItem} ${isActivePath(pathname, href) ? style.active : ""}`}
          >
            {t(labelKey)}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default React.memo(Sidebar);
