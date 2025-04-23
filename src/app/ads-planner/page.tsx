"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from "@mui/material";
import { useEffect, useState } from "react";
import TableToolbar from "@/components/molecules/TableToolbar";
import * as XLSX from "xlsx";
import CampaignForm from "@/components/organisms/CampaignForm";

type ColumnWidths = {
  "Campaign Name": number;
  "Campaign Objective": number;
  "Budget Type": number;
  "Budget Amount": number;
  WhatsApp: number;
  "Start Date": number;
  "End Date": number;
  Location: number;
  Age: number;
  Gender: number;
  "Detail Targeting": number;
  "Video URL": number;
  "Website URL": number;
  "Primary Text": number;
  Headline: number;
  Description: number;
};

const AdsPlanner = () => {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [allSelected, setAllSelected] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [data, setData] = useState(dummyData);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenForm = () => {
    setOpenDrawer(true);
  };

  const handleCloseForm = () => {
    setOpenDrawer(false);
  };

  useEffect(() => {
    const filtered = dummyData.filter((item) =>
      item.values.some((v) =>
        v.toString().toLowerCase().includes(filterText.toLowerCase())
      )
    );
    setData(filtered);
  }, [filterText]);

  const handleSelectAll = () => {
    setAllSelected((prev) => !prev);
    if (!allSelected) setSelectedRow(null);
  };

  const handleRowSelect = (id: number) => {
    setSelectedRow(selectedRow === id ? null : id);
  };

  const handleSort = () => {
    const sorted = [...data].sort((a, b) => {
      const nameA = a.values[0].toLowerCase();
      const nameB = b.values[0].toLowerCase();
      return sortAsc ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });
    setData(sorted);
    setSortAsc(!sortAsc);
  };

  const handleDelete = () => {
    if (selectedRow) {
      const filtered = data.filter((item) => item.id !== selectedRow);
      setData(filtered);
      setSelectedRow(null);
    }
  };

  const handleExport = () => {
    const wsData = [headers, ...data.map((row) => row.values)];
    const ws = XLSX.utils.aoa_to_sheet(wsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Campaigns");
    XLSX.writeFile(wb, "ads_campaigns.xlsx");
  };

  const headers = [
    "Campaign Name",
    "Campaign Objective",
    "Budget Type",
    "Budget Amount",
    "WhatsApp",
    "Start Date",
    "End Date",
    "Location",
    "Age",
    "Gender",
    "Detail Targeting",
    "Video URL",
    "Website URL",
    "Primary Text",
    "Headline",
    "Description",
  ];

  const columnWidths: ColumnWidths = {
    "Campaign Name": 150,
    "Campaign Objective": 175,
    "Budget Type": 120,
    "Budget Amount": 130,
    WhatsApp: 150,
    "Start Date": 130,
    "End Date": 130,
    Location: 180,
    Age: 120,
    Gender: 120,
    "Detail Targeting": 250,
    "Video URL": 250,
    "Website URL": 250,
    "Primary Text": 250,
    Headline: 250,
    Description: 350,
  };

  return (
    <div className="flex flex-col gap-5 mb-20">
      <h1 className="text-black text-xl font-semibold">Ads Planner</h1>
      <TableToolbar
        onFilter={setFilterText}
        onSort={handleSort}
        onEdit={() => console.log("Edit")}
        onDelete={handleDelete}
        onExport={handleExport}
        onCreate={handleOpenForm}
      />
      <CampaignForm open={openDrawer} onClose={handleCloseForm} />

      <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
        <Table
          sx={{
            tableLayout: "fixed",
            minWidth: "1300px",
            borderCollapse: "collapse",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  width: 50,
                  position: "sticky",
                  left: 0,
                  zIndex: 2,
                  backgroundColor: "#f3f4f6",
                  border: "1px solid #EEE",
                  padding: 0,
                  textAlign: "center",
                }}
              >
                <Checkbox checked={allSelected} onChange={handleSelectAll} />
              </TableCell>
              {headers.map((header, index) => (
                <TableCell
                  key={index}
                  sx={{
                    width: columnWidths[header as keyof ColumnWidths],
                    whiteSpace: "nowrap",
                    fontWeight: "bold",
                    border: "1px solid #EEE",
                    backgroundColor: "#f3f4f6",
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell
                  sx={{
                    width: 50,
                    position: "sticky",
                    left: 0,
                    backgroundColor: "#fff",
                    zIndex: 1,
                    border: "1px solid #EEE",
                    padding: 0,
                    textAlign: "center",
                  }}
                >
                  <Checkbox
                    checked={selectedRow === row.id || allSelected}
                    onChange={() => handleRowSelect(row.id)}
                  />
                </TableCell>
                {row.values.map((value, index) => (
                  <TableCell
                    key={index}
                    sx={{
                      width: columnWidths[headers[index] as keyof ColumnWidths],
                      whiteSpace: "normal",
                      wordBreak: "break-word",
                      border: "1px solid #EEE",
                    }}
                  >
                    {index === 0 ? (
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-block w-3 h-3 rounded-full ${getStatusColor(
                            row.status
                          )} ${row.status !== "inactive" ? "blinking" : ""}`}
                          style={{ minWidth: "12px", minHeight: "12px" }}
                        ></span>
                        {value}
                      </div>
                    ) : (
                      value
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const dummyData = [
  {
    id: 1,
    values: [
      "Summer Promo",
      "Traffic",
      "Lifetime",
      "1000",
      "+6281234567890",
      "1 Apr 2025",
      "30 Apr 2025",
      "Jakarta, Bandung",
      "18 - 35",
      "All",
      "Food lovers, Travelers",
      "https://video.example.com/summer.mp4",
      "https://yourbrand.com/promo",
      "Check out our hottest deals this summer!",
      "Hot Summer Sale!",
      "Limited time only. Don't miss out!",
    ],
    status: "active",
  },
  {
    id: 2,
    values: [
      "Ramadhan Deals",
      "Conversions",
      "Daily",
      "500",
      "+6289876543210",
      "10 Mar 2025",
      "10 Apr 2025",
      "Surabaya, Medan",
      "25 - 45",
      "Male",
      "Online shoppers, Gadget Enthusiasts",
      "https://video.example.com/ramadhan.mp4",
      "https://yourbrand.com/ramadhan",
      "Exclusive Ramadhan offers just for you.",
      "Special Ramadhan Promo",
      "Shop now and save big before Eid.",
    ],
    status: "pending",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-500";
    case "inactive":
      return "bg-red-500";
    case "pending":
      return "bg-orange-500";
    default:
      return "bg-gray-500";
  }
};

export default AdsPlanner;
