type ButtonProps = {
  children: string;
  onClick: () => void;
  className?: string;
};

export function Button(props: ButtonProps) {
  return (
    <button
      className={`bg-orange-400 hover:bg-orange-500 text-white py-2 px-3 rounded-md uppercase font-bold text-sm shadow-lg ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
