import React from "react";
import CommonDate from "../../common/CommonDate";
import { DateRangeTypes } from "./CandleContent";

interface CandleDateFilterProps {
  setDateRange: (dateRange: DateRangeTypes) => void;
}

const CandleDateFilter: React.FC<CandleDateFilterProps> = ({ setDateRange }) => {
  return (
    <div className="shadow-inner shadow-[#242424] rounded-lg p-2 flex items-center justify-between gap-2">
      <CommonDate
        className="bg-main-1 text-white rounded-lg p-1 h-full shadow-inner shadow-[#242424]"
        label="From: "
        onChange={(e) => {
          const fromDate = new Date(e.target.value);
          // @ts-ignore
          setDateRange((prev) => ({
            ...prev,
            from: fromDate,
          }) as DateRangeTypes);
        }}
      />
      <CommonDate
        className="bg-main-1 text-white rounded-lg p-1 h-full shadow-inner shadow-[#242424]"
        label="To: "
        onChange={(e) => {
          const toDate = new Date(e.target.value);
          // @ts-ignore
          setDateRange((prev) => ({
            ...prev,
            to: toDate,
          }) as DateRangeTypes);
        }}
      />
    </div>
  );
};

export default CandleDateFilter;
