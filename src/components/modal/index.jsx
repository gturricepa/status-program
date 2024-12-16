/* eslint-disable react/prop-types */
import { Modal } from "antd";
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export const ModalData = ({ open, onClose, data, country }) => {
  const [filteredData, setFilteredData] = React.useState([]);
  const [code] = country || [];

  React.useEffect(() => {
    if (code) {
      const filtered = data.filter((item) => item[code]);
      setFilteredData(filtered);
    }
  }, [code, data]);

  const countOfDescritons = filteredData.filter(
    (item) => item[code] !== "Not apply"
  ).length;

  const uniqueValues = [
    ...new Set(
      filteredData
        .filter((item) => item[code] !== "Not apply")
        .map((item) => item[code])
    ),
  ];

  const countOfUniqueValues = uniqueValues.reduce((acc, value) => {
    const count = filteredData.filter((item) => item[code] === value).length;
    acc[value] = count;
    return acc;
  }, {});

  const uniqueService = [
    ...new Set(
      data
        .filter((item) => item[code] !== "Not apply")
        .map((item) => item.Service)
    ),
  ];

  const pieData = uniqueValues.map((value) => {
    const count = countOfUniqueValues[value];
    const percentage = (count / countOfDescritons) * 100;
    return { name: value, value: count, percentage };
  });

  const COLORS = [
    "#32cd32a7",
    "#465ab4be",
    "#ffd900c9",
    "#b12be2b0",
    "#ff4400c1",
    "#651550c2",
    "#156465c2",
    "#5e6515c2",
  ];

  return (
    <Modal open={open} onCancel={onClose} footer={null} width={1100}>
      <h1
        style={{
          fontWeight: "100",
          borderBottom: "1px solid #D71600",
          marginBottom: "15px",
        }}
      >
        {country[1]}
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {uniqueService.map((service, index) => (
          <div
            key={index}
            style={{
              marginBottom: "1rem",
              padding: "5px 10px  ",
              borderRadius: "5px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            {service}
          </div>
        ))}
      </div>

      {filteredData.length > 0 ? (
        <div>
          <div style={{ display: "flex" }}>
            <h3
              style={{
                fontWeight: "100",
                fontSize: "1.1rem",
                marginBottom: "10px",
                display: "Flex",
              }}
            >
              <p
                style={{
                  fontWeight: "100",
                  fontSize: "1.35rem",
                  marginBottom: "10px",
                  display: "Flex",
                }}
              >
                Total of Appliable Modules: {countOfDescritons}
              </p>{" "}
            </h3>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "1.3rem", marginRight: "10px" }}>
              Application Distribution:
            </p>

            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {" "}
              {uniqueValues.map((value, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "1rem",
                    borderRadius: "5px",
                  }}
                >
                  <p style={{ fontSize: "1.2rem" }}>{value}:</p>
                  <p
                    style={{
                      marginLeft: "5px",
                      fontSize: "1.2rem",
                    }}
                  >
                    {countOfUniqueValues[value]}
                  </p>
                  <span
                    style={{
                      marginLeft: "5px",
                      fontSize: ".5rem",
                    }}
                  >
                    ✔
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <PieChart width={300} height={300}>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) =>
                    `${value} (${pieData
                      .find((entry) => entry.value === value)
                      .percentage.toFixed(2)}%)`
                  }
                />
                <Legend />
              </PieChart>
            </div>
          </div>
        </div>
      ) : (
        <p>No data found for {code}</p>
      )}
    </Modal>
  );
};