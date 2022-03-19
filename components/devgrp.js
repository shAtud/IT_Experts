const Devgrp = props =>{
    return(
      <div className='h-full lg:h-[100vh] w-[100%] font-fontom flex flex-col space-y-8 py-16 lg:py-0 px-12'>
        <div className='text-[#5C4CFC] text-[70px] text-center'>IT Projet : PFE</div>
        <div className='flex flex-row lg:flex-nowrap items-center justify-center flex-wrap gap-8 text-[30px] '>
          <div className='basis-1/2 w-[350px] max-w-min h-[365px] min-w-[350px] bg-white/80 shadow-xl rounded-xl backdrop-blur-md'></div>
          <div className='flex flex-col space-y-6'>
            <div className=' text-center'>{"Ce projet à été conçu pour faciliter la communication entre étudiants, enseignants et administration dans les projects pluridicplinaire / thèse d’option de diplôme"}</div>
            <div>Participants :</div>
            <div className='flex flex-row space-x-10'>
              <div>ASSOUL Sidali</div>
              <div>DEBZA Houda</div>
            </div>
            <div className='flex flex-row space-x-10'>
              <div>TOUATI Amel</div>
              <div>LAROUCI Ghezala</div>
            </div>
            <div className='flex flex-row space-x-2'>
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