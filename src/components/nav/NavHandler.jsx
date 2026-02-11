"use client";
import useMedia from "use-media";

import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { NavMobile } from "@/components/nav/NavMobile";
import { NavDesktop } from "@/components/nav/NavDesktop";

export function NavHandler() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const pathname = usePathname();

  const mediaQuery = useMemo(() => ({ maxWidth: 768 }), []);
  const isMobile = useMedia(mediaQuery);

  useEffect(() => {
    setHasMounted(true);

    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    if (pathname === "/") {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(true);
    }
  }, [pathname]);

  if (!hasMounted) return null;

  return isMobile ? <NavMobile isScrolled={isScrolled} /> : <NavDesktop isScrolled={isScrolled} />;
}