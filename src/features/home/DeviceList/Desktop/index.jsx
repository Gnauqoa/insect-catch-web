import React, { useEffect, useState } from "react";
import { getDeviceInfoData } from "../data";

import {
  Button,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  Tooltip,
  Link,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import WifiOffIcon from "@mui/icons-material/WifiOff";
import WifiIcon from "@mui/icons-material/Wifi";
import CellWifiIcon from "@mui/icons-material/CellWifi";

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
        <Tooltip
          title={
            status === 1
              ? "Connected by Wifi"
              : status === 0
              ? "Disconnected"
              : "Connected by GPRS"
          }
        >
          <IconButton sx={{ color: "#000000" }}>
            {status === 1 ? (
              <WifiIcon />
            ) : status === 0 ? (
              <WifiOffIcon />
            ) : (
              <CellWifiIcon />
            )}
          </IconButton>
        </Tooltip>
      </StyledTableCell>
      <StyledTableCell align="right">
        <div className="flex flex-row justify-end gap-4">
          <ElectricBoltIcon
            sx={{
              color:
                battery > 75
                  ? "batterySlider.high"
                  : battery > 50
                  ? "batterySlider.good"
                  : battery > 25
                  ? "batterySlider.normal"
                  : battery > 10
                  ? "batterySlider.week"
                  : "batterySlider.veryWeek",
            }}
          />
          <Typography
            sx={{
              color:
                battery > 75
                  ? "batterySlider.high"
                  : battery > 50
                  ? "batterySlider.good"
                  : battery > 25
                  ? "batterySlider.normal"
                  : battery > 10
                  ? "batterySlider.week"
                  : "batterySlider.veryWeek",
            }}
          >
            {battery}%
          </Typography>
        </div>
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

const DeviceListDesktop = () => {
  const [deviceData, setDeviceData] = useState([]);
  useEffect(() => {
    setDeviceData(getDeviceInfoData().slice(0, 3));
  }, []);
  const InfoDeviceShow = ["Name", "Create", "Status", "Battery", "Details"];
  return (
    <div className="xl:flex flex-col gap-6 w-full hidden">
      <div className="flex flex-row">
        <p className="font-[700] text-[24px]">Your device</p>
        <div className="ml-auto flex flex-col items-center">
          <Link underline="none" href="device">
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
          </Link>
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

export default DeviceListDesktop;
