const publicUrl = process.env.NEXT_PUBLIC_PUBLIC_URL ?? process.env.PUBLIC_URL ?? "";

export function withBasePath(path: string): string {
  if (!publicUrl || publicUrl === "/") {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${publicUrl}${normalizedPath}`;
}

export function getMswBasePath(): string {
  if (!publicUrl || publicUrl === "/") {
    return ".";
  }

  return publicUrl.replace(/^\//, "");
}
