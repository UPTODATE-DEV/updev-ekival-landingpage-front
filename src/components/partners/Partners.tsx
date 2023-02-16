import Image from "next/image";

const Partners = () => {
  return (
    <div className="container px-6 lg:px-8 py-12 mb-12">
      <div className="grid items-center grid-cols-2 gap-4 md:gap-12 md:grid-cols-3 lg:grid-cols-5">
        <div className="flex bg-slate-500 dark:bg-slate-800 rounded-lg shadow-lg p-6 items-start">
          <Image src="/p1.png" alt="" width={180} height={180} />
        </div>
        <div className="flex bg-slate-500 dark:bg-slate-800 rounded-lg shadow-lg p-6 items-start">
          <Image src="/p2.png" alt="" width={180} height={180} />
        </div>
        <div className="flex bg-slate-500 dark:bg-slate-800 rounded-lg shadow-lg p-6 items-start">
          <Image src="/p3.png" alt="" width={180} height={180} />
        </div>
        <div className="flex bg-slate-500 dark:bg-slate-800 rounded-lg shadow-lg p-6 items-start">
          <Image src="/p4.png" alt="" width={180} height={180} />
        </div>
        <div className="flex bg-slate-500 dark:bg-slate-800 rounded-lg shadow-lg p-6 items-start">
          <Image src="/p5.png" alt="" width={180} height={180} />
        </div>
      </div>
    </div>
  );
};

export default Partners;
