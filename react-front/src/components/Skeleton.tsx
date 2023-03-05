import { useState } from "react";


export const SkeletonCard = () => {
  const [firstArray, setFirstArray] = useState<string[]>(["h-96", "h-96"])

  const myArray = [firstArray, firstArray, firstArray]

  return (
    <div className="flex flex-row justify-center gap-4">
      {myArray.map((row, rowidx) => {
        return (
            <div key={rowidx} className="flex flex-col w-auto">
              {row.map((elem, idx) => {
                return (
                  <div key={`${idx}_card`} className="mb-4 flex items-center">
                    <div className="animate-pulse flex-row items-center justify-center rounded-xl border pb-6 ">
                      <div className="flex w-full flex-col space-y-2">
                        <div
                          className={`${elem} rounded-md bg-gray-300 `}
                        ></div>
                        <div className="flex gap-2 mx-4">
                          <div className="w-10 h-10 rounded-full bg-gray-300 "></div>
                          <div className="flex flex-col gap-2">
                            <div className="h-4 w-60 rounded-md bg-gray-300 "></div>
                            <div className="h-4 w-44 rounded-md bg-gray-300 "></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
        );
      })}
    </div>
  );
};
