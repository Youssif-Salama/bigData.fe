import CommonButton from "../../common/CommonButton"
import CommonInput from "../../common/CommonInput"

const HomeHead = ({setSearch,setApplySearch}:{
  setSearch:(search:string)=>void,
  setApplySearch:(applySearch:number)=>void
}) => {

  return (
    <div className="bg-main rounded-lg p-2 flex items-center gap-2 justify-between shadow-[#242424] shadow-inner">
      <CommonInput
      type="search"
      placeholder="search"
      className="bg-main-1 p-2 shadow-inner shadow-[#242424]"
      onChange={(e)=>{
        if(e.target.value.length>0){
          setSearch(e.target.value);
        }
        else{
          setSearch("");
          setApplySearch(Math.random());
        }
      }}
      />
      <CommonButton
      className="bg-main-1 p-2 shadow-inner shadow-[#242424] rounded-lg
      hover:shadow-none hover:bg-main-2
      transition-all duration-300 ease-in-out"
        label="search"
        onClick={()=>{
          setApplySearch(Math.random());
        }}
      />
    </div>
  )
}

export default HomeHead
