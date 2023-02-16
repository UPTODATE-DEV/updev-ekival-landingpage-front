import Image from "next/image";

const Banner = () => {
  return (
    <div className="isolate">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
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
      <main className="container">
        <div className="relative px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 py-16 lg:py-24">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 lg:text-6xl">
                Move money <span className="inline text-blue-600 dark:text-blue-400">Get value</span> Peer-2-Peer Crypto{" "}
                <span className="inline text-blue-600 dark:text-blue-400">Cash</span> to Cash Transfers
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Ekival escrow smart contracts handle the secure exchange of money, goods and services
              </p>
              <div className="mt-10 flex items-center  gap-x-6">
                <a
                  href="https://test.ekival.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Ekival Exchange"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Try now
                </a>
                <a
                  href="#"
                  aria-label="Ekival Exchange"
                  rel="noreferrer"
                  className="text-base font-semibold leading-7 text-gray-900 dark:text-white"
                >
                  Watch video <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="flex-1">
              <Image width={700} height={400} priority src="/hero.png" alt="banner" className="w-full h-auto" />
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
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
        </div>
      </main>
    </div>
  );
};

export default Banner;
