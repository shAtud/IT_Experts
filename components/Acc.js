import Image from 'next/image';
const Acc = props =>{
    return(
        <div className="flex lg:flex-row flex-col lg:h-[100vh] w-full sm:w-[100vw] bg-[#F7FAFB] h-full justify-center items-center"> 
            <img src='/acc.jpg' className='object-contain h-[700px] w-full mix-blend-darken lg:basis-2/3 flex items-center justify-center'/>
            <div className="lg:w-[450px] lg:max-w-[450px] max-w-min min-w-[420px] h-fit py-8 bg-white shadow-xl rounded-[25px] my-12 mx-12 relative font-fontom">
                <img src='/acc2.png' className='object-contain w-full rotate-[15deg] absolute items-center justify-center' />
                <div className='flex flex-col space-y-4 text-center mx-8'>
                    <div className='text-[55px] text-[#5C4CFC]'>
                    IT Experts
                    </div>
                    <div className='text-[28px]'>
                    {" IT Experts n’est pas qu’un nom c’est un fait sur la qualité."}
                    </div>
                    <div className='text-[25px]'>
                     {"  Bienvenu dans votre entreprise IT Experts , une entreprise spécialisé dans la creation de tout ce qui est web et application de l’etape conception jusqu’au site repondant à vos besoin."}
                    </div>
                    <div className='flex flex-row space-x-6 justify-center items-center text-white text-[25px]'>
                        <button className='h-[40] w-[110px] bg-[#D881F4] rounded-full'>Contact</button>
                        <button className='h-[40] w-[110px] bg-[#5C4CFC] rounded-full'>Service</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Acc;