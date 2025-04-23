"use client";

import {
  TextField,
  Button,
  IconButton,
  Drawer,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
} from "@mui/material";
import { Close } from "@mui/icons-material";

type Props = {
  open: boolean;
  onClose: () => void;
};

function CampaignForm({ open, onClose }: Props) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { width: "50vw", padding: 3 } }}
    >
      <Box className="flex justify-between items-center mb-4">
        <Typography variant="h6">Create Campaign</Typography>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </Box>

      <form className="space-y-4">
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Campaign Info
        </Typography>
        <TextField
          fullWidth
          label="Campaign Name"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Campaign Objective</InputLabel>
          <Select defaultValue="Traffic" label="Campaign Objective">
            <MenuItem value="Traffic">Traffic</MenuItem>
            <MenuItem value="Leads">Leads</MenuItem>
            <MenuItem value="Engagement">Engagement</MenuItem>
            <MenuItem value="App Install">App Install</MenuItem>
            <MenuItem value="Sales">Sales</MenuItem>
            <MenuItem value="Brand Awareness">Brand Awareness</MenuItem>
            <MenuItem value="Conversions">Conversions</MenuItem>
          </Select>
        </FormControl>
        <div className="flex gap-4 mb-2">
          <div className="flex-1">
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Budget Type</InputLabel>
              <Select defaultValue="Lifetime" label="Budget Type">
                <MenuItem value="Lifetime">Lifetime</MenuItem>
                <MenuItem value="Daily">Daily</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flex-1">
            <TextField
              fullWidth
              label="Budget Amount"
              type="number"
              variant="outlined"
              sx={{ mb: 2 }}
            />
          </div>
        </div>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>WhatsApp Number</InputLabel>
          <Select defaultValue="1234567890" label="WhatsApp Number">
            <MenuItem value="1234567890">+62 123-456-7890</MenuItem>
            <MenuItem value="0987654321">+62 987-654-3210</MenuItem>
            <MenuItem value="1122334455">+62 112-233-4455</MenuItem>
          </Select>
        </FormControl>
        <div className="flex gap-4 mb-2">
          <div className="flex-1">
            <TextField
              fullWidth
              label="Start Date"
              type="date"
              variant="outlined"
              sx={{ mb: 2 }}
            />
          </div>
          <div className="flex-1">
            <TextField
              fullWidth
              label="End Date"
              type="date"
              variant="outlined"
              sx={{ mb: 2 }}
            />
          </div>
        </div>
        <TextField
          fullWidth
          label="Locations"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <div className="flex gap-4 mb-2">
          <div className="flex-1">
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Min Age</InputLabel>
              <Select defaultValue="18" label="Min Age">
                {Array.from({ length: 66 }, (_, index) => index + 18).map(
                  (age) => (
                    <MenuItem key={age} value={age}>
                      {age}
                    </MenuItem>
                  )
                )}
              </Select>
            </FormControl>
          </div>
          <div className="flex-1">
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Max Age</InputLabel>
              <Select defaultValue="65" label="Max Age">
                {Array.from({ length: 47 }, (_, index) => index + 18).map(
                  (age) => (
                    <MenuItem key={age} value={age}>
                      {age}
                    </MenuItem>
                  )
                )}
                <MenuItem value="65+">65+</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Gender</InputLabel>
          <Select defaultValue="All" label="Gender">
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          label="Detail Targeting"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Video URL"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Website URL"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Primary Text"
          variant="outlined"
          multiline
          rows={2}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Headline"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Description"
          variant="outlined"
          multiline
          rows={2}
          sx={{ mb: 2 }}
        />
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Call To Action
        </Typography>
        <TextField
          fullWidth
          label="CTA Name"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="CTA Text"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Pre-filled Message"
          variant="outlined"
          multiline
          rows={2}
          sx={{ mb: 2 }}
        />
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#AD46FF",
              "&:hover": { backgroundColor: "#8A2BE2" },
            }}
          >
            Create
          </Button>
        </div>
      </form>
    </Drawer>
  );
}

export default CampaignForm;
