import { useEffect, useState } from "react"
import { CiCloudMoon, CiSun } from "react-icons/ci"

export const ThemeToggle = () =>{
    const [isDarkMode, setIsDarkMode] = useState(true)
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(()=>{
        const storedTheme = localStorage.getItem('theme') || 'dark';
        if(storedTheme === 'dark'){
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        }else{
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
        const handleScroll = () =>{
            setIsScrolled(window.scrollY > 10);
        }
        window.addEventListener('scroll', handleScroll);
        return ()=> window.removeEventListener('scroll', handleScroll)
    }, []);
    
    const ToggleTheme = () =>{
        if(isDarkMode){
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        }else{
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark')
            setIsDarkMode(true);
        }
    }

    return (
    <button onClick={ToggleTheme} className={`fixed max-sm:top-5 max-sm:right-1 ${isScrolled ? 'top-2' : 'top-3'} z-0 right-7 z-50 p-2 rounded-full transition-all duration-300 focus:outline-hidden`}>
        {isDarkMode ?  <CiCloudMoon className="w-6 h-6 text-blue-700" /> : <CiSun className="w-6 h-6 text-yellow-600"/>}
    </button>)
}