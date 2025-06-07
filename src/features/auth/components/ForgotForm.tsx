"use client";
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

interface LoginFormData {
  name: string;
  email: string;
  password: string;
}

const ForgotForm = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange =
    (field: keyof LoginFormData) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
    };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-xs font-medium text-gray-700 mb-1"
        >
          Email<span className="text-red-500">*</span>
        </label>
        <TextField
          id="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange("email")}
          fullWidth
          required
          variant="outlined"
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              backgroundColor: "#f9fafb",
              "& fieldset": {
                borderColor: "#e5e7eb",
              },
              "&:hover fieldset": {
                borderColor: "#d1d5db",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#6366f1",
              },
            },
            "& .MuiInputBase-input": {
              padding: "10px 12px",
              fontSize: "14px",
            },
          }}
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            borderRadius: "10px",
            py: 1,
            background: "linear-gradient(90deg, #7C3AED 0%, #8B5CF6 100%)",
            color: "white",
            textTransform: "none",
            fontSize: "14px",
            fontWeight: 600,
            boxShadow: "0 4px 10px rgba(139, 92, 246, 0.3)",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "linear-gradient(90deg, #6D28D9 0%, #7C3AED 100%)",
              boxShadow: "0 6px 12px rgba(124, 58, 237, 0.4)",
            },
          }}
        >
          Send Instruction{" "}
        </Button>
      </div>
    </form>
  );
};

export default ForgotForm;
