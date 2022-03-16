import { useEffect } from 'react';
import { useImperativeHandle } from 'react/cjs/react.production.min';
import { membersData } from '../data';
const MemberDes =(props) =>{
  
    return(
        <div className='font-fontom' >
          {membersData.map((ele,index)=>{
            return(
              <div 
                className={`flex items-center justify-center h-full w-[100vw] ${index %2 ===0 ?'flex-row':'flex-row-reverse'}`}
                key={index}
                id={'profil'+index}
                >
              <div className='lg:flex hidden'>
                <img src='/mem.png' height={430} width={650} className='object-contain'/>
              </div>
              <div className='relative mx-24 my-20 h-[525px] w-[400px] min-w-[400px] rounded-[15px] shadow-white shadow-2xl bg-white flex flex-col'>
                    <div className='flex flex-row space-x-6 mt-6 ml-6'>
                      <div className=''>
                        <img src={ele.url} height={75} width={75} className='object-contain'/>
                      </div>
                    <div className='flex flex-col'>
                      <div className='text-[#5C4CFC] pr-10 text-[30px]'>{ele.fullName}</div>
                      <div className='text-[#5C4CFC]/60 text-[20px]'>{ele.Email}</div>
                    </div>
                    </div>
                    <div className='flex flex-col mt-10 ml-6'>
                      <div className='text-[#5C4CFC] text-[20px] mb-1'>A propo de moi :</div>
                      <div className='pr-10 text-[17px]'>{ele.propo}</div>
                      <div className='text-[#5C4CFC] text-[20px] mb-1 mt-4'>Bio technique :</div>
                      <div className='pr-10 text-[17px]'>{ele.bio}</div>
                      <div className='flex flex-row mt-4'>
                        <div className='text-[#5C4CFC] text-[20px]'>Tlf/WhatsApp :</div>  
                        <div className='text-[#5C4CFC]/60 text-[17px]'>{ele.number}</div>
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