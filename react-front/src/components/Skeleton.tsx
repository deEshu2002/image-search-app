const heightArray = ["h-56", "h-72", "h-80", "h-72", "h-56", "h-72"];

export const SkeletonCard = () => {
  return (
    <div className="mt-10 columns-3xs px-20">
      {heightArray.map((elem, idx) => {
        return (
          <div
            key={idx}
            className="mb-4 flex w-full flex-1 flex-col items-center   break-inside-avoid"
          >
            <div className=" w-full animate-pulse flex-row items-center justify-center space-x-1 rounded-xl border p-6 ">
              <div className="flex flex-col space-y-2">
                <div className={`${elem} rounded-md bg-gray-300 `}></div>
                <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-full bg-gray-300 "></div>
                  <div className="flex flex-col gap-2">
                    <div className="h-4 w-40 rounded-md bg-gray-300 "></div>
                    <div className="h-4 w-32 rounded-md bg-gray-300 "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
