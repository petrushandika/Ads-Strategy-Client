"use client";
import React, { useState } from "react";
import {
  Button,
  TextField,
  Divider,
  Checkbox,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface ResetFormData {
  password: string;
  confirmPassword: string;
}

const ResetForm = () => {
  const [formData, setFormData] = useState<ResetFormData>({
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange =
    (field: keyof ResetFormData) =>
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

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Password Field with Toggle */}
      <div>
        <label
          htmlFor="password"
          className="block text-xs font-medium text-gray-700 mb-1"
        >
          Password<span className="text-red-500">*</span>
        </label>
        <TextField
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your new password"
          value={formData.password}
          onChange={handleChange("password")}
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
              paddingRight: "40px", // space for icon
            },
            "& .MuiOutlinedInput-notchedOutline": {
              paddingRight: "40px",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <button
                  type="button"
                  onClick={handleClickShowPassword}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showPassword ? (
                    <VisibilityOff sx={{ fontSize: "18px" }} />
                  ) : (
                    <Visibility sx={{ fontSize: "18px" }} />
                  )}
                </button>
              </InputAdornment>
            ),
          }}
        />
      </div>

      {/* Confirm Password Field with Toggle */}
      <div>
        <label
          htmlFor="password"
          className="block text-xs font-medium text-gray-700 mb-1"
        >
          Confirm Password<span className="text-red-500">*</span>
        </label>
        <TextField
          id="confirm-password"
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm your new password"
          value={formData.confirmPassword}
          onChange={handleChange("confirmPassword")}
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
              paddingRight: "40px", // space for icon
            },
            "& .MuiOutlinedInput-notchedOutline": {
              paddingRight: "40px",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <button
                  type="button"
                  onClick={handleClickShowConfirmPassword}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showConfirmPassword ? (
                    <VisibilityOff sx={{ fontSize: "18px" }} />
                  ) : (
                    <Visibility sx={{ fontSize: "18px" }} />
                  )}
                </button>
              </InputAdornment>
            ),
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
          Reset Password
        </Button>
      </div>
    </form>
  );
};

export default ResetForm;
