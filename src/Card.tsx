import { GiCardJoker } from 'react-icons/gi'
 
type CardProps = {
    cardText: string,
    cardId: number,
    cardImage: JSX.Element,
    cardClick: (card:number, cardText:any, opened:boolean) => void,
    opened: boolean,
    difficulty: "Hard" | "Medium" | "Easy"
}



export default function Card({cardText, cardId, cardImage, cardClick, opened, difficulty}:CardProps) {

    let cardClass = ""
    if (difficulty === "Hard") {
        cardClass = "group lg:w-48 lg:h-48 md:w-28 md:h-28 sm:w-16 sm:h-16 [perspective:1000px]"
    } else if (difficulty === "Medium") {
        cardClass = "group lg:w-56 lg:h-56 md:w-40 md:h-40 sm:w-28 sm:h-28 [perspective:1000px]"
    } else {
        cardClass = "group lg:w-80 lg:h-80 md:w-56 md:h-56 sm:w-28 sm:h-28 [perspective:1000px]"
    }

    return (
        <div className="flex rounded-lg">
            <div className={cardClass}>
                <div data-testid="playcard" onClick={() => cardClick(cardId, cardText, opened)} className={opened ? "card flip" : "card"}>
                    <GiCardJoker size="auto"/>
                    {/* <div className="absolute inset-0 rounded-lg flex justify-center items-center text-green-200/50"></div> */}
                    <div className="absolute inset-0 text-orange-700 w-full h-full rounded-lg bg-slate-400 flex justify-center items-center [transform:rotateY(180deg)] [-webkit-backface-visibility:hidden] border border-pink-700">
                        {cardImage}
                    </div>
                </div>
            </div>
        </div>
    )
}