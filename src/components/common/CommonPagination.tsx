interface PaginationTypes{
  setLimit:(limit:number)=>void,
  setPage:(page:number)=>void,
  limit:number,
  page:number,
  totalData:number,
  totalPages:number,
  hasNext:boolean | undefined,
  hasPrev:boolean | undefined
}

const CommonPagination = ({limit,setLimit,page,hasNext,hasPrev,totalPages,totalData,setPage}:PaginationTypes) => {
  return (
    <div className="p-2 text-[14px] rounded-lg shadow-inner shadow-[#242424] bg-main
    flex items-center justify-between
    ">
      {/* selector && info */}
      <div>
        <select className="bg-main-1 shadow-inner shadow-[#242424] rounded-lg p-2"
        value={limit}
        onChange={(e)=>{
          setLimit(Number(e.target.value))
        }}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={25}>25</option>
          <option value={30}>30</option>
        </select>
        <span className="opacity-75 text-[#242424] ml-4">{limit} / {totalData}, {totalPages} pages</span>
      </div>
      {/* pagination */}
      <div className="text-[#242424] flex items-center gap-1">
        <div className="bg-main-1 text-white shadow-inner w-[20px]
        rounded-lg shadow-[#242424] cursor-pointer hover:shadow-none
        text-center"
        aria-disabled={!hasPrev}
        onClick={()=>{
          if(hasPrev && page>1){
            setPage(page-1);
          }
        }}
        >-</div>
        <div>{page}</div>
        <div className="bg-main-1 text-white shadow-inner w-[20px]
        rounded-lg shadow-[#242424] cursor-pointer hover:shadow-none
        text-center"
        aria-disabled={!hasNext}
        onClick={()=>{
          if(hasNext && page<totalPages){
            setPage(page+1);
          }
        }}
        >+</div>
      </div>
    </div>
  )
}

export default CommonPagination
