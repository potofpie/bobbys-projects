import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

const SvgComponent = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} {...props}>
    <circle cx={5} cy={5} r={5} fill="#84de02" />
  </svg>
);
export default SvgComponent;

export const NewFlair = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <SvgComponent />
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Active</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
