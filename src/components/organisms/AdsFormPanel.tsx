import {
  Box,
  IconButton,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Grid,
  Button,
} from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

interface AdsFormPanelProps {
  openPanel: boolean;
  selectedDate: Date | null;
  title: string;
  startDate: Date | null;
  endDate: Date | null;
  status: string;
  category: string;
  description: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  setEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
  closePanel: () => void;
}

const AdsFormPanel = ({
  openPanel,
  selectedDate,
  title,
  startDate,
  endDate,
  status,
  category,
  description,
  setTitle,
  setStartDate,
  setEndDate,
  setStatus,
  setCategory,
  setDescription,
  handleSubmit,
  closePanel,
}: AdsFormPanelProps) => (
  <Box
    className="fixed top-0 right-0 w-1/2 h-full bg-white shadow-lg p-5 overflow-y-scroll"
    style={{
      transition: "transform 0.3s ease-in-out",
      transform: openPanel ? "translateX(0)" : "translateX(100%)",
    }}
  >
    <IconButton onClick={closePanel} className="absolute top-4 right-4">
      <ChevronRight />
    </IconButton>
    <Typography variant="h6">Ad Details</Typography>
    <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
      <TextField
        label="Title"
        fullWidth
        variant="outlined"
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Grid container spacing={2}>
        <Grid>
          <TextField
            label="Start Date"
            type="date"
            fullWidth
            variant="outlined"
            margin="normal"
            value={startDate ? startDate.toISOString().split("T")[0] : ""}
            onChange={(e) => setStartDate(new Date(e.target.value))}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid>
          <TextField
            label="End Date"
            type="date"
            fullWidth
            variant="outlined"
            margin="normal"
            value={endDate ? endDate.toISOString().split("T")[0] : ""}
            onChange={(e) => setEndDate(new Date(e.target.value))}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
      </Grid>

      <FormControl fullWidth variant="outlined" margin="normal">
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          label="Status"
        >
          <MenuItem value="Priority">Priority</MenuItem>
          <MenuItem value="Standard">Standard</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth variant="outlined" margin="normal">
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          label="Category"
        >
          <MenuItem value="Product">Product</MenuItem>
          <MenuItem value="Clinic">Clinic</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Description"
        fullWidth
        variant="outlined"
        margin="normal"
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Button
        className="rounded-full text-sm shadow-none hover:shadow-none bg-blue-600"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Save
      </Button>
    </form>
  </Box>
);

export default AdsFormPanel;
