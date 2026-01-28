import { useEffect, useState } from "react"

export const Dream = () =>{
    const [dreams, setDreams] = useState([]);

    useEffect(()=>{
        generateDream()
    }, [])

    const generateDream = () =>{
        // const numberOfDreams = (window.innerWidth * window.innerHeight) / 100000;
        const numberOfDreams = 5;
        const newDreams : any = [];

        for(let i : any = 0; i < numberOfDreams; i++){
            newDreams.push({
                id:   i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animtionDuration: Math.random() * 3 + 9
            })
        }
        setDreams(newDreams);
    }

    return( 
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {dreams.map((dream : any)=>(
                <div key={dream.id} className="dream animate-dream"
                    style={{
                        width: dream.size * 50 + 'px',
                        height: dream.size + 'px',
                        left: dream.x + '%',
                        top: dream.y + '%',
                        animationDelay: dream.delay,
                        animationDuration: dream.animationDuration + 's'
                    }}
                />
            ))

            }
        </div>
    )
}