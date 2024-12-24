import  { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';
import { CandleTypes } from "../../../types/candle.types";
import { CiRedo } from 'react-icons/ci';
import { DateRangeTypes } from './CandleContent';

const CandleChart = ({ candles ,setDateRange}: { candles: CandleTypes[] | undefined,setDateRange:(dateRange:DateRangeTypes | null)=>void }) => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  // Prepare the data for the chart
  const formattedCandles: {
    time: number; // Unix timestamp in seconds
    open: number;
    high: number;
    low: number;
    close: number;
  }[] = candles
    ?.map(candle => ({
      time: new Date(candle._source.dateTime).getTime() / 1000,
      open: candle._source.startPrice,
      high: candle._source.highestPrice,
      low: candle._source.lowestPrice,
      close: candle._source.endPrice,
    }))
    .sort((a, b) => a.time - b.time) || [];

  // Initialize the chart after the component mounts
  useEffect(() => {
    if (chartRef.current) {
      const chart = createChart(chartRef.current, {
        width: chartRef.current.clientWidth,
        height: chartRef.current.clientHeight,
      });

      // Create a candlestick series
      const candlestickSeries = chart.addCandlestickSeries();

      // @ts-ignore
      candlestickSeries.setData(formattedCandles);

      // Cleanup chart on component unmount
      return () => chart.remove();
    }
  }, [formattedCandles]);

  return (
    <div ref={chartRef} className="relative w-full h-[500px] rounded-lg bg-gray-100 border border-gray-300 overflow-hidden">
      <CiRedo className='bg-main-1 rounded-full absolute top-1 left-1 z-50 cursor-pointer font-bold text-[20px]
      shadow-inner shadow-[#242424]
      '
      onClick={()=>{
        setDateRange(null);
      }}
      />
</div>

  );
};

export default CandleChart;
