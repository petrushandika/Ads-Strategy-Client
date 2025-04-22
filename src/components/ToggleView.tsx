import { ToggleButtonGroup, ToggleButton } from "@mui/material";

interface ToggleViewProps {
  view: "month" | "week" | "day";
  onChange: (
    event: React.MouseEvent<HTMLElement>,
    newView: "month" | "week" | "day"
  ) => void;
}

const ToggleView = ({ view, onChange }: ToggleViewProps) => (
  <ToggleButtonGroup
    value={view}
    exclusive
    onChange={onChange}
    size="small"
    color="primary"
  >
    <ToggleButton value="day">Day</ToggleButton>
    <ToggleButton value="week">Week</ToggleButton>
    <ToggleButton value="month">Month</ToggleButton>
  </ToggleButtonGroup>
);

export default ToggleView;
