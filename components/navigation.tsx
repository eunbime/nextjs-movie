"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>home</Link> {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href={"/about-me"}>About Me</Link>{" "}
          {path === "/about-me " ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
}
