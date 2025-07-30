type IconProps = {
  name: string;
  className?: string;
};

export const Icon = ({ name, className = "" }: IconProps) => {
  return <i className={`bi bi-${name} ${className}`}></i>;
};
