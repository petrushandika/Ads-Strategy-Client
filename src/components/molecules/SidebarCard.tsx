"use client";

import React, { useState } from "react";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const clinics = [
  { name: "Klinik Pejaten", roas: 7.4 },
  { name: "Klinik Melawai", roas: 6.9 },
  { name: "Klinik Kebayoran", roas: 6.2 },
  { name: "Klinik Rawamangun", roas: 5.8 },
  { name: "Klinik Kalideres", roas: 5.5 },
  { name: "Klinik Bogor", roas: 5.1 },
  { name: "Klinik Bintaro", roas: 4.7 },
  { name: "Klinik Bekasi", roas: 4.3 },
  { name: "Klinik Semarang", roas: 4.0 },
];

const products = [
  { name: "Produk A", leads: 340 },
  { name: "Produk B", leads: 298 },
  { name: "Produk C", leads: 276 },
  { name: "Produk D", leads: 263 },
  { name: "Produk E", leads: 249 },
  { name: "Produk F", leads: 231 },
  { name: "Produk G", leads: 225 },
  { name: "Produk H", leads: 217 },
  { name: "Produk I", leads: 210 },
];

const SidebarCard: React.FC = () => {
  const [showAllClinics, setShowAllClinics] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);

  const maxItems = 3;

  return (
    <div className="bg-white rounded-2xl shadow-xs p-6 w-full border border-gray-200">
      <h3 className="text-base font-bold text-gray-800 mb-5">
        Klinik & Produk Terbaik
      </h3>

      {/* Clinic Section */}
      <div className="mb-6">
        <div className="flex items-center text-sm font-medium text-gray-600 mb-3">
          <ShowChartIcon className="mr-2 text-yellow-500" fontSize="small" />
          Top Klinik (ROAS Tertinggi)
        </div>
        <ul className="space-y-2">
          {(showAllClinics ? clinics : clinics.slice(0, maxItems)).map(
            (clinic, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-50 rounded-lg px-4 py-2 text-sm hover:bg-gray-100 transition"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 flex items-center justify-center rounded-full text-white text-xs font-semibold ${
                      index === 0
                        ? "bg-yellow-500"
                        : index === 1
                        ? "bg-gray-400"
                        : "bg-orange-400"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="text-gray-800 font-medium">
                    {clinic.name}
                  </span>
                </div>
                <span className="text-gray-900 font-semibold">
                  {clinic.roas.toFixed(1)}x
                </span>
              </li>
            )
          )}
        </ul>
        {clinics.length > maxItems && (
          <button
            onClick={() => setShowAllClinics(!showAllClinics)}
            className="text-xs text-blue-600 mt-2 flex items-center hover:underline"
          >
            {showAllClinics ? "Show Less" : "Show More"}
            {showAllClinics ? (
              <ExpandLessIcon fontSize="small" />
            ) : (
              <ExpandMoreIcon fontSize="small" />
            )}
          </button>
        )}
      </div>

      {/* Product Section */}
      <div>
        <div className="flex items-center text-sm font-medium text-gray-600 mb-3">
          <TrendingUpIcon className="mr-2 text-green-500" fontSize="small" />
          Top Produk Berdasarkan Conversion
        </div>
        <ul className="space-y-2">
          {(showAllProducts ? products : products.slice(0, maxItems)).map(
            (product, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-50 rounded-lg px-4 py-2 text-sm hover:bg-gray-100 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-indigo-500 text-white text-xs font-semibold">
                    {index + 1}
                  </div>
                  <span className="text-gray-800 font-medium">
                    {product.name}
                  </span>
                </div>
                <span className="text-gray-900 font-semibold">
                  {product.leads} leads
                </span>
              </li>
            )
          )}
        </ul>
        {products.length > maxItems && (
          <button
            onClick={() => setShowAllProducts(!showAllProducts)}
            className="text-xs text-blue-600 mt-2 flex items-center hover:underline"
          >
            {showAllProducts ? "Show Less" : "Show More"}
            {showAllProducts ? (
              <ExpandLessIcon fontSize="small" />
            ) : (
              <ExpandMoreIcon fontSize="small" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default SidebarCard;
