

function InputBox({value,onChange,placeholder}) {
    return <input className="w-full focus:outline-none px-1" type="text" placeholder={placeholder} value={value} onChange={onChange}></input>
}


export default InputBox;