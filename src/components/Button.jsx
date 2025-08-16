export default function Button({buttonName,onClick,disabled}){
    // console.log(props);
    return (
            <button 
            onClick={onClick}
            disabled={disabled}
            className="text-2xl border-solid border-[#5865da] bg-[#767ba8] p-2 rounded backdrop-blur-md hover:bg-[#5865da] transition duration-200">
                {buttonName}
            </button>
    )
}