type DifficultySelectProp = {
    difficulty: string,
    changeDifficulty: (arg0: string) => void
}

export function DifficultySelect({ difficulty, changeDifficulty }:DifficultySelectProp) {
    const options = [
        // {value: '', text: 'Difficulty', disabled:true},
        {value: 'easy', text: 'Easy'},
        {value: 'medium', text: 'Medium'},
        {value: 'hard', text: 'Hard'},
    ];

    const handleChange = (e:any)=> {
        // console.log(e.target)
        changeDifficulty(e.target.value)
    }

    return (
        <div className="flex gap-3 margin-auto absolute top-4 right-4">
            <label htmlFor="difficulty" className="p-2">Difficulty:</label>
            <select id="difficulty" value={difficulty} onChange={handleChange} className="bg-zinc-800 border-green-800 border rounded-sm p-2 shadow-black shadow-md " >
                {options.map(option => (
                <option key={option.value} value={option.text}>
                    {option.text}
                </option>
                ))}
            </select>
        </div>
    )
}