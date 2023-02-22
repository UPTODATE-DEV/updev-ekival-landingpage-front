import { addColorInText } from "../../lib/addColorInText";

const Features = ({ data }: { data: Features }) => {
  return (
    <div className="relative px-6 lg:px-8 py-10" id="features">
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

      <h1
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white w-full md:w-1/3 md:text-center mx-auto my-4 md:my-16"
        dangerouslySetInnerHTML={{ __html: addColorInText(data?.title, data.color) }}
      ></h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data?.items.map((item, i) => (
          <div key={i} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 items-start">
            <div className="flex items-center ">
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
            <div className="py-4">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-400">
                  {item.title}
                </span>
              </h2>
              <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
