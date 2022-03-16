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
        <div className='h-full pb-32 w-full md:w-[100vw] font-fontom bg-[#F7FAFB]'>
          <div className='pt-16 ml-12 text-6xl mb-28 text-[#5C4CFC]'>Services</div>
            <div className="gap-24 flex flex-row flex-wrap place-items-center justify-center">
                    {comp.map((el,index)=>{
                        return(
                        <div key={index} className="bg-[#C1CBFF]/80 min-w-[350px] h-[400px] w-[350px] rounded-[25px] shadow-xl shadow-stone-300 text-center flex-col flex items-center">
                        <div className='text-[25px] text-center mt-6 h-[100px]'>{el.title}</div>
                        <div className='h-[300px] w-[300px] flex justify-center'>
                        <img src={el.url} className='object-contain'/>
                        </div>
                    </div>
                        )
                    })}
            </div>
        </div>
    )
}
export default Ser;
