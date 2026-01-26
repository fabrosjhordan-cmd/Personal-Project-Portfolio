import { HeroSection } from "../components/HeroSection"
import { NavBar } from "../components/NavBar"
import { ThemeToggle } from "../components/ThemeToggle"

export const Home = () =>{
    
    return (
        <div className="min-h-screen container bg-background text-foreground overflow-x-hidden font-bubbler">
        {/* Theme */}
        <ThemeToggle />


        {/* NavBar */}
        <NavBar />


        {/* Main Body */}
        <main> 
        <HeroSection />
        </main>


        {/* Footer */}
        </div>
    )
}