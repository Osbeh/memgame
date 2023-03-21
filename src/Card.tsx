type CardProps = {
    cardText: string,
    cardId: number,
    cardImage: JSX.Element,
    cardClick: (card:number, cardText:any, opened:boolean) => void,
    opened: boolean
}



export default function Card({cardText, cardId, cardImage, cardClick, opened}:CardProps) {

    return (
        <div className="flex border-pink-600 border bg-slate-600 rounded-lg">
            <div className="group w-56 h-56 [perspective:1000px]">
                <div onClick={() => cardClick(cardId, cardText, opened)} className={opened ? "card flip" : "card"}>
                    <div className="absolute inset-0"></div>
                    <div className="absolute inset-0 text-orange-700 w-full h-full rounded-lg bg-slate-400 flex justify-center items-center [transform:rotateY(180deg)] [backface-visibility:hidden] ">
                        {cardImage}
                    </div>
                </div>
                
            </div>

        </div>
    )
}