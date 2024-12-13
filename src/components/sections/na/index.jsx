import React, { useState, useEffect } from "react";
import { Select } from "antd";
import naData from "../../../data/na.json";
import * as S from "./styles";
import Flag from "react-world-flags";
import { getColor } from "../../../utils/util";
import theme from "../../../styles/theme";
import { Download } from "../../download";

export const NA = () => {
  const [selectedServices, setSelectedServices] = useState(["ALL"]);
  const [filteredData, setFilteredData] = useState(naData);

  const uniqueServices = [
    "ALL",
    ...new Set(naData.map((item) => item.Service)),
  ];

  const handleServiceChange = (value) => {
    setSelectedServices(value);
  };

  useEffect(() => {
    if (selectedServices.length === 0 || selectedServices.includes("ALL")) {
      setFilteredData(naData);
    } else {
      const filtered = naData.filter((item) =>
        selectedServices.includes(item.Service)
      );
      setFilteredData(filtered);
    }
  }, [selectedServices]);

  return (
    <S.Holder>
      <h1>North America</h1>
      <S.Filter>
        <h2>Select Services:</h2>
        <Select
          mode="multiple"
          value={selectedServices}
          onChange={handleServiceChange}
          maxTagCount="responsive"
          style={{
            minWidth: "15rem",
            width: "auto",
            backgroundColor: "white",
          }}
          options={uniqueServices.map((service) => ({
            value: service,
            label: service,
          }))}
        />
      </S.Filter>

      <div>
        <S.Table>
          <thead>
            <tr>
              <th>Description</th>
              <th>
                <Flag code="usa" height="40" />
              </th>
              <th>
                <Flag code="ca" height="40" />
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
                    <td style={{ color: theme.colors.black }}>
                      {item.Description}
                    </td>
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
        <Download data={filteredData} />
      </div>
    </S.Holder>
  );
};
