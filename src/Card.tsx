type CardProps = {
    cardText: string,
    cardId: number,
    cardImage: JSX.Element,
    cardClick: (card:number, cardText:any, opened:boolean) => void,
    opened: boolean,
    difficulty: string
}



export default function Card({cardText, cardId, cardImage, cardClick, opened, difficulty}:CardProps) {

    let cardClass = ""
    if (difficulty === "Hard") {
        cardClass = "group lg:w-48 lg:h-48 md:w-24 md:h-24 sm:w-16 sm:h-16 [perspective:1000px]"
    } else if (difficulty === "Medium") {
        cardClass = "group lg:w-56 lg:h-56 md:w-36 md:h-36 sm:w-28 sm:h-28 [perspective:1000px]"
    } else {
        cardClass = "group lg:w-68 lg:h-68 md:w-56 md:h-56 sm:w-28 sm:h-28 [perspective:1000px]"
    }

    return (
        <div className="flex rounded-lg">
            <div className={cardClass}>
                <div onClick={() => cardClick(cardId, cardText, opened)} className={opened ? "card flip" : "card"}>
                    <div className="absolute inset-0"></div>
                    <div className="absolute inset-0 text-orange-700 w-full h-full rounded-lg bg-slate-400 flex justify-center items-center [transform:rotateY(180deg)] [backface-visibility:hidden] ">
                        {cardImage}
                        <div className="lg:h-1 md:h-1 sm:w-1"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}