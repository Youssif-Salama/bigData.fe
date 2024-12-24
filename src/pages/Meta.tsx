import { Helmet } from 'react-helmet'
import MetaCard from '../components/ui/meta/MetaCard'
import { useParams } from 'react-router-dom'
import CommonHead from '../components/common/CommonHead';
import CandleContent from '../components/ui/candle/CandleContent';
import { useEffect, useState } from 'react';
import { ImSpinner10 } from 'react-icons/im';

const Meta = () => {
  const {id}=useParams();
  const [timeOut,setTimeOuter]=useState<boolean>(false);

  useEffect(()=>{
    setTimeout(()=>{
      setTimeOuter(true);
    },1000)
  },[])
  return (
    <div>
      <Helmet title="Meta"/>
      {
        timeOut ? (<div className='flex flex-col gap-3'>
          {/* head */}
      <CommonHead title='Exchange Meta And Candles'/>
      {/* candles chart */}
      <CandleContent exchangeSymbol={id}/>
      {/* meta card */}
      <MetaCard exchangeSymbol={id}/>
        </div>):(<div className="w-full h-screen flex items-center justify-center">
          <ImSpinner10 className="animate-spin text-main" size="100px" />
        </div>)
      }
    </div>
  )
}

export default Meta
