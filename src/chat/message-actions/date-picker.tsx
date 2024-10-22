import React, { CSSProperties, useState } from "react";
import { Calendar } from "../../assets/icons";

interface DatePickerProps {
  selectedDate?: Date;
  onSelect: (date: Date) => void;
  contraints?: {
    minDate?: Date;
    maxDate?: Date;
  };
  styles?: CSSProperties;
}

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
        onChange={(e) =>
          e.target.value && handleSelect(new Date(e.target.value))
        }
        min={contraints?.minDate?.toISOString().split("T")[0]}
        max={contraints?.maxDate?.toISOString().split("T")[0]}
      />
    </div>
  );
};

export default DatePicker;
