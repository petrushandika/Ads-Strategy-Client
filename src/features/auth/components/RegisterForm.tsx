"use client";
import React, { useState } from "react";
import { Button, TextField, Divider, InputAdornment } from "@mui/material";
import { Google, Visibility, VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/navigation";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

const RegisterForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange =
    (field: keyof RegisterFormData) =>
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

  const handleGoogleSignUp = () => {
    console.log("Google sign up clicked");
    // Handle Google sign up logic here
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Google Sign Up Button */}
      <Button
        variant="outlined"
        fullWidth
        onClick={handleGoogleSignUp}
        startIcon={
          <Google
            sx={{
              color: "#DB4437",
            }}
          />
        }
        sx={{
          py: 1,
          borderColor: "#e5e7eb",
          borderRadius: "10px",
          color: "#374151",
          textTransform: "none",
          fontSize: "14px",
          fontWeight: 500,
          "&:hover": {
            borderColor: "#d1d5db",
            backgroundColor: "#f9fafb",
          },
        }}
      >
        Sign up with Google
      </Button>

      {/* Divider */}
      <div className="relative pt-2">
        <Divider sx={{ color: "#9ca3af", fontSize: "12px" }}>or</Divider>
      </div>

      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-medium text-gray-700 mb-1"
        >
          Name<span className="text-red-500">*</span>
        </label>
        <TextField
          id="name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange("name")}
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
          placeholder="Enter your password"
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
          Create Account
        </Button>
      </div>

      {/* Login Link */}
      <div className="text-center pt-1">
        <span className="text-gray-600 text-sm">Already have an account? </span>
        <button
          type="button"
          className="text-indigo-600 hover:text-indigo-500 font-medium text-sm cursor-pointer"
          onClick={() => router.push("/auth/login")}
        >
          Login Here
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
