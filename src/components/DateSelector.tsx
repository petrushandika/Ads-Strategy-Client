import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface DateSelectorProps {
  month: number;
  year: number;
  onMonthChange: (event: SelectChangeEvent<number>) => void;
  onYearChange: (event: SelectChangeEvent<number>) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const DateSelector = ({
  month,
  year,
  onMonthChange,
  onYearChange,
  onPrevMonth,
  onNextMonth,
}: DateSelectorProps) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="flex items-center gap-2">
      <IconButton onClick={onPrevMonth}>
        <ChevronLeft />
      </IconButton>

      <FormControl size="small">
        <Select
          value={month}
          onChange={onMonthChange}
          className="bg-white min-w-[120px]"
        >
          {months.map((m, i) => (
            <MenuItem key={m} value={i}>
              {m}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl size="small">
        <Select
          value={year}
          onChange={onYearChange}
          className="bg-white min-w-[100px]"
        >
          {Array.from({ length: 10 }, (_, i) => year - 5 + i).map((y) => (
            <MenuItem key={y} value={y}>
              {y}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <IconButton onClick={onNextMonth}>
        <ChevronRight />
      </IconButton>
    </div>
  );
};

export default DateSelector;
