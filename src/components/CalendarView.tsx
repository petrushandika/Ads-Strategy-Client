import React from "react";

interface CalendarViewProps {
  calendarDays: (number | null)[];
  isToday: (day: number) => boolean;
  onDayClick: (day: number) => void;
  view: "month" | "week" | "day";
  selectedDate: Date | null;
}

const CalendarView = ({
  calendarDays,
  isToday,
  onDayClick,
  view,
  selectedDate,
}: CalendarViewProps) => {
  const getHours = () => {
    const hours = [];
    for (let i = 0; i < 24; i++) {
      hours.push(i);
    }
    return hours;
  };

  const getWeekDates = (date: Date) => {
    const startOfWeek = date.getDate() - date.getDay();
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(date);
      day.setDate(startOfWeek + i);
      weekDates.push(day);
    }
    return weekDates;
  };

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

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const hours = getHours();
  const weekDates = selectedDate ? getWeekDates(selectedDate) : [];

  return (
    <>
      {view === "month" && (
        <>
          <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-600 mb-1">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="py-2">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {calendarDays.map((day, index) => (
              <div
                key={index}
                className={`h-28 flex items-center justify-center text-sm
                            border-r border-b hover:bg-blue-50 cursor-pointer
                            ${index % 7 === 0 ? "border-l" : ""} 
                            ${index < 7 ? "border-t" : ""} 
                            ${
                              day
                                ? isToday(day)
                                  ? "bg-blue-100 font-semibold border-blue-400"
                                  : "bg-white border-gray-200"
                                : "bg-gray-100 border-gray-100"
                            }`}
                onClick={() => day && onDayClick(day)}
              >
                {day || ""}
              </div>
            ))}
          </div>
        </>
      )}

      {view === "week" && (
        <div className="border border-gray-200 rounded-md overflow-hidden">
          <div className="grid grid-cols-8 bg-gray-100 border-b border-gray-200 text-sm text-gray-700 items-center">
            <div className="p-3 text-center">Time</div>

            {weekDates.map((date, i) => {
              const dayName = days[date.getDay()];
              const day = date.getDate();
              const month = date.toLocaleString("default", { month: "long" });

              return (
                <div
                  key={i}
                  className="p-2 text-center hover:bg-blue-50 cursor-pointer"
                >
                  <div>{dayName}</div>
                  <div>
                    {day} {month}
                  </div>{" "}
                </div>
              );
            })}
          </div>

          {hours.map((hour) => (
            <div
              key={hour}
              className="grid grid-cols-8 border-t border-gray-200 text-sm"
            >
              <div className="flex items-center justify-center border-r border-gray-200 p-2 text-center text-gray-600">
                {hour.toString().padStart(2, "0")}:00
              </div>

              {weekDates.map((_, i) => (
                <div
                  key={`${hour}-${i}`}
                  className="border-r border-gray-100 h-14 hover:bg-blue-50 cursor-pointer"
                ></div>
              ))}
            </div>
          ))}
        </div>
      )}

      {view === "day" && (
        <>
          <div className="border border-gray-200 rounded-md overflow-hidden">
            {hours.map((hour) => (
              <div
                key={hour}
                className="border-b border-gray-100 h-16 px-4 flex items-center text-sm text-gray-600 hover:bg-blue-50 cursor-pointer"
              >
                {hour.toString().padStart(2, "0")}:00
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default CalendarView;
