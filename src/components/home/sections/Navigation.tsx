"use client";

import { createContext, useContext, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Ellipsis, X } from "lucide-react";

import { navigation } from "@/data/navigation";

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <SheetMenu>
      <nav className="my-4 flex w-full flex-row items-end justify-end gap-4 text-lg sm:flex-col lg:flex-row lg:items-center">
        <div className="w-16" />
        <div className="hidden sm:flex sm:gap-4">
          {navigation.map(({ href, label }) => {
            if (href === pathname) return;
            return <NavigationLink href={href} label={label} key={href} />;
          })}
        </div>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://forms.gle/wE4YkHsPvyQ8Jx6YA"
          className="cursor-pointer select-none whitespace-nowrap rounded-full bg-white p-2 px-10 text-black sm:px-8"
        >
          Join us!
        </motion.a>
        <MenuButton />
      </nav>
    </SheetMenu>
  );
};

export type NavigationLinkProps = {
  href: string;
  label: string;
};

const NavHovervariant: Variants = {
  initial: {
    width: 0,
  },
  hover: {
    width: "100%",
  },
};
export const NavigationLink = ({ href, label }: NavigationLinkProps) => {
  return (
    <Link key={href} href={href}>
      <motion.div
        className="relative select-none whitespace-nowrap px-4"
        initial="initial"
        animate="initial"
        whileHover="hover"
      >
        <motion.div
          variants={NavHovervariant}
          className="pointer-events-none absolute left-0 h-full w-full overflow-hidden bg-white text-secondary"
        >
          <p className="mx-4 font-bold">{label}</p>
        </motion.div>
        <p>{label}</p>
      </motion.div>
    </Link>
  );
};

type MenuContextType = {
  handleToggleMenu: () => void;
};

const MenuContext = createContext({} as MenuContextType);

const useMenuSheet = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuSheet must be used within a MenuProvider");
  }
  return context;
};

const SheetMenu = ({ children }: { children: React.ReactNode }) => {
  const [open, setopen] = useState(false);
  const pathname = usePathname();
  const handleToggleMenu = () => {
    setopen(!open);
  };
  return (
    <MenuContext.Provider value={{ handleToggleMenu }}>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed z-[9998] block size-full select-none bg-black/40 sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleToggleMenu}
          />
        )}
      </AnimatePresence>
      <motion.div
        className="fixed top-0 z-[9999] block h-dvh w-dvw select-none bg-background py-8 sm:hidden"
        initial={{ right: "-120%" }}
        animate={{ right: open ? "-20%" : "-120%" }}
      >
        <button onClick={handleToggleMenu} className="group ml-4 rounded-full border p-2 hover:bg-white">
          <X fill="#FFF" className="size-8 group-hover:stroke-black" />
        </button>

        {navigation.map(({ href, label }) => {
          if (href === pathname) return;
          return (
            <Link key={href} href={href}>
              <motion.div
                className="relative my-4 select-none whitespace-nowrap py-2 pl-4 text-3xl"
                initial="initial"
                animate="initial"
                whileHover="hover"
              >
                <p>{label}</p>
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
      {children}
    </MenuContext.Provider>
  );
};

const MenuButton = () => {
  const { handleToggleMenu } = useMenuSheet();
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      onClick={handleToggleMenu}
      className="flex size-12 select-none flex-col items-center justify-center gap-1 rounded-full bg-white sm:hidden"
    >
      <Ellipsis color="#000" />
    </motion.button>
  );
};
