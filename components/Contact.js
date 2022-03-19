const Contact = ({id}) =>{
    return(
        <div id={id} className='lg:h-[100vh] h-fit py-12 bg-[#F7FAFB] w-[100%] flex flex-col-reverse lg:flex-row font-fontom items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <div className='text-6xl text-[#5C4CFC]'>Contactez-nous :</div>
          <div className='flex flex-col-reverse lg:flex-row font-fontom items-center justify-center w-[70%]'>
            <div className='flex flex-col items-center justify-center text-center text-[28px]'>
              {"Vous avez rencontrer un problème, vous avez une proposition ou une question à nous poser nous somme là pour vous répondre, vous n’avez qu’a nous laisser un message."}
           <button className='bg-[#F55555] text-[28px] h-[50px] w-[290px] rounded-full shadow-sm mt-16'>Envoyer un message</button>
          </div>
          <img src='/796.png' className='object-contain mix-blend-darken w-[600px] flex items-center justify-center'/>
          </div>
        </div>
       </div> 
    )
}
export default Contact;