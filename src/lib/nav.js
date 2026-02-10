export function isActivePath(pathname, href) {
  if (!href) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function hasChildren(item) {
  return Array.isArray(item?.children) && item.children.length > 0;
}