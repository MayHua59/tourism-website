// export const formatDate = (dateString) => {
//   const date = new Date(dateString);
//   const options = { year: 'numeric', month: 'long', day: 'numeric' };
//   return date.toLocaleDateString(undefined, options);
// };
export const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return dateString; 
    }
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch (error) {
    console.error("Error formatting date:", dateString, error);
    return dateString;
  }
};