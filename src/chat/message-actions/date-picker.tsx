import React, { CSSProperties, useState } from "react";
import { Calendar } from "../../assets/icons";
import "./date-picker.css";

interface DatePickerProps {
  selectedDate?: Date;
  onSelect: (date: Date) => void;
  contraints?: {
    minDate?: Date;
    maxDate?: Date;
  };
  styles?: CSSProperties;
}

// A date picker component that allows the user to select a date from a calendar.
// only an icon is displayed when clicked a calendar view is seen, after selecting date, onSelect callback is called.
// use normal input for a date picker.
// Example:
// <span class="datepicker-toggle-button"></span>
// <input type="date" class="datepicker-input"></input>
const DatePicker = ({
  styles,
  selectedDate,
  onSelect,
  contraints,
}: DatePickerProps) => {
  const [date, setDate] = useState(selectedDate || new Date());

  const handleSelect = (date: Date) => {
    setDate(date);
    onSelect(date);
  };

  return (
    <div className="datepicker-toggle" style={styles}>
      <Calendar size={20} className="datepicker-toggle-button" />
      <input
        type="date"
        className="datepicker-input"
        value={date.toISOString().split("T")[0]}
        onChange={(e) => handleSelect(new Date(e.target.value))}
        min={contraints?.minDate?.toISOString().split("T")[0]}
        max={contraints?.maxDate?.toISOString().split("T")[0]}
      />
    </div>
  );
};

export default DatePicker;
