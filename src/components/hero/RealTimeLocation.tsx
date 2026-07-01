'use client';

import React, { useState, useEffect } from 'react';

export function RealTimeLocation() {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Manila time (GMT+8)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      };
      
      const formatted = now.toLocaleTimeString('en-US', options);
      setTimeStr(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="elementor-element elementor-element-1eb34d8 time-weather wavo-transform transform-type-translate elementor-widget elementor-widget-heading" 
      data-id="1eb34d8" 
      data-element_type="widget" 
      data-e-type="widget" 
      data-widget_type="heading.default"
    >
      <div className="elementor-widget-container">
        <p className="elementor-heading-title elementor-size-default" data-temperature="28" suppressHydrationWarning>
          {timeStr ? `${timeStr} GMT+8 · 28ºC` : '22:34 GMT+8 · 28ºC'}
        </p>
      </div>
    </div>
  );
}
