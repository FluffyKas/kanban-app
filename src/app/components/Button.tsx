interface ButtonProps {
  text: string;
  type: 'primary' | 'secondary' | 'destructive';
  size: 'small' | 'large';
  clickHandler: () => void;
}

const Button = ({ text, type, size, clickHandler }: ButtonProps) => {
  return (
    <button
      className={`rounded-3xl font-bold
      ${type === 'primary' && 'bg-kanban_purple text-white hover:bg-kanban_purple_hover'} 
      ${type === 'secondary' && 'bg-kanban_grey_100 text-kanban_purple hover:bg-kanban_purple_grey_hover'} 
      ${type === 'destructive' && 'bg-kanban_red text-white hover:bg-kanban_red_hover'}
      ${size === 'large' && 'text-[0.9375rem] py-[0.9rem]'} 
      ${size === 'small' && 'text-[0.8125rem] py-2'}  
      duration-200 ease-out`}
      type="button"
      onClick={() => {
        clickHandler;
      }}
    >
      {text}
    </button>
  );
};

export default Button;
