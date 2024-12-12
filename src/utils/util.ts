const getColor = (value) => {
  if (value === "Yes") return { backgroundColor: "green", color: "white" };
  if (value === "No") return { backgroundColor: "red", color: "white" };
  if (value === "Not apply") return { backgroundColor: "gray", color: "white" };
  return {};
};
