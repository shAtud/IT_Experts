import ContactIcon from "../Icons/ContactIcon";
import HomeIcon from "../Icons/HomeIcon";
import ProfilIcon from "../Icons/ProfilIcon";
import SearchIcon from "../Icons/SearchIcon";
import { membersData } from "../data";
import {Link} from 'react-scroll'
import { useRef,useEffect ,useState} from "react";

const Navbar = ({open,setOpen,footerRef}) =>{
    const [hidden,setHidden] = useState(false);
    const ref = useRef(null);
    useEffect(()=>{
        window.addEventListener("scroll", listenToScroll);
        return () => 
           window.removeEventListener("scroll", listenToScroll); 
    },[])
    useEffect(()=>{
       

            const handleMouseDown = e=>{
                  if(ref.current && !ref.current.contains(e.target)){
                         if(open){

                             setOpen(false);
                         }
                    
                  }
        
                }
                document.addEventListener('mousedown',handleMouseDown);
                
     
            return ()=>{

               document.removeEventListener('mousedown',handleMouseDown);
            }
            
        },[ref,open])
    const listenToScroll = e=>{
       
        const heightToHideFrom = document.body.offsetHeight- footerRef.current.getBoundingClientRect().height;
        const winScroll = 
        window.pageYOffset ||  document.documentElement.scrollTop;
    console.log(winScroll+window.innerHeight,heightToHideFrom)
           
        if (winScroll+window.innerHeight > heightToHideFrom) { 
           !hidden &&      // to limit setting state only the first time         
             setHidden(true);
        } else {
            setHidden(false);
          
        }  
    }
    const handleProfilClick =(e)=>{
      
        
       
        e.preventDefault();
       
        setOpen(!open);
      }
 
    return(
        <div className = {` ${hidden?'opacity-0 ':'opacity-100 '}  transition-colors duration-700 flex justify-center fixed bg-[#FAFBFF] shadow-lg backdrop-blur-[8px] w-[300px] h-[60px] bottom-[10px] left-[50%] translate-x-[-50%] rounded-[30px]  z-50 items-center space-x-4  `}
       
        >
            <div 
                className={`absolute flex flex-col w-[200px] min-h-[60px] bg-[#FAFBFF] shadow-sm shadow-[#5C4CFC] top-0  left-[50%] -translate-x-1/2 rounded-[5px] ${!open?'scale-0 translate-y-0':'sclae-100 translate-y-[-100%]'} transition-transform ease-in `}
                ref = {ref}    
            >
                        {
                            membersData.map(({url,fullName},index)=>{
                                return (
                                  <Link to={'profil'+index} spy={true} smooth={true} key={index}>  
                                  <div 
                                        className="flex w-full h-[40px]  space-x-4 items-center font-fontom px-1  bg-[#FAFBFF] hover:bg-[#5b4cfcc2] cursor-pointer "
                                        onClick={(e)=>setOpen(false)}
                                        
                                    
                                    >
                                        <img 
                                            src={url}
                                            className = 'w-[30px] h-[30px] rounded-[50%]'
                                        />
                                        <div>{fullName}</div>
                                    </div>
                                    </Link>
                                    
                                )
                            })
                        }
         
           
            </div>
            <Link to='home_section' spy={true} smooth={true}> 
            <HomeIcon 
                className='w-10 h-10 text-[#5C4CFC] hover:cursor-pointer hover:opacity-80 transition-colors ease-in' 
            />
            </Link>
              <Link to='services_section' spy={true} smooth={true}> 
            <SearchIcon 
                className='w-10 h-10 text-[#5C4CFC] hover:cursor-pointer hover:opacity-80 transition-colors ease-in' 
            />
            </Link>
            <ProfilIcon 
                className='w-10 h-10 text-[#5C4CFC] hover:cursor-pointer hover:opacity-80 transition-colors ease-in' 
                onClick={handleProfilClick}
            />
               <Link to='contact_section' spy={true} smooth={true}> 
            < ContactIcon 
                className='w-10 h-10 text-[#5C4CFC] hover:cursor-pointer hover:opacity-80 transition-colors ease-in'             
            />
            </Link>
        </div>
    )
}

export default Navbar;