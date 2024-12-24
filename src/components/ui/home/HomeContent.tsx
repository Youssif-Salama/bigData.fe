import { ImFilesEmpty, ImSpinner10 } from "react-icons/im";
import { ExchangeTypes } from "../../../types/exchange.types";
import CommonButton from "../../common/CommonButton";
import { useNavigate } from "react-router-dom";

const HomeContent = ({data,loading}:{data:ExchangeTypes[]|undefined,loading:boolean}) => {
  const navigate=useNavigate();
  return (
    <div className="min-h-screen">
    {
      loading && <div className="w-full h-screen flex items-center  justify-center">
        <ImSpinner10 className="animate-spin text-main" size="100px"/>
      </div>
    }
    {
      (!loading && data?.length===0) && <div className="w-full h-screen flex flex-col gap-2 items-center  justify-center">
        <ImFilesEmpty className="text-main" size="100px"/>
        <span className="text-center opacity-75">no data found</span>
      </div>
    }
    {
      !loading &&
    <div
        className="grid grid-cols-3 gap-3
          max-md:grid-cols-2
          max-sm:grid-cols-1
          "
      >
        {data?.map((item) => {
          return (
            <div
            className="bg-main rounded-lg p-4 text-[#242424] shadow-[#242424] shadow-inner
                       hover:scale-105 transition-all duration-300 ease-in-out flex flex-col h-full"
          >
            <div className="flex items-start justify-between gap-2 mb-3">
              <div>
                <span className="capitalize font-semibold">country: </span>
                <span className="text-[14px] opacity-75">{item?._source?.country}</span>
              </div>
              {item?._source?.isArtificialExchange && (
                <div
                  className="text-white bg-main-1 p-1 px-4 text-[10px] rounded-md
                             shadow-inner shadow-[#242424]"
                >
                  AI
                </div>
              )}
            </div>
            <div className="mb-3">
              <span className="capitalize font-semibold">name: </span>
              <span className="text-[14px] opacity-75">{item?._source?.name}</span>
            </div>
            <div className="mb-3">
              <span className="capitalize font-semibold">currency: </span>
              <span className="text-[14px] opacity-75">{item?._source?.currency}</span>
            </div>
            <div className="mt-auto">
              <CommonButton
                className="bg-main-1 p-2 shadow-inner shadow-[#242424] rounded-lg
                           hover:shadow-none hover:bg-main-2 w-full text-white
                           transition-all duration-300 ease-in-out capitalize"
                label="more"
                onClick={() => {
                  navigate(`/exchange/${item?._source.symbol}/meta`);
                }}
              />
            </div>
          </div>

          );
        })}
      </div>
    }
    </div>
  )
}

export default HomeContent
