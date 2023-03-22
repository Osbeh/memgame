type ModalProps = {
    showModal:boolean,
    resetGame: (arg0:number) => void,
    cards: number
}

export default function Modal({ showModal, resetGame, cards }:ModalProps) {
    return (
        <div className={showModal ? 'block fixed z-10 left-0 top-0 w-full h-full bg-slate-500/75' : 'hidden'}>
            <div className="w-1/2 h-128 bg-zinc-700 text-green-600 m-auto mt-32 rounded-lg p-5">
                <h1 className="text-orange-600 font-extrabold text-6xl mb-6">Congratulations!</h1>
                <p>You win!</p>
                <button className="bg-slate-700 border border-orange-400 rounded-2xl mt-8 w-44 p-4 shadow-lg shadow-black hover:shadow-none hover:bg-slate-800/50 text-orange-600 text-xl" onClick={() =>resetGame(cards)}>Play again</button>
            </div>
        </div>
    )
}