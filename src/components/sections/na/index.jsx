import React, { useState, useEffect } from "react";
import { AutoComplete } from "antd";
import naData from "../../../data/na2.json";
import * as S from "./styles";
import Flag from "react-world-flags";
export const NA = () => {
  const [selectedService, setSelectedService] = useState("");
  const [filteredData, setFilteredData] = useState(naData);

  const uniqueServices = [...new Set(naData.map((item) => item.Service))];

  const handleServiceChange = (value) => {
    setSelectedService(value);
  };

  useEffect(() => {
    if (selectedService) {
      const filtered = naData.filter(
        (item) => item.Service === selectedService
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(naData);
    }
  }, [selectedService]);

  useEffect(() => {
    console.log("Service selected:", selectedService);
  }, [selectedService]);

  const getColor = (value) => {
    if (value === "Yes")
      return {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        justifySelf: "center",
        alignSelf: "center",
        backgroundColor: "rgba(25, 134, 25, 0.084)",
        color: "rgb(7, 93, 7)",
        width: "50%",
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
        width: "50%",
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
        width: "50%",
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
        width: "50%",
        borderRadius: "5px",
        border: "1px solid rgb(36, 68, 119)",
        textAlign: "center",
      };
    return {};
  };

  return (
    <S.Holder>
      <h1>North America</h1>
      <S.Filter>
        <h2>Select a Service:</h2>
        <AutoComplete
          value={selectedService}
          onChange={handleServiceChange}
          style={{ marginLeft: "1rem", width: 300 }}
          options={uniqueServices.map((service) => ({
            value: service,
          }))}
        />
      </S.Filter>

      <div>
        <S.Table>
          <thead>
            <tr>
              <th>Description</th>
              <th>
                <Flag code="usa" height="50" />
              </th>
              <th>
                <Flag code="ca" height="50" />
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => {
              const isDifferentService =
                index === 0 || item.Service !== filteredData[index - 1].Service;

              return (
                <React.Fragment key={index}>
                  {isDifferentService && (
                    <tr
                      style={{
                        color: "#D71600",
                        height: "1px",
                        borderBottom: "1px solid #D71600",
                        fontSize: "1.4rem",
                      }}
                    >
                      {item.Service}
                    </tr>
                  )}

                  <tr>
                    <td>{item.Description}</td>
                    <td>
                      <p style={getColor(item.USA)}>{item.USA}</p>
                    </td>
                    <td>
                      <p style={getColor(item.CA)}>{item.CA}</p>
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </S.Table>
      </div>
    </S.Holder>
  );
};
