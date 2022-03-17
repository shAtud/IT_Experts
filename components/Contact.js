const Contact = ({id}) =>{
    return(
        <div id={id} className='lg:h-[100vh] h-full bg-[#F7FAFB] w-[100%] flex flex-col-reverse lg:flex-row font-fontom md:pb-36 pb-16 items-center justify-center'>
        <div className='flex flex-col basis-3/4 items-center justify-center '>
          <div className='pt-16 ml-12 text-6xl mb-28 text-[#5C4CFC]'>Contactez-nous :</div>
          <div className='flex flex-col-reverse lg:flex-row font-fontom md:pb-36 pb-16 items-center justify-center'>
            <div className='flex flex-col basis-1/2 items-center justify-center '>
          <div className='sm:px-32 px-8 mb-16 text-center text-[28px]'>{"Vous avez rencontrer un problème, vous avez une proposition ou une question à nous poser nous somme là pour vous répondre, vous n’avez qu’a nous laisser un message."}</div>
          <button className='bg-[#F55555] text-[28px] h-[50px] w-[290px] rounded-full shadow-sm '>Envoyer un message</button>
        </div>
        <div className='mix-blend-darken basis-1/2 flex items-center justify-center'>
          <img src='/796.png' height={700} width={700} className='object-contain'/>
        </div>
      </div>
        </div>
       </div> 
    )
}
export default Contact;