const Values = () => {
  const values = [
    {
      en: {
        title: "Send/Receive Money",
        description: "Carry out peer-to-peer money transfer in a matter of seconds.",
      },
    },
    {
      en: {
        title: "Pay online/Get paid",
        description: "Don’t mind the distance. Grow your business with online payments.",
      },
    },
    {
      en: {
        title: "Make trades",
        description: "Purchase, buy or sell products and services from anywhere.",
      },
    },
    {
      en: {
        title: "Manage crypto",
        description: "Take your crypto-currency experience to the next level.",
      },
    },
  ];

  return (
    <div className="container relative px-6 lg:px-8 py-10" id="services">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white w-full md:w-3/5 md:text-center mx-auto my-4 md:my-16">
        Send Money and Crypto or provide liquidity <span className="text-indigo-600">to earn Yields</span>
      </h1>

      <div className="grid grid-cols-1 gap-4 md:gap-12 sm:grid-cols-2">
        {values.map((item, i) => (
          <div className="flex bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 items-start">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                <svg className="h-8 w-8 text-white" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0ZM14 26C7.383 26 2 20.617 2 14C2 7.383 7.383 2 14 2C20.617 2 26 7.383 26 14C26 20.617 20.617 26 14 26Z"
                    fill="currentColor"
                  />
                  <path
                    d="M14 4C9.02944 4 5 8.02944 5 13C5 17.9706 9.02944 22 14 22C18.9706 22 23 17.9706 23 13C23 8.02944 18.9706 4 14 4ZM14 20C10.134 20 7 16.866 7 13C7 9.13401 10.134 6 14 6C17.866 6 21 9.13401 21 13C21 16.866 17.866 20 14 20Z"
                    fill="currentColor"
                  />
                  <path
                    d="M14 8C11.2386 8 9 10.2386 9 13C9 15.7614 11.2386 18 14 18C16.7614 18 19 15.7614 19 13C19 10.2386 16.7614 8 14 8ZM14 16C12.3431 16 11 14.6569 11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13C17 14.6569 15.6569 16 14 16Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-400">
                  {item.en.title}
                </span>
              </h2>
              <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">{item.en.description}</div>
              <div className="mt-4">
                <a
                  href="https://test.ekival.com"
                  target="_blank"
                  className="text-base font-semibold text-indigo-600 dark:text-indigo-200 hover:text-indigo-800"
                >
                  Try now →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
