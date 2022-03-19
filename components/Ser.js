import Image from 'next/image'

const Ser = props =>{
    const comp = [
        {
          title:'Construction  d’app / site web',
          url:'/s1.jpg'
        },
        {
          title:'Création du plan de votre site / app',
          url:'/s2.jpg'
        },
        {
          title:'UI/UX design',
          url:'/s3.jpg'
        },
        ]

    return(
        <div className='lg:h-[100vh] h-full w-full md:w-[100%] font-fontom bg-[#F7FAFB] flex flex-col space-y-12' id='services_section'>
          <div className='ml-12 text-6xl text-[#5C4CFC]'>Services</div>
            <div className=" flex flex-row flex-wrap gap-16 justify-center">
                {comp.map((el,index)=>{
                  return(
                    <div key={index} className="bg-[#C1CBFF]/80 min-w-[350px] h-[400px] w-[350px] rounded-[25px] shadow-xl shadow-stone-300 text-center flex-col flex items-center text-[25px]">
                      <div className='h-[100px] mt-6'>{el.title}</div>
                      <img src={el.url} className='object-contain h-[300px] w-[300px] flex justify-center'/> 
                    </div>
                        )
                    })}
            </div>
        </div>
    )
}
export default Ser;
