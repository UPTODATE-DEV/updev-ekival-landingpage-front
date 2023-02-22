import Image from "next/image";
import { addColorInText } from "../../lib/addColorInText";
import { getImage, getImagePlaceholder } from "../../lib/getImage";

const Partners = ({ data }: { data: Partners }) => {
  return (
    <div className="container px-6 lg:px-8 py-12 mb-12">
      <h2
        className="text-4xl font-bold text-center text-slate-900 dark:text-slate-100 mb-8"
        dangerouslySetInnerHTML={{ __html: addColorInText(data?.title, data.color) }}
      ></h2>
      <div className="grid items-center grid-cols-2 gap-4 md:gap-12 md:grid-cols-3 lg:grid-cols-5">
        {data?.medias?.map((item) => (
          <div key={item.url} className="flex bg-slate-500 dark:bg-slate-800 rounded-lg shadow-lg p-6 items-start">
            {item?.url && (
              <Image
                src={getImage(item)}
                placeholder="blur"
                blurDataURL={getImagePlaceholder(item)}
                alt={item?.alt || "Ekival Partners"}
                width={180}
                height={180}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
