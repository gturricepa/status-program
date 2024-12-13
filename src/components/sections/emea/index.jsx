import React, { useState, useEffect } from "react";
import { Select } from "antd";
import naData from "../../../data/emea.json";
import * as S from "./styles";
import Flag from "react-world-flags";
import { getColor } from "../../../utils/util";
import theme from "../../../styles/theme";
import me from "../../../assets/middle-east.svg";
export const EMEA = () => {
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
      <h1>Europe, Middle East and Africa</h1>
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
                <Flag code="GB" height="40" />
              </th>
              <th>
                <Flag code="IE" height="40" />
              </th>
              <th>
                <Flag code="NL" height="40" />
              </th>
              <th>
                <Flag code="DZ" height="40" />
              </th>
              <th>
                <Flag code="PT" height="40" />
              </th>
              <th
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifySelf: "Center",
                }}
              >
                <img style={{ width: "5rem" }} src={me} alt="me"></img>
                <span
                  style={{
                    fontWeight: "100",
                    fontSize: ".8rem",
                    padding: "0",
                    margin: "0",
                    marginTop: "5px",
                  }}
                >
                  Middle Eeast
                </span>
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
                      <p style={getColor(item.UK)}>{item.UK}</p>
                    </td>
                    <td>
                      <p style={getColor(item.IRE)}>{item.IRE}</p>
                    </td>
                    <td>
                      <p style={getColor(item.NTH)}>{item.NTH}</p>
                    </td>
                    <td>
                      <p style={getColor(item.ALG)}>{item.ALG}</p>
                    </td>
                    <td>
                      <p style={getColor(item.PT)}>{item.PT}</p>
                    </td>
                    <td>
                      <p style={getColor(item.ME)}>{item.ME}</p>
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
