import { Footer } from "../components/Footer"
import { HeroSection } from "../components/HeroSection"
import { NavBar } from "../components/NavBar"
import { Projects } from "../components/Projects"
import { Skills } from "../components/Skills"
import { ThemeToggle } from "../components/ThemeToggle"


export const Home = () =>{
    return (
        <div>
            {/* Theme */}
            <ThemeToggle />

            {/* NavBar */}
                <NavBar />


            <div id="home" className="min-h-screen container bg-background text-foreground overflow-x-hidden ">
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