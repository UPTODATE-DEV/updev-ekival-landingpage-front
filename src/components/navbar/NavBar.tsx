import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { useI18n } from "../../hooks/useI18n";
import DarkModeToggle from "../common/DarkModeToggle";

const navigation = [
  {
    en: "Home",
    fr: "Accueil",
    href: "/",
  },
  {
    en: "Services",
    fr: "Services",
    href: "/#services",
  },
  {
    en: "Features",
    fr: "Fonctionnalités",
    href: "/#features",
  },
  {
    en: "About Us",
    fr: "À propos",
    href: "/#about-us",
  },
  {
    en: "Team",
    fr: "Équipe",
    href: "/#team",
  },
  {
    en: "Exchanges",
    fr: "Échanges",
    href: "https://test.ekival.com",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function NavBar() {
  const { locale, asPath, push } = useRouter();
  const [scrolled, setScrolled] = useState(false);

  const switchLanguages = useI18n<"fr" | "en">();

  const getMenuName = (item: { en: string; fr: string }) => {
    return locale === "fr" ? item.fr : item.en;
  };

  const isCurrentPage = (item: { href: string }) => {
    return asPath === item.href;
  };

  const toggleLang = () => {
    switchLanguages(locale === "fr" ? "en" : "fr");
  };

  const handleGoToPath = (path: string) => {
    push(path);
  };

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 600) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`z-10 ${
        scrolled
          ? "sticky top-0 bg-slate-100 border-b-2 border-gray-300 dark:border-b-gray-700 dark:bg-slate-800"
          : "relative"
      } `}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image className="block h-8 w-auto lg:hidden" width={72} height={72} src="/logo.png" alt="Ekival" />
                  <Image className="hidden h-8 w-auto lg:block" width={72} height={72} src="/logo.png" alt="Ekival" />
                </div>
                <div className="hidden md:ml-16 md:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={classNames(
                          isCurrentPage(item)
                            ? "bg-gray-900 text-white dark:text-gray-900 dark:bg-gray-300"
                            : "dark:text-gray-300 hover:bg-gray-700 hover:text-white text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-900",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={isCurrentPage(item) ? "page" : undefined}
                      >
                        {getMenuName(item)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/** add dark mode toggle button */}
                <div className="flex items-center relative">
                  <DarkModeToggle />
                </div>

                {/* Langue dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open langue menu</span>
                      <Image
                        className="h-6 w-6 rounded-full"
                        width={24}
                        height={24}
                        src={locale === "fr" ? "/fr.png" : "/en.png"}
                        alt="Langue"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-900 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <span
                            onClick={toggleLang}
                            className={classNames(
                              active ? "bg-gray-100 dark:bg-slate-700 " : "",
                              "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 w-full cursor-pointer"
                            )}
                          >
                            Anglais
                          </span>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <span
                            onClick={toggleLang}
                            className={classNames(
                              active ? "bg-gray-100 dark:bg-slate-700" : "",
                              "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 w-full cursor-pointer"
                            )}
                          >
                            Français
                          </span>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.href}
                  as="button"
                  onClick={() => handleGoToPath(item.href)}
                  className={classNames(
                    isCurrentPage(item)
                      ? "bg-gray-900 text-white"
                      : "text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={asPath === item.href ? "page" : undefined}
                >
                  {getMenuName(item)}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default NavBar;
