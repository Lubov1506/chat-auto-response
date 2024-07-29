import { format } from "date-fns";

export const formatDate = (date, formatDate = "MMM dd, yyyy") =>
  format(date, formatDate);
