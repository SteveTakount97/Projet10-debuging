export const MONTHS = {
  1: "janvier",
  2: "février",
  3: "mars",
  4: "avril",
  5: "mai",
  6: "juin",
  7: "juillet",
  8: "août",
  9: "septembre",
  10: "octobre",
  11: "novembre",
  12: "décembre",
};
export const getMonth = (date) => {
  const monthIndex = date.getMonth() + 1; // Ajouter 1 pour correspondre aux clés du dictionnaire MONTHS
  return MONTHS[monthIndex] || "Mois invalide"; // Valeur de repli en cas de problème
};