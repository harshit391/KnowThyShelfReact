import React, { useState } from 'react';
import './Calender.css';

const Calender = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const isCurrentDay = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const renderDays = () => {
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const days = [];

    // Render empty cells for the days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<td key={`empty-${i}`} className="empty-cell"></td>);
    }

    // Render the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
      const isCurrentDayCell = isCurrentDay(date);
      days.push(
        <td
          key={`day-${i}`}
          className={`day-cell ${isSelected ? 'selected' : ''} ${isCurrentDayCell ? 'current-day' : ''}`}
          onClick={() => setSelectedDate(date)}
        >
          {i}
        </td>
      );
    }

    // Group the days into weeks
    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(<tr key={`week-${i / 7}`}>{days.slice(i, i + 7)}</tr>);
    }

    return weeks;
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}>
          &lt; Prev
        </button>
        <span>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
        <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}>
          Next &gt;
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>{renderDays()}</tbody>
      </table>
    </div>
  );
};

export default Calender;