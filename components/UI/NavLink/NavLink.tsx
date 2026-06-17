"use client";

import Link from "next/link";
import { hasBasePath, toNavHref } from "@/lib/paths";
import { NavLinkProps } from "@/types/common";

export default function NavLink({ href, ...props }: NavLinkProps) {
  if (hasBasePath()) {
    const { prefetch: _prefetch, replace: _replace, scroll: _scroll, ...anchorProps } = props;

    return <a href={toNavHref(href)} {...anchorProps} />;
  }

  return <Link href={href} {...props} />;
}
