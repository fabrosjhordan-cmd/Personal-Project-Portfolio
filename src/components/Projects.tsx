import { BsGithub } from "react-icons/bs"
import { ImNewTab } from "react-icons/im"


const projects =[
    {title: 'Sample Shoe Store', image: '/shoe_store_sample_pic.png', tags: ['Typescript', 'ReactJS', 'HTML'], intro: 'A website that lets the users purchase footwares/shoes through online.', vercel: 'https://shoe-sample-store.vercel.app/', github: 'https://github.com/fabrosjhordan-cmd/Shoe-Sample-Store'},

    {title: 'Simple Quiz Game', image: '/quiz_game_pic.png', tags: ['HTML', 'Javascript'], intro: 'A game to test your knowledge with randomized questions ', vercel: 'https://quiz-game-theta-beryl.vercel.app/', github: 'https://github.com/fabrosjhordan-cmd/quiz-game'},

    {title: 'Weather App', image: '/weather_app.png', tags: ['HTML', 'Javascript'], intro: 'An application that uses API calls in Open Weather Map website', vercel: '', github: 'https://github.com/fabrosjhordan-cmd/weatherapp'},

    {title: 'Expense Tracker', image: '/expense_tracker_pic.png', tags: ['HTML', 'Javascript', 'MySQL'], intro: 'An application that lets the user manage their finance; record their expenses and incomes', vercel: '', github: 'https://github.com/fabrosjhordan-cmd/expensetracker'},

     {title: 'Simple Blog', image: '/simple_blog_pic.png', tags: ['Typescript', 'Supabase/PostgreSQL'], intro: 'A Simple Blog made by using ReactJS and Supabase with Tailwind styling.', vercel: 'https://simpleblog-puce.vercel.app/', github: 'https://github.com/fabrosjhordan-cmd/simple-blog-react-redux' },
]

export const Projects = () =>{
    return (
        <section id="projects" className="relative px-4 py-24 bg-primary-foreground/1 mb-24 rounded-xl">
            <h1 className="font-bold text-5xl text-primary mb-12">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((repo, key)=>(
                    <div key={key} className="relative group bg-card rounded-lg overflow-hidden shadow-xs card-hover px-2 py-1">
                        <div className="h-48 overflow-hidden mb-4">
                            <img src={repo.image} className="w-full h-full rounded-md object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>
                        <div className="mb-3 font-bold">
                            {repo.title}
                        </div>

                        <div className="flex flex-wrap gap-1 items-center mb-3">
                            {repo.tags.map((tag, index)=>(
                                <div key={index} className="px-3 py-1 bg-primary-foreground/10 border border-foreground/40 rounded-full">
                                    {tag}
                                </div>
                            ))
                            }
                        </div>
                        <div className="mb-12">
                            {repo.intro}
                        </div>

                        <div className="flex flex-wrap gap-3 py-2 px-1">  
                            {repo.vercel === '' ?
                                '' 
                                :
                                <a href={repo.vercel} target="_blank">
                                    <ImNewTab size={20}   />
                                </a> 
                            }
                            {repo.github === '' ?
                                '' 
                                :
                                <a href={repo.github} target="_blank">
                                    <BsGithub size={20}  />
                                </a> 
                            }
                        </div>
                        
                    </div>
                ))
                }
            </div>
        </section>
    )    
}