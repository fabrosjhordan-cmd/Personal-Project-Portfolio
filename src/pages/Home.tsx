import { NavBar } from "../components/NavBar"
import { ThemeToggle } from "../components/ThemeToggle"

export const Home = () =>{
    return (
        <div className="min-h-screen container bg-background text-foreground overflow-x-hidden">
        {/* Theme */}
        <ThemeToggle />
        {/* NavBar */}
        <NavBar />
        {/* Skills */}

        {/* Projects */}

        {/* Footer */}
        </div>
    )
}