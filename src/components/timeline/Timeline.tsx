function Timeline() {
  const events = [
    {
      id: 1,
      date: "June 2022",
      title: "Testnet & Beta",
      description: "Currently testing on Testnet, implementing new functionalities (wallets, currencies)",
    },
    {
      id: 2,
      date: "August 2022",
      title: "Fund 9 Proposal",
      description:
        "Ekival is bootstrapped. Smart contract implementation and stable coin availability would have delayed launch.",
    },
    {
      id: 3,
      date: "August 2022",
      title: "Beta on Mainnet",
      description:
        "First paying users and financial modeling. Incentives to providers of liquidity to be calibrated, Supermarket network in Goma and Kinshasa,",
    },
    {
      id: 4,
      date: "December 2022",
      title: "Mobile Apps & Liquidity API",
      description:
        "Most users in Africa would rely on mobile devices, Liquidity being offered through Ekival can be reserved through an API",
    },
  ];

  return (
    <div className="relative my-4 md:my-6 container  px-6 lg:px-8" id="timeline">
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
      <ol className="border-l border-gray-300">
        {events.map((event, i) => (
          <li key={event.id}>
            <div className="flex flex-start items-center pt-3">
              <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
              <p className="font-bold text-xl mb-2">{event.date}</p>
            </div>
            <div className="mt-0.5 ml-4 mb-6">
              <h4 className="text-blue-600 text-xl font-medium mb-2">{event.title}</h4>
              <p className="text-gray-600 dark:text-slate-300 ">{event.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Timeline;
