import "./Chip.scss";

interface ChipProps {
  completed: boolean;
}

export const Chip = ({ completed }: ChipProps) => {
  const stateClass = `chip--${completed ? "complete" : "inProgress"}`;

  return (
    <div className={`chip ${stateClass}`}>
      {completed ? "Complete" : "In Progress"}
    </div>
  );
};
