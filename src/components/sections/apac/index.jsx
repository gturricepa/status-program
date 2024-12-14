import React, { useState, useEffect } from "react";
import { Select } from "antd";
import naData from "../../../data/apac.json";
import * as S from "./styles";
import Flag from "react-world-flags";
import { getColor } from "../../../utils/util";
import theme from "../../../styles/theme";
import { Download } from "../../download";
import { ModalData } from "../../modal";
import { PlusCircleOutlined } from "@ant-design/icons";
export const APAC = () => {
  const [selectedServices, setSelectedServices] = useState(["ALL"]);
  const [filteredData, setFilteredData] = useState(naData);
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState([]);

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

  const handleOpenModal = ({ country }) => {
    setCountry(country);
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  console.log(filteredData);
  return (
    <S.Holder>
      <ModalData
        open={open}
        onClose={handleCloseModal}
        data={filteredData}
        country={country}
      />

      <h1>Asia-Pacific</h1>
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
        <p
          style={{
            color: "grey",
            fontStyle: "italic",
            fontSize: ".8rem",
            display: "flex",
            alignSelf: "flex-end",
            justifySelf: "flex-end",
          }}
        ></p>
        <S.Table>
          <thead>
            <tr>
              <th>Module Description</th>

              <th
                style={{
                  cursor: "pointer",
                  position: "relative",
                }}
                onClick={() =>
                  handleOpenModal({
                    country: ["IN", "India"],
                  })
                }
              >
                <span style={{ position: "relative" }}>
                  <Flag code="in" height="40" />
                  <span
                    style={{
                      position: "relative",
                      background: "white",
                      borderRadius: "50%",
                      fontSize: "1rem",
                      right: "10px",
                    }}
                  >
                    {" "}
                    <PlusCircleOutlined />
                  </span>
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
                      <p style={getColor(item.IN)}>{item.IN}</p>
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
