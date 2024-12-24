import { useCallback, useEffect, useState } from "react";
import { getExchangeMetas } from "../../../api/meta-data.api";
import { ImFilesEmpty, ImSpinner10 } from "react-icons/im";

// Define the structure of the data for better type safety
interface ExchangeMetaData {
  [key: string]: string | undefined;
}

const MetaCard = ({
  exchangeSymbol,
}: {
  exchangeSymbol: string | undefined;
}) => {
  const [data, setData] = useState<ExchangeMetaData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getAllExchangeMetas = useCallback(async () => {
    const result = await getExchangeMetas({
      symbol: exchangeSymbol,
      setLoading,
    });
    result && setData(result.data[0]?._source);
  },[exchangeSymbol])

  useEffect(() => {
    getAllExchangeMetas();
  }, [getAllExchangeMetas]);

  const entries = Object.entries(data || {});

  return (
    <div>
      {loading && (
        <div className="w-full h-[50vh] flex items-center justify-center">
          <ImSpinner10 className="animate-spin text-main" size="100px" />
        </div>
      )}

      {!loading && !data && (
        <div className="w-full h-[50vh] flex flex-col gap-2 items-center justify-center">
          <ImFilesEmpty className="text-main" size="100px" />
          <span className="text-center opacity-75">No data found</span>
        </div>
      )}

      {!loading && data && (
        <div className="bg-main rounded-lg p-4 shadow-[#0b0606] shadow-inner grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {entries.map(([key, value], index) => (
            <div
              key={index}
              className="flex items-center gap-2 shadow-inner rounded-lg shadow-[#242424] bg-[#66785F]"
            >
              <span className="shadow-inner bg-main-1 rounded-lg shadow-[#242424] p-2 capitalize h-full flex items-center justify-center">
                {key.replace(/([A-Z])/g, " $1").toLowerCase()}
              </span>
              :{" "}
              <span>{value || "N/A"}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MetaCard;
