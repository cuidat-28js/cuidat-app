"use client"
import {Calendar, theme} from "antd";
import React from "react";

const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
};
  
const CalendarCompon = () => {
  const { token } = theme.useToken();
  
  return (
    <div className="w-full w-80 md:w-150 ">
      <Calendar fullscreen={false} />
    </div>
  );
};
export default CalendarCompon;