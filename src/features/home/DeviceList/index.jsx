import React, { useEffect, useState } from "react";
import { getDeviceInfoData } from "./data";
import ConnectedIcon from "./assets/connected.png";
import DisconnectIcon from "./assets/disconnect.png";
import {
  Button,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: "none",
}));

const DeviceInfo = ({ imgUrl, name, desc, create, status, battery }) => {
  return (
    <TableRow>
      <StyledTableCell>
        <div className="flex flex-row gap-4">
          <img
            className="w-[60px] h-auto object-cover"
            src={imgUrl}
            alt="device"
          />
          <div className="flex flex-col justify-center">
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 700,
                color: "#121212",
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 400,
                color: "#94918A",
              }}
            >
              {desc}
            </Typography>
          </div>
        </div>
      </StyledTableCell>
      <StyledTableCell align="right">
        <Typography
          sx={{
            fontSize: 17,
            fontWeight: 700,
            color: "#121212",
          }}
        >
          {create}
        </Typography>
      </StyledTableCell>
      <StyledTableCell align="right">
        {
          <img
            className="w-[35px] ml-auto"
            src={status ? ConnectedIcon : DisconnectIcon}
          />
        }
      </StyledTableCell>
      <StyledTableCell align="right">
        <Typography
          sx={{
            fontSize: 17,
            fontWeight: 700,
            color: "#121212",
          }}
        >
          {battery}
        </Typography>
      </StyledTableCell>
      <StyledTableCell align="right">
        <Button
          sx={{
            color: "text_green.main",
            textTransform: "none",
          }}
          endIcon={<DoubleArrowIcon />}
        >
          <Typography sx={{ color: "text_green.main", fontSize: 18 }}>
            See more
          </Typography>
        </Button>
      </StyledTableCell>
    </TableRow>
  );
};

const DeviceList = () => {
  const [deviceData, setDeviceData] = useState([]);
  useEffect(() => {
    setDeviceData(getDeviceInfoData().slice(0, 3));
  }, []);
  const InfoDeviceShow = ["Name", "Create", "Status", "Battery", "Details"];
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-row">
        <p className="font-[700] text-[24px]">Your device</p>
        <div className="ml-auto flex flex-col items-center">
          <Button
            sx={{
              color: "#FFD143",
              textTransform: "none",
            }}
            endIcon={<ArrowForwardIosIcon />}
          >
            <Typography
              sx={{
                color: "#FFD143",
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              View All
            </Typography>
          </Button>
        </div>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            {InfoDeviceShow.map((data, index) => (
              <StyledTableCell
                align={index === 0 ? "" : "right"}
                key={"device properties show " + index}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: 20,
                    color: "#94918A",
                  }}
                >
                  {data}
                </Typography>
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {deviceData.map((data, index) => (
            <DeviceInfo
              key={"device info " + index}
              imgUrl={data.imgUrl}
              name={data.name}
              desc={data.desc}
              create={data.create}
              battery={data.battery}
              status={data.status}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DeviceList;
