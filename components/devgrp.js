const Devgrp = props =>{
    return(
        <div className='lg:h-[100vh] h-full w-[100%] font-fontom'>
        <div className='pt-6 text-[#5C4CFC] text-[70px] w-[100%] text-center'>IT Projet : PFE</div>
        <div className='flex lg:flex-row flex-col text-[30px] '>
          <div className='basis-1/2 w-[350px] max-w-min h-[365px] min-w-[350px] bg-white/80 shadow-xl rounded-xl backdrop-blur-md mt-16 mx-16'>
        </div>
          <div className='flex flex-col mt-16 ml-10'>
            <div className='mb-4 text-center mr-12'>{"Ce projet à été conçu pour faciliter la communication entre étudiants, enseignants et administration dans les projects pluridicplinaire / thèse d’option de diplôme"}</div>
            <div>Participants :</div>
            <div className='flex flex-row space-x-10 mt-2 mb-1'>
              <div>ASSOUL Sidali</div>
              <div>DEBZA Houda</div>
            </div>
            <div className='flex flex-row space-x-10'>
              <div>TOUATI Amel</div>
              <div>LAROUCI Ghezala</div>
            </div>
            <div className='flex flex-row  mt-4 space-x-2'>
              <div>Lien vers le projet : </div>
              <div>
                <a href="https://github.com/shAtud/PFE">Sur github</a></div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Devgrp;