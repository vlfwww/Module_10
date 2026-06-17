const publicUrl = process.env.NEXT_PUBLIC_PUBLIC_URL ?? process.env.PUBLIC_URL ?? "";

export function hasBasePath(): boolean {
  return Boolean(publicUrl && publicUrl !== "/");
}

export function normalizePathname(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

export function isActivePath(pathname: string, href: string): boolean {
  const current = normalizePathname(pathname);
  const target = normalizePathname(href);

  if (target === "" || target === "/") {
    return current === "" || current === "/";
  }

  return current === target;
}

export function withBasePath(path: string): string {
  if (!publicUrl || publicUrl === "/") {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${publicUrl}${normalizedPath}`;
}

export function toNavHref(path: string): string {
  if (path === "/") {
    return withBasePath("/");
  }

  const withTrailingSlash = path.endsWith("/") ? path : `${path}/`;
  return withBasePath(withTrailingSlash);
}

export function getMswBasePath(): string {
  if (!publicUrl || publicUrl === "/") {
    return ".";
  }

  return publicUrl.replace(/^\//, "");
}
