import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { getImage, getImagePlaceholder } from "../../lib/getImage";

const Footer = ({ data }: { data: Footer }) => {
  const { resolvedTheme } = useTheme();

  const getLogoMode = () => {
    const logo = resolvedTheme === "dark" ? data?.logoDark : data?.logoLight;
    return {
      url: getImage(logo),
      placeholder: getImagePlaceholder(logo),
    };
  };

  const logoUrl = getLogoMode().url;
  const logoPlaceholder = getLogoMode().placeholder;

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 pt-16 pb-8">
      <div className="container">
        <footer className="p-4">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 max-w-sm">
              <Link href="/" target="_blank" className="flex items-center">
                {logoUrl && (
                  <Image
                    width={256}
                    height={96}
                    src={logoUrl}
                    placeholder="blur"
                    blurDataURL={logoPlaceholder}
                    className="mr-4 w-36 h-auto"
                    alt="FlowBite Logo"
                  />
                )}
              </Link>
              <p className="mt-6 text-lg leading-8  text-gray-300">{data?.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h3 className="mb-6 text-sm font-bold uppercase text-white">{data?.footerLinks1?.title}</h3>
                <ul>
                  {data.footerLinks1.items.map((item, index) => (
                    <li className="mb-4" key={item.id}>
                      <a
                        href={item.path}
                        rel={item.target === "_blank" ? "nofollow noreferrer" : ""}
                        target={item.target}
                        aria-label={item.label}
                        className="leading-8  text-gray-300 hover:underline"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-6 text-sm font-bold uppercase text-white">{data?.footerLinks2?.title}</h3>
                <ul>
                  {data.footerLinks2.items.map((item, index) => (
                    <li className="mb-4" key={item.id}>
                      <a
                        href={item.path}
                        rel={item.target === "_blank" ? "nofollow noreferrer" : ""}
                        target={item.target}
                        aria-label={item.label}
                        className="leading-8  text-gray-300 hover:underline"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-6 text-sm font-bold uppercase text-white">{data?.footerLinks3?.title}</h3>
                <ul>
                  {data.footerLinks3.items.map((item, index) => (
                    <li className="mb-4" key={item.id}>
                      <a
                        href={item.path}
                        rel={item.target === "_blank" ? "nofollow noreferrer" : ""}
                        target={item.target}
                        aria-label={item.label}
                        className="leading-8  text-gray-300 hover:underline"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-300 sm:text-center dark:text-gray-400">
              © {new Date().getFullYear()}{" "}
              <Link href="/" className="hover:underline text-white">
                Ekival
              </Link>
              . Designed by{" "}
              <a
                href="https://uptodatedevelopers.com"
                rel="nofollow noreferrer"
                target="_blank"
                aria-label="Uptodate developers"
                className="hover:underline text-white"
              >
                Uptodate Developers
              </a>
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              {data.RS && data.RS.facebook && (
                <a
                  href={data.RS.facebook}
                  aria-label="Facebook"
                  rel="nofollow noreferrer"
                  className="text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              )}
              {data.RS && data.RS.instagram && (
                <a
                  href={data.RS.instagram}
                  aria-label="Instagram"
                  rel="nofollow noreferrer"
                  className="text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              )}
              {data.RS && data.RS.twitter && (
                <a
                  href={data.RS.twitter}
                  aria-label="Twitter"
                  rel="nofollow noreferrer"
                  className="text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              )}
              {data.RS && data.RS.github && (
                <a
                  href={data.RS.github}
                  aria-label="Github"
                  rel="nofollow noreferrer"
                  className="text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              )}

              {data.RS && data.RS.linkedin && (
                <a
                  href={data.RS.linkedin}
                  aria-label="LinkedIn"
                  rel="nofollow noreferrer"
                  className="text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </footer>
      </div>
      <svg
        className="absolute top-0 left-1/2 -z-10 h-[42.375rem] -translate-x-1/2 blur-3xl xl:-top-6"
        viewBox="0 0 1155 678"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="url(#09dbde42-e95c-4b47-a4d6-0c523c2fca9a)"
          fillOpacity=".3"
          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
        />
        <defs>
          <linearGradient
            id="09dbde42-e95c-4b47-a4d6-0c523c2fca9a"
            x1="1155.49"
            x2="-78.208"
            y1=".177"
            y2="474.645"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9089FC" />
            <stop offset={1} stopColor="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Footer;
