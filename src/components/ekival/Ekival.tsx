import Image from "next/image";

const Convert = () => {
  return (
    <div className="container isolate relative px-6 lg:px-8 my-6" id="about-us">
      <svg
        className="absolute hidden xl:block top-0 left-1/2 -z-10 h-[42.375rem] -translate-x-1/2 blur-3xl xl:-top-6"
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
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 py-16 lg:py-24">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl">
            Ekival and <span className="inline text-blue-600 dark:text-blue-400">Cardano</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Cardano is the blockchain platform powering Ekival, the largest one to use proof-of-stake protocol, With
            Cardano, it’s safe and simple to make peer-to-peer transactions using its crypto-currency, ADA
          </p>
          <div className="mt-10 flex items-center  gap-x-6">
            <a
              href="#"
              aria-label="Ekival Exchange"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Watch video
            </a>
          </div>
        </div>
        <div className="flex-1">
          <Image width={700} height={400} src="/img2.png" alt="banner" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Convert;
