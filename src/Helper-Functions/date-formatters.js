// formatters.js
import { format } from 'date-fns';

export const formatDateForArticles = (dateStr) => {
  // Format the date as desired, e.g., "04 September 2024"
  return format(new Date(dateStr), "dd MMMM yyyy");
};

export const formatDate = (dateStr) => {
  // Format the date as desired, e.g., "October 2024"
  return format(new Date(dateStr), "MMMM yyyy");
};

export const getDay = (dateStr) => {
  // Extract the day part from the date, e.g., 7
  return format(new Date(dateStr), "d");
};

export const formatTime = (timeString) => {
  const [hours, minutes] = timeString.split(':');
  
  // Convert to 12-hour format
  const formattedHours = (hours % 12) || 12; // Convert 0 hours to 12
  const ampm = hours >= 12 ? 'PM' : 'AM'; // Determine AM/PM
  
  return `${formattedHours}:${minutes} ${ampm}`;
};


export  const getTextColor = (text) => {
    return text.includes(':') || text.includes('?') ? 'text-[#7A89C2]' : 'text-black';
  };