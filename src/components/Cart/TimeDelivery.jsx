import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ru } from "date-fns/locale"; // Локализация на русский

const TimeDelivery = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const minDate = new Date(); // минимальная дата - сегодня
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 7); // максимальная дата - через 7 дней

  const currentTime = new Date(); // текущее время

  const minTime = new Date();
  minTime.setHours(
    currentTime.getHours() + 1,
    currentTime.getMinutes(),
  ); // минимальное время - +1 час от текущего

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  }; // обработчик изменения даты

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  }; // обработчик изменения времени

  const isTimeDisabled = (time) => {
    // проверяю, что время не раньше, чем через час
    if (!selectedDate) return true; // если дата не выбрала, время недоступно

    if (
      selectedDate.toDateString() ===
      new Date().toDateString()
    ) {
      return time > minTime;
    }

    return false;
  };

  return (
    <div className="w-2/3 mb-6 flex gap-3">
      <div className="">
        <DatePicker
          id="delivery-date"
          selected={selectedDate}
          onChange={handleDateChange}
          minDate={minDate}
          maxDate={maxDate}
          dateFormat="d MMMM yyyy"
          placeholderText="Выберите дату"
          className="block w-full p-3 border border-gray-300 rounded-md shadow-sm font-montserrat font-medium text-xs placeholder:text-xxs"
          locale={ru} // Локализация на русский
        />
      </div>
      <div className="">
        <DatePicker
          id="delivery-time"
          selected={selectedTime}
          onChange={handleTimeChange}
          showTimeSelect
          showTimeSelectOnly
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="HH:mm"
          placeholderText="Выберите время"
          className="block w-2/3 p-3 border border-gray-300 rounded-md shadow-sm font-montserrat font-medium text-xs placeholder:text-xxs"
          disabled={!selectedDate} // Время недоступно, пока не выбрана дата
          filterTime={isTimeDisabled} // Фильтр для времени
          locale={ru} // Локализация на русский
        />
      </div>
    </div>
  );
};

export default TimeDelivery;
