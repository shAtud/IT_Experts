import { useEffect } from 'react';
import { useImperativeHandle } from 'react/cjs/react.production.min';
import { membersData } from '../data';
const MemberDes =(props) =>{
  
    return(
        <div className='font-fontom flex flex-col' >
          {membersData.map((ele,index)=>{
            return(
              <div className={`flex justify-center items-center h-fit py-12 lg:h-[100vh] w-[100%] lg:space-x-16 ${index %2 ===0 ?'flex-row':'flex-row-reverse'}`} key={index}
                id={'profil'+index}>
                  <img src='/mem.png' className= {`h-[800px] w-[800px] lg:flex hidden item center object-contain mx-16 ${index %2 ===0 ?'justify-start':'justify-end'}`}/>
                  <div className='h-fit py-12 w-[400px] max-w-min min-w-[390px] rounded-[15px] shadow-white shadow-2xl bg-white flex flex-col items-center space-y-8'>
                    <div className='flex space-x-8 items-center '>
                      <img src={ele.url}  className='rounded-full w-[60px] h-[60px] object-contain'/>
                      <div className='flex flex-col'>
                        <div className='text-[#5C4CFC] pr-10 text-[30px]'>{ele.fullName}</div>
                        <div className='text-[#5C4CFC]/60 text-[25px]'>{ele.Email}</div>
                      </div>
                    </div>
                      <div className='flex flex-col space-y-4 pl-4'>
                        <div className='text-[#5C4CFC] text-[25px]'>A propo de moi :</div>
                        <div className='pr-10 text-[18px]'>{ele.propo}</div>
                        <div className='text-[#5C4CFC] text-[25px]'>Bio technique :</div>
                        <div className='pr-10 text-[18px]'>{ele.bio}</div>
                        <div className='flex flex-row space-x-4'>
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