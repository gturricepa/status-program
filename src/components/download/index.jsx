import * as S from "./styles";
import { DownloadOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import * as XLSX from "xlsx";

// eslint-disable-next-line react/prop-types
export const Download = ({ data }) => {
  const handleDownload = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "data.xlsx");
  };
  return (
    <Tooltip onClick={handleDownload} title="Download">
      <S.Holder>
        <DownloadOutlined />
      </S.Holder>
    </Tooltip>
  );
};
