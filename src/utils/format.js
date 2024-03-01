export default function getDate(date) {
  const transformedDate = new Date(date);

  const year = transformedDate.getFullYear();
  const month = (transformedDate.getMonth() + 1).toString().padStart(2, '0');
  const day = transformedDate.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}
