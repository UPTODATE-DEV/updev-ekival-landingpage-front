import Image from "next/image";
import { addColorInText } from "../../lib/addColorInText";
import { getImage, getImagePlaceholder } from "../../lib/getImage";

const Convert = ({ data }: { data: AboutUs }) => {
  return (
    <div className="container px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-between gap-16 py-16 lg:py-24">
        <div className="flex-1">
          {data.media && (
            <Image
              width={700}
              height={400}
              src={getImage(data.media)}
              placeholder="blur"
              blurDataURL={getImagePlaceholder(data.media)}
              alt="banner"
              className="w-full h-auto"
            />
          )}
        </div>
        <div className="flex-1">
          <h1
            className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl"
            dangerouslySetInnerHTML={{ __html: addColorInText(data.title, data.color) }}
          ></h1>
          <p
            className="mt-4 text-lg text-gray-600 dark:text-gray-400"
            dangerouslySetInnerHTML={{ __html: data.description }}
          ></p>
          <div className="mt-10 flex items-center  gap-x-6">
            <a
              href="https://test.ekival.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Ekival Exchange"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              {data.button.label}
            </a>
            <a
              href="#"
              aria-label="Ekival Exchange"
              className="text-base font-semibold leading-7 text-gray-900 dark:text-white"
            >
              {data.video.label} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Convert;
