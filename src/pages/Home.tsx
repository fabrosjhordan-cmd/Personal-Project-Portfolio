import { Footer } from "../components/Footer"
import { HeroSection } from "../components/HeroSection"
import { NavBar } from "../components/NavBar"
import { Projects } from "../components/Projects"
import { Skills } from "../components/Skills"
import { ThemeToggle } from "../components/ThemeToggle"
import { useEffect } from "react"
import emailjs from '@emailjs/browser';

export const Home = () =>{
    useEffect(()=>{
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);
    
    return (
        <div>
            {/* Theme */}
            <ThemeToggle />

            {/* NavBar */}
                <NavBar />


            <div id="home" className="min-h-screen container bg-background text-foreground overflow-x-hidden">
            {/* Main Body */}
            <main> 
                <HeroSection />
                <Skills />
                <Projects />
            </main>
            </div>


            
            {/* Footer */}
            <Footer />
        </div>
    )
}