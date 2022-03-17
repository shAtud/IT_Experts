import Image from 'next/image'
const Footer = ({footerRef}) =>{
    return(
        <div ref={footerRef} className='py-4 h-full w-[100%] bg-[#968CFF] flex flex-col-reverse space-y-10 lg:space-y-0 lg:flex-row-reverse text-white font-fontom'>
         <div className='flex flex-col basis-3/5 text-[28px] space-y-3 justify-center place-items-end mr-10'>
          <div className='flex flex-row flex-wrap space-x-20'>
              <a>Acceuil</a>
              <a>Services</a>
              <a>IT Project</a> 
            </div>
            <div className='flex flex-row space-x-16'>
              <a>{"Membre d'équipe"}</a>
              <a>Contactez-nous</a>
            </div>
         </div>
          <div className='flex items-center justify-center basis-1/2 text-[28px]'>
            <table>
              <tr>
                <td className='pr-32'>
                  <a href='https://www.instagram.com' className='flex flex-row-reverse'>
                    <div className='pl-3'>Instgram</div>
                    <img src='/inst.png' height={33} width={33} className='object-contain'/>
                  </a>
                </td>
                <td>
                  <a href='https://github.com' className='flex flex-row-reverse'>
                    <div className='pl-3'>Github</div>
                    <img src='/github.png' height={33} width={40} className='object-contain'/>
                  </a>
                </td>
              </tr>
              <tr>
                <td className='pr-32'>
                  <a href='https://web.facebook.com' className='flex flex-row-reverse'>
                    <div className='pl-3'>Facebook</div>
                    <img src='/fb.png' height={35} width={35}className='object-contain'/>
                  </a>
                </td>
                <td>
                  <a href='https://discord.com' className='flex flex-row-reverse'>
                    <div className='pl-3'>Discord</div>
                    <img src='/disor.png' height={39} width={39} className='object-contain'/>
                  </a>
                </td>
              </tr>
            </table>
          </div>
          <div className='basis-1/5 flex items-center justify-center text-[32px]'>Lien scociaux :</div>
      </div>
    )
}
export default Footer;