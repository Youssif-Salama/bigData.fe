import { useCallback, useEffect, useState } from "react";
import { getExchangeCandles } from "../../../api/candle.api";
import CandleChart from "./CandleChart";
import { CandleResponseTypes } from "../../../types/candle.types";
import { ImFilesEmpty, ImSpinner10 } from "react-icons/im";
import CommonPagination from "../../common/CommonPagination";
import CandleDateFilter from "./CandleDateFilter";


export interface DateRangeTypes{
  from:Date,
  to:Date
}

const CandleContent = ({ exchangeSymbol }: { exchangeSymbol: string | undefined }) => {
  const [data, setData] = useState<CandleResponseTypes | null>(null);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(95);
  const [loading, setLoading] = useState<boolean>(false);
  const [dateRange,setDateRange]=useState<DateRangeTypes|null>(null);

  const getAllExchangeCandles = useCallback(async () => {
    if (!exchangeSymbol) return;
    const result = await getExchangeCandles({
      page,
      limit,
      setLoading,
      symbol: exchangeSymbol,
      dateRange
    });
    result && setData(result);
  }, [page, limit, exchangeSymbol,dateRange]);

  useEffect(() => {
    getAllExchangeCandles();
  }, [getAllExchangeCandles]);


  return (
      <div className="bg-main p-2 rounded-lg shadow-inner shadow-[#242424] flex flex-col gap-3">
        {/* date filter */}
        <CandleDateFilter setDateRange={setDateRange}/>
        {/* chart */}
      {(!loading && data?.data?.length!==0) && <CandleChart candles={data?.data} setDateRange={setDateRange} />}
      {loading && (
        <div className="w-full h-[50vh] flex items-center justify-center">
          <ImSpinner10 className="animate-spin text-[#242424]" size="100px" />
        </div>
      )}
      {(!loading && !data) || (!loading && data?.data?.length===0) && (
        <div className="w-full h-[50vh] flex flex-col gap-2 items-center justify-center text-[#242424]">
          <ImFilesEmpty size="100px" />
          <span className="text-center opacity-75">No data found</span>
        </div>
      )}
      {/* pagination */}
      <CommonPagination
        limit={limit}
        setLimit={setLimit}
        page={page}
        setPage={setPage}
        totalPages={data?.meta?.totalPages || 0}
        totalData={data?.meta?.totalData || 0}
        hasNext={data?.meta?.hasNext || false}
        hasPrev={data?.meta?.hasPrev || false}
      />
    </div>
  );
};

export default CandleContent;
