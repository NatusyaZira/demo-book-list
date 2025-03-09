import { format } from 'date-fns';

export const formatDate = (date) => {
  if (!date) return "--"; // Return "--" if no date is provided
  try {
    return format(new Date(date), 'yyyy-MM-dd HH:mm:ss'); // Format to "yyyy-MM-dd HH:mm:ss" (you can customize)
  } catch (error) {
    console.error("Error formatting date:", error);
    return "--";
  }
};