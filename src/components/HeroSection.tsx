import { BsArrowDown } from "react-icons/bs"


export const HeroSection = () =>{
    return (
        <section id='hero' className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">Jhordan </span>
                        <span className="opacity-0 animate-fade-in-delay-2">Fabros</span>
                    </h1>
                    <p className="opacity-0 animate-fade-in-delay-3 text-lg">
                        A Junior Software Engineer specializing on ReactJS and Typescript creating apps which is responsive and dynamic.
                    </p>

                    <div>
                        <a href="#projects" className="opacity-0 hero-button animate-fade-in-delay-4">View My Projects</a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-7 flex flex-col items-center animate-bounce">
                Scroll
                <span><BsArrowDown className="text-primary" /></span>
            </div>
        </section>
    )
}