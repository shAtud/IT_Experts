import Image from 'next/image';
const Acc = props =>{
    return(
        <div className="flex lg:flex-row flex-col lg:h-[100vh] w-full sm:w-[100%] bg-[#F7FAFB] h-full justify-center items-center">
            <div className="mix-blend-darken">
                <img src='/acc.jpg' className='object-contain h-[541px] w-[811px]'/>
            </div>
            <div className="w-[380px] h-[560px] min-w-[380px] bg-white shadow-xl rounded-[25px] my-12 mx-12 relative font-fontom">
                <div className='rotate-[15deg] absolute h-full w-full items-center justify-center'>
                    <img src='/acc2.png' className='object-contain h-full w-full' />
                </div>
                <div className='text-[55px] mt-4 mb-2 text-[#5C4CFC] text-center'>
                IT Experts
                </div>
                <div className='text-[28px] text-center mx-16'>
               {" IT Experts n’est pas qu’un nom c’est un fait sur la qualité."}
                </div>
                <div className='text-[25px] text-center mx-4 mt-2 mb-6'>
              {"  Bienvenu dans votre entreprise IT Experts , une entreprise spécialisé dans la creation de tout ce qui est web et application de l’etape conception jusqu’au site repondant à vos besoin."}
                </div>
                <button className='h-[40] w-[110px] text-[25px] bg-[#D881F4] text-white rounded-full ml-20 mr-8'>Contact</button>
                <button className='h-[40] w-[110px] text-[25px] bg-[#5C4CFC] text-white rounded-full'>Service</button>
            </div>
        </div>
    )
}
export default Acc;