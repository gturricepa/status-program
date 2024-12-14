export const getColor = (value) => {
  if (
    [
      "Yes",
      "TBD",
      "CEPA",
      "CR&M",
      "Yes, via Leasys",
      "Yes, via Ayvens",
      "Yes/Cash Allowance",
    ].includes(value)
  )
    return {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      justifySelf: "center",
      alignSelf: "center",
      backgroundColor: "rgba(25, 134, 25, 0.084)",
      color: "rgb(7, 93, 7)",
      minWidth: "9rem",
      borderRadius: "5px",
      border: "1px solid rgb(7, 93, 7)",
      textAlign: "center",
    };
  if (value === "No")
    return {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      justifySelf: "center",
      alignSelf: "center",
      backgroundColor: "rgba(255, 0, 0,  0.084)",
      color: "rgb(218, 33, 33)",
      minWidth: "9rem",
      borderRadius: "5px",
      border: "1px solid rgb(218, 33, 33)",
      textAlign: "center",
    };
  if (value === "Not apply")
    return {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      justifySelf: "center",
      alignSelf: "center",
      backgroundColor: "rgba(128, 128, 128,  0.084)",
      color: "rgb(128, 128, 128)",
      minWidth: "9rem",
      borderRadius: "5px",
      border: "1px solid rgb(128, 128, 128)",
    };
  if (value === "December 2024")
    return {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      justifySelf: "center",
      alignSelf: "center",
      backgroundColor: "rgba(32, 91, 187, 0.084)",
      color: "rgb(36, 68, 119)",
      minWidth: "9rem",
      borderRadius: "5px",
      border: "1px solid rgb(36, 68, 119)",
      textAlign: "center",
    };
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    justifySelf: "center",
    alignSelf: "center",
    backgroundColor: "rgba(32, 91, 187, 0.084)",
    minWidth: "9rem",
    borderRadius: "5px",
    border: "1px solid rgb(36, 68, 119)",
    textAlign: "center",
    width: "6rem",
  };
};
