import { Helmet } from "react-helmet";
import HomeHead from "../components/ui/home/HomeHead";
import { useCallback, useEffect, useState } from "react";
import { getAllExchanges } from "../api/exchange.api";
import { ExchangeResponseTypes } from "../types/exchange.types";
import CommonPagination from "../components/common/CommonPagination";
import HomeContent from "../components/ui/home/HomeContent";

const Home = () => {
  const [data, setData] = useState<ExchangeResponseTypes | null>(null);
  const [loading,setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [search,setSearch]=useState<string>("");
  const [applySearch,setApplySearch]=useState<number>(1);

  const fetchExchangeData = useCallback(async () => {
    try {
      const result = await getAllExchanges({ page, limit,setLoading,search });
      setData(result);
    } catch (error) {
      console.error("Error fetching exchange data:", error);
    }
  }, [page, limit,applySearch]);

  useEffect(() => {
    fetchExchangeData();
  }, [fetchExchangeData]);

  return (
    <div className="flex flex-col gap-3">
      {/* title */}
      <Helmet title="Exchange" />
      {/* head */}
      <HomeHead setApplySearch={setApplySearch} setSearch={setSearch} />
      {/* content */}
      <HomeContent data={data?.data} loading={loading} />
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

export default Home;
