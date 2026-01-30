import { useEffect, useState } from "react"
import { BiMenu, BiX } from "react-icons/bi";


const NavLinks = [
    {href: '#hero' , label: 'Home'},
    {href: '#skills' , label: 'Skills'},
    {href: '#projects' , label: 'Projects'},
]

export const NavBar = () =>{
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(()=>{
        const handleScroll = () =>{
            setIsScrolled(window.scrollY > 10);
        }
        window.addEventListener('scroll', handleScroll);
        return ()=> window.removeEventListener('scroll', handleScroll)
    }, [])

    return(
            <nav className={`fixed w-full z-40 transition-all duration-300 font-bubbler ${isScrolled ? 'py-5 bg-background/80 backdrop-blur-md shadow-xs' : 'py-5'}`}>
            <div className="container flex items-center justify-between">
                <a href='#hero' className="text-xl font-bold text-primary flex items-center">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Fabros'</span> Portfolio
                    </span>
                </a>
                {/* Large  */}
                <div className="mx-auto hidden md:flex space-x-8">
                    {NavLinks.map((link, key) =>(
                        <a key={key} href={link.href} className="text-foreground/80 hover:text-primary hover:text-glow transition-colors duration-200">
                            {link.label}
                        </a>
                    ))
                    }
                </div>
                
                {/* Small */}
                <button className='md:hidden p-2 text-foreground z-50' aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}>{isMenuOpen ? <BiX onClick={()=>{setIsMenuOpen(false)}} className="h-6 w-6"/> : <BiMenu onClick={()=>{setIsMenuOpen(true)}} className="h-6 w-6" />}</button>
                <div className={`fixed inset-0 bg-background/95 backdrop-blur-xs z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    <div className="flex flex-col space-y-8 text-xl">
                        {NavLinks.map((link, key) =>(
                            <a key={key} href={link.href} onClick={()=>setIsMenuOpen(false)} className="text-foreground/80 hover:text-primary hover:text-glow transition-colors duration-200">
                                {link.label}
                            </a>
                        ))
                    }
                    </div>
                </div>
            </div>


            </nav>
            
    )
}
