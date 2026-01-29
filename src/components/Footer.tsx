import { useState } from "react"
import { BiLoader, BiPhoneCall } from "react-icons/bi"
import { FaFacebookSquare } from "react-icons/fa"
import { GrGithub } from "react-icons/gr"
import { IoIosSend } from "react-icons/io"
import { MdOutlineWorkOutline } from "react-icons/md"
import { SiIndeed } from "react-icons/si"
import { TbBrandGmail } from "react-icons/tb"

export const Footer = () =>{
    const [active, setActive] = useState(false);
    const [email, setEmail] = useState('')
    const [messageValue, setMessageValue] = useState('');


    const sendMessage = async (event: any) =>{
        event.preventDefault();
        setActive(true);

        setTimeout(()=>{
            setActive(false);
            setEmail('');
            setMessageValue('');
        }, 1000);

    }

    return (
        <footer id='details' className="overflow-x-hidden w-full bg-foreground/10 border border-foreground/30 pt-8 pb-9">
            <div className="container grid grid-cols-1 md:grid-cols-3">
           
                <div className="flex flex-col gap-4 text-foreground/60 mb-4">
                    <div className="text-left text-xl font-medium">
                        Links
                    </div>
                    <div className="footer-text">
                        <div className="rounded-full bg-primary/10 p-1">
                            <GrGithub size={24} className="text-primary"/> 
                        </div>
                        <a href='https://github.com/fabrosjhordan-cmd' target="_blank" className="underline">fabrosjhordan_cmd</a>
                    </div>
                    <div className="footer-text">
                        <div className="rounded-full bg-primary/10 p-1">
                            <FaFacebookSquare  size={24} className="text-primary"/> 
                        </div>
                        <a href='https://www.facebook.com/Heekiie' target="_blank" className="underline">Jhordan Astrero Fabros</a>
                    </div>
                    <div className="footer-text">
                        <div className="rounded-full bg-primary/10 p-1">
                            <MdOutlineWorkOutline  size={24} className="text-primary"/> 
                        </div>
                        <a href='https://ph.jobstreet.com/profiles/jhordan-fabros-FFvV2Vxnk9' target="_blank" className="underline">Jobstreet Profile</a>
                    </div>
                    <div className="footer-text">
                        <div className="rounded-full bg-primary/10 p-1">
                            <SiIndeed  size={24} className="text-primary"/> 
                        </div>
                        <a href='https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-homepage' target="_blank" className="underline">Indeed Profile</a>
                    </div>
                    
                </div>
                {/* 2nd Grid */}
                <div className="flex flex-col gap-4 text-foreground/60 mb-4">
                    <div className="text-left text-xl font-medium">
                        Contacts
                    </div>
                    
                    <div className="footer-text">
                        <div className="rounded-full bg-primary/10 p-1">
                        <TbBrandGmail size={24} className="text-primary"/> 
                        </div>
                        <a href='mailto:fabrosjhordan@gmail.com' className="underline">fabrosjhordan@gmail.com</a>
                        
                    </div>
                    <div className="footer-text">
                        <div className="rounded-full bg-primary/10 p-1">
                            <BiPhoneCall size={24} className="text-primary"/> 
                        </div>
                        <span className="underline">+63 929-542-3860</span>
                    </div>
                </div>

            {/* 3rd grid */}
            <div className=" gap-4 mb-4">
                <div className="text-left text-xl font-medium text-foreground/60">
                        Send a Message
                </div>
                <form onSubmit={()=>sendMessage(event)} className="flex flex-col space-y-9 h-full">
                    <div className="h-8 text-left font-bubbler">
                        <h1 className="text-xs mb-1">Email</h1>
                        <input 
                        onChange={(e)=> setEmail(e.target.value)}
                        value={email}
                        className="w-full border border-foreground/20 rounded-md p-2 focus:outline-hidden" 
                        required
                        placeholder="Your email address here" />
                    </div>
                    <div className="h-42 md:h-full text-left font-bubbler">
                        <h2 className="text-xs mb-1">Message</h2>
                        <textarea 
                        onChange={(e)=> setMessageValue(e.target.value)}
                        value={messageValue}
                        className="w-full h-full border border-foreground/20 rounded-md resize-none py-2 px-3 font-bubbler focus:outline-hidden" 
                        required
                        placeholder="Put your message here."
                        />
                    </div>
                    <div className="text-foreground/60">
                        <button 
                        className={`${active ? 'flex items-center justify-center gap-2 w-full bg-primary shadow-[0_0_10px_rgba(139,92,246,0.5)] rounded-full py-2' : 'project-button w-full flex items-center justify-center gap-2'}`}
                        disabled={active ? true : false}
                        >
                        {active ?  <BiLoader className="animate-spin infinite" /> : <IoIosSend />}
                        {active ? 'Sending...' : 'Send' }
                        </button>
                    </div>
                </form>
                </div>
            </div>

        </footer>
    )
}