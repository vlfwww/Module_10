"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { hasBasePath, toNavHref } from "@/lib/paths";

type NavLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export default function NavLink({ href, ...props }: NavLinkProps) {
  if (hasBasePath()) {
    const { prefetch: _prefetch, replace: _replace, scroll: _scroll, ...anchorProps } = props;

    return <a href={toNavHref(href)} {...anchorProps} />;
  }

  return <Link href={href} {...props} />;
}
