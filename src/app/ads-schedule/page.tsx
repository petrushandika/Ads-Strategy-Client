"use client";

import { useState } from "react";
import DateSelector from "@/components/molecules/DateSelector";
import ToggleView from "@/components/atoms/ToggleView";
import CalendarView from "@/components/organisms/CalendarView";
import AdsForm from "@/components/organisms/AdsForm";

const AdsSchedule = () => {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [view, setView] = useState<"month" | "week" | "day">("month");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [openPanel, setOpenPanel] = useState(false);

  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [status, setStatus] = useState("Priority");
  const [category, setCategory] = useState("Product");
  const [description, setDescription] = useState("");

  const getDaysInMonth = (month: number, year: number) => {
    const firstDayIndex = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const daysArray = [];
    for (let i = 0; i < firstDayIndex; i++) daysArray.push(null);
    for (let i = 1; i <= lastDate; i++) daysArray.push(i);
    return daysArray;
  };

  const calendarDays = getDaysInMonth(month, year);

  const isToday = (day: number) => {
    const now = new Date();
    return (
      day === now.getDate() &&
      month === now.getMonth() &&
      year === now.getFullYear()
    );
  };

  const handleDayClick = (day: number) => {
    const clickedDate = new Date(year, month, day);
    setSelectedDate(clickedDate);
    setOpenPanel(true);
  };

  const handleSubmit = () => {
    if (!title || !startDate || !endDate || !description) {
      alert("Please fill all fields!");
      return;
    }

    const adDetails = {
      title,
      startDate,
      endDate,
      status,
      category,
      description,
    };

    console.log(adDetails);

    setTitle("");
    setStartDate(null);
    setEndDate(null);
    setStatus("Priority");
    setCategory("Product");
    setDescription("");
    setOpenPanel(false);
  };

  return (
    <div className="flex flex-col gap-5 mb-20">
      <h1 className="text-black text-xl font-semibold">Ads Schedule</h1>

      <div className="flex justify-between">
        <DateSelector
          month={month}
          year={year}
          onMonthChange={(e) => setMonth(Number(e.target.value))}
          onYearChange={(e) => setYear(Number(e.target.value))}
          onPrevMonth={() => {
            if (month === 0) {
              setMonth(11);
              setYear((prev) => prev - 1);
            } else {
              setMonth(month - 1);
            }
          }}
          onNextMonth={() => {
            if (month === 11) {
              setMonth(0);
              setYear((prev) => prev + 1);
            } else {
              setMonth(month + 1);
            }
          }}
        />

        <ToggleView view={view} onChange={(e, newView) => setView(newView)} />
      </div>

      <CalendarView
        calendarDays={calendarDays}
        isToday={isToday}
        onDayClick={handleDayClick}
        view={view}
        selectedDate={selectedDate}
      />

      <AdsForm
        openPanel={openPanel}
        selectedDate={selectedDate}
        title={title}
        startDate={startDate}
        endDate={endDate}
        status={status}
        category={category}
        description={description}
        setTitle={setTitle}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setStatus={setStatus}
        setCategory={setCategory}
        setDescription={setDescription}
        handleSubmit={handleSubmit}
        closePanel={() => setOpenPanel(false)}
      />
    </div>
  );
};

export default AdsSchedule;
