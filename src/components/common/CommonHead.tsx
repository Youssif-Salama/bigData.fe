import { FaArrowAltCircleLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom";

const CommonHead = ({title}:{title:string}) => {
  const navigate=useNavigate();
  return (
    <div className="p-2 text-[14px] rounded-lg shadow-inner shadow-[#242424] bg-main
    flex items-center justify-between font-bold">
      <div>
        <FaArrowAltCircleLeft className="text-main-1 text-[20px] cursor-pointer"
        onClick={()=>{
          navigate(-1)
        }}
        />
      </div>
      <div className="text-[#242424]">{title}</div>
    </div>
  )
}

export default CommonHead
