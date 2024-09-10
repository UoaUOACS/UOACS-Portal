import { cn } from '@components/utils';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  label: string;
}
const IconButton = ({ icon, label, ...props }: IconButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        'flex select-none items-center justify-center gap-2 rounded-full bg-white p-2',
        props.className
      )}
    >
      <img src={icon} className="w-6" />
      <span>{label}</span>
    </button>
  );
};

export default IconButton;
