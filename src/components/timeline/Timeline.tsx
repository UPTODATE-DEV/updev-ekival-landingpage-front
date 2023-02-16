function Timeline() {
  const events = [
    {
      id: 1,
      date: "Juin 2021",
      title: "Progressively recaptiualize.",
      description:
        "Synergistically impact plug-and-play resources before fully tested process improvements. Proactively.",
    },
    {
      id: 2,
      date: "Juin 2021",
      title: "Progressively recaptiualize.",
      description:
        "Synergistically impact plug-and-play resources before fully tested process improvements. Proactively.",
    },
    {
      id: 3,
      date: "Juin 2021",
      title: "Progressively recaptiualize.",
      description:
        "Synergistically impact plug-and-play resources before fully tested process improvements. Proactively.",
    },
    {
      id: 4,
      date: "Juin 2021",
      title: "Progressively recaptiualize.",
      description:
        "Synergistically impact plug-and-play resources before fully tested process improvements. Proactively.",
    },
  ];

  return (
    <div className="relative my-12 sm:my-44 md:my-52 container  px-6 lg:px-8" id="timeline">
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
      <div className="border-l-2 sm:border-t-2 sm:border-l-0 h-full sm:h-auto  md:border-gray-300 absolute sm:top-4 left-5 sm:left-0 sm:right-0"></div>
      <div className="flex justify-center items-center flex-col sm:flex-row space-y-8 sm:space-y-0">
        {events.map((event, i) => (
          <div key={event.id} className="flex items-start flex-col">
            <svg
              className="fill-current text-gray-300 w-8 h-8 mb-2 ml-[-20px] sm:ml-0  rotate-90 sm:rotate-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M19.5 10c0 5.5-4.5 10-10 10S-.5 15.5-.5 10 4 0 9.5 0 19.5 4.5 19.5 10zM9.8 14.7l4-4c.4-.4.4-1 0-1.4l-4-4c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L11.6 10l-3.2 3.3c-.4.4-.4 1 0 1.4.2.1.3.1.7.1s.5 0 .7-.1z" />
            </svg>
            <div
              className={`flex items-start flex-col ml-6 sm:ml-0 mt-[-40px] relative ${
                i % 2 ? "sm:top-20" : "sm:top-[-220px]"
              } `}
            >
              <div className="font-bold text-xl mb-2">{event.date}</div>
              <div className="text-blue-600 text-xl font-medium mb-2">{event.title}</div>
              <div className="text-gray-600 dark:text-slate-300 ">{event.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
