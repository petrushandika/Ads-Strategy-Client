"use client";

import { useState } from "react";
import { TextField, Button, IconButton } from "@mui/material";
import {
  FilterList,
  Add,
  Download,
  Sort,
  Edit,
  Delete,
} from "@mui/icons-material";

type TableToolbarProps = {
  onFilter: (filterText: string) => void;
  onSort: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onExport: () => void;
  onCreate: () => void;
};

export default function TableToolbar({
  onFilter,
  onSort,
  onEdit,
  onDelete,
  onExport,
  onCreate,
}: TableToolbarProps) {
  const [filterText, setFilterText] = useState("");

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilterText = e.target.value;
    setFilterText(newFilterText);
    onFilter(newFilterText);
  };

  return (
    <div className="flex justify-between items-center flex-wrap">
      <div className="flex items-center gap-4">
        <Button
          variant="outlined"
          startIcon={<FilterList />}
          className="capitalize hover:bg-gray-200 transition duration-300"
          onClick={() => onFilter(filterText)}
          sx={{
            borderColor: "#4A90E2",
            color: "#4A90E2",
            "&:hover": { borderColor: "#0066CC" },
          }}
        >
          Filter
        </Button>

        <Button
          variant="outlined"
          startIcon={<Sort />}
          className="capitalize hover:bg-gray-200 transition duration-300"
          onClick={onSort}
          sx={{
            borderColor: "#4A90E2",
            color: "#4A90E2",
            "&:hover": { borderColor: "#0066CC" },
          }}
        >
          Sort
        </Button>

        <Button
          variant="outlined"
          startIcon={<Edit />}
          className="capitalize hover:bg-gray-200 transition duration-300"
          onClick={onEdit}
          sx={{
            borderColor: "#F4A261",
            color: "#F4A261",
            "&:hover": { borderColor: "#D56B00" },
          }}
        >
          Edit
        </Button>

        <IconButton
          color="error"
          className="border rounded p-1.5 hover:bg-red-100 transition duration-200"
          onClick={onDelete}
          sx={{
            borderColor: "#F44336",
            "&:hover": {
              backgroundColor: "#FFCDD2",
              borderColor: "#D32F2F",
            },
          }}
        >
          <Delete />
        </IconButton>
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        <TextField
          variant="outlined"
          placeholder="Search"
          size="small"
          className="bg-white"
          sx={{
            borderColor: "#4A90E2",
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              "&:hover fieldset": { borderColor: "#4A90E2" },
            },
          }}
          value={filterText}
          onChange={handleFilterChange}
        />

        <Button
          variant="outlined"
          startIcon={<Download />}
          className="capitalize hover:bg-gray-200 transition duration-300"
          onClick={onExport}
          sx={{
            borderColor: "#AD46FF",
            color: "#AD46FF",
            "&:hover": { borderColor: "#AD46FF" },
          }}
        >
          Export
        </Button>

        <Button
          variant="contained"
          startIcon={<Add />}
          className="capitalize text-white"
          sx={{
            backgroundColor: "#AD46FF",
            "&:hover": {
              backgroundColor: "#AD46FF",
            },
            borderRadius: "8px",
          }}
          onClick={onCreate}
        >
          Create Campaign
        </Button>
      </div>
    </div>
  );
}
