import Image from "next/image";

const Convert = () => {
  return (
    <div className="container px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-between gap-16 py-16 lg:py-24">
        <div className="flex-1">
          <Image width={700} height={400} src="/img1.png" alt="banner" className="w-full h-auto" />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl">
            Convert money in <span className="inline text-blue-600 dark:text-blue-400">USD</span> or in{" "}
            <span className="inline text-blue-600 dark:text-blue-400">ADA</span> at a glance
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Ekival offers escrow services powering marketplaces such as money transfer services or exchange of goods.
            Smart contracts on Ekival handle the exchange, settlement and, if required, dispute between users without
            any middleman.
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
              className="text-base font-semibold leading-7 text-gray-900 dark:text-white"
            >
              Watch video <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Convert;
