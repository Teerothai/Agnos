interface ButtonProps {
    text: string
    clickEvent: () => void
    style: {}
}
  
  export default function Button({
    text,
    clickEvent,
    style
  }: ButtonProps): JSX.Element {
    return (
        <button 
            key="next" 
            onClick={clickEvent} 
            className="border border-solid border-blue-500 rounded-2xl px-15 py-15 w-[12%] h-auto bg-blue-500 cursor-pointer transition duration-300 ease-in-out text-white font-bold text-20px m-side bottom-[2rem] absolute"
            style={style}>
                {text}
        </button>
    );
  }
  