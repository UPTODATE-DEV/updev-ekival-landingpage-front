import Image from "next/image";
import { addColorInText } from "../../lib/addColorInText";
import { getImage } from "../../lib/getImage";

export default function Team({ data }: { data: Team }) {
  return (
    <div className="py-24 relative isolate" id="team">
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
      <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-6 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            dangerouslySetInnerHTML={{ __html: addColorInText(data?.title, data.color) }}
          ></h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">{data?.description}</p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {data.items.map((person) => (
            <li key={person.name}>
              <div className="flex relative items-center gap-x-6">
                <Image
                  width={128}
                  height={128}
                  className="h-16 w-16 rounded-full"
                  src={getImage(person.media)}
                  placeholder="blur"
                  blurDataURL={getImage(person.media)}
                  alt={person.name}
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-blue-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
