type DifficultySelectProp = {
    difficulty: string,
    changeDifficulty: (arg0: string) => void
}

export function DifficultySelect({ difficulty, changeDifficulty }:DifficultySelectProp) {
    const options = [
        {value: '', text: 'Difficulty'},
        {value: 'easy', text: 'Easy'},
        {value: 'medium', text: 'Medium'},
        {value: 'hard', text: 'Hard'},
    ];

    const handleChange = (e:any)=> {
        // console.log(e.target)
        changeDifficulty(e.target.value)
    }

    return (
        <div className="">
            <select value={difficulty} onChange={handleChange} className="bg-zinc-800 border-green-800 border rounded-sm shadow-black shadow-md p-2 absolute top-4 right-4" >
                {options.map(option => (
                <option key={option.value} value={option.text}>
                    {option.text}
                </option>
                ))}
            </select>
        </div>
    )
}