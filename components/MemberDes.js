import { useEffect } from 'react';
import { useImperativeHandle } from 'react/cjs/react.production.min';
import { membersData } from '../data';
const MemberDes =(props) =>{
  
    return(
        <div className='font-fontom' >
          {membersData.map((ele,index)=>{
            return(
              <div 
                className={`flex items-center justify-center lg:h-[100vh] h-full w-[100%] ${index %2 ===0 ?'flex-row':'flex-row-reverse'}`}
                key={index}
                id={'profil'+index}
                >
              <div className= {`lg:flex hidden basis-2/3 item center ${index %2 ===0 ?'ml-16':'mr-16'} ${index %2 ===0 ?'justify-start':'justify-end'}`}>
                <img src='/mem.png' height={800} width={900} className='object-contain'/>
              </div>
              <div className='relative mx-24 my-20 h-[600px] lg:w-[500px] lg:max-w-[500px] max-w-min min-w-[390px] rounded-[15px] shadow-white shadow-2xl bg-white flex flex-col basis-1/3 items-center justify-center'>
                    <div className='flex flex-row space-x-6 mt-6 ml-6'>
                      <div className=''>
                        <img src={ele.url} height={75} width={75} className='rounded-full'/>
                      </div>
                    <div className='flex flex-col'>
                      <div className='text-[#5C4CFC] pr-10 text-[38px]'>{ele.fullName}</div>
                      <div className='text-[#5C4CFC]/60 text-[25px]'>{ele.Email}</div>
                    </div>
                    </div>
                    <div className='flex flex-col mt-10 ml-6'>
                      <div className='text-[#5C4CFC] text-[25px] mb-1'>A propo de moi :</div>
                      <div className='pr-10 text-[22px]'>{ele.propo}</div>
                      <div className='text-[#5C4CFC] text-[25px] mb-1 mt-4'>Bio technique :</div>
                      <div className='pr-10 text-[22px]'>{ele.bio}</div>
                      <div className='flex flex-row mt-4'>
                        <div className='text-[#5C4CFC] text-[25px]'>Tlf/WhatsApp :</div>  
                        <div className='text-[#5C4CFC]/60 text-[22px]'>{ele.number}</div>
                      </div>
                    </div>   
              </div>
            </div>
            )
          })}
      </div>
    )
}
export default MemberDes;