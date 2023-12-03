import { cn } from "@/lib/utils";

const CustomCard = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  props?: any;
}) => {
  return (
    <div
      {...props}
      className={cn(
        " bg-secondary  h-full p-5 rounded-3xl  transition-all",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CustomCard;
