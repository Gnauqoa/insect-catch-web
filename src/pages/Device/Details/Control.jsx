import { Box, Slider, SvgIcon, Switch, Typography } from "@mui/material";
import React, { useState } from "react";
import { ReactComponent as IconHumi } from "assets/icon/icon_humi.svg";
import { ReactComponent as IconTemp } from "assets/icon/icon_temp.svg";
import { ReactComponent as IconBrightness } from "assets/icon/icon_brightness.svg";
import { ReactComponent as IconRain } from "assets/icon/icon_rain.svg";
import { ReactComponent as IconSun } from "assets/icon/icon_sun.svg";
import { ReactComponent as IconBatteryEmpty } from "assets/icon/icon_battery_empty.svg";
import { ReactComponent as IconBattery1 } from "assets/icon/icon_battery_1.svg";
import { ReactComponent as IconBattery2 } from "assets/icon/icon_battery_2.svg";
import { ReactComponent as IconBattery3 } from "assets/icon/icon_battery_3.svg";
import { ReactComponent as IconSave } from "assets/icon/icon_save.svg";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LoadingButton } from "@mui/lab";
import { useTranslation } from "react-i18next";
import useAPI from "hooks/useApi";
import { useParams } from "react-router-dom";
import {
  onInputChange,
  onSwitchChange,
  onTimeChange,
} from "services/inputControl";
import { toast } from "react-toastify";

const Control = ({
  temp = 23,
  humi = 23,
  optic = 23,
  rain = false,
  grid_status = false,
  battery = 40,
  led_color = "#ffffff",
  brightness = 0,
  coordinates = {
    latitude: 9.779349,
    longitude: 105.6189045,
  },
  location = "Thủ Đức, Hồ Chí Minh",
  time_end = { hour: 0, min: 0 },
  time_send = { hour: 0, min: 0 },
  time_start = { hour: 0, min: 0 },
  image = {
    url: "https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.6435-9/31698760_388047048341275_8126437329326833664_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HUEAwWxuGvEAX-j644L&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfAskJgvH822REZDXDALcStO_9SQpJJXtDuCCtMftWPapw&oe=648EAF42",
  },
  checked,
}) => {
  const defaultInput = {
    grid_status: grid_status,
    ledColor: led_color,
    brightness: brightness,
    time_start: time_start,
    time_end: time_end,
    time_send: time_send,
  };
  const [inputData, setInputData] = useState(defaultInput);
  const { t } = useTranslation();
  const { device_id } = useParams();
  const [updateDevice, loading] = useAPI(
    `/v2/user/current/device/${device_id}`,
    "put",
    { control_data: { ...inputData } }
  );
  const handleUpdateDevice = () => {
    console.log(inputData);
    updateDevice()
      .then((res) => {
        toast.success("Update device success!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  if (!checked) return <></>;
  return (
    <div className="flex flex-col pt-6 gap-4 pr-16 relative">
      <div className="grid grid-cols-4 gap-[25px]">
        <Node>
          <SvgIcon
            component={IconTemp}
            inheritViewBox={true}
            sx={{ width: 48, height: 48, color: "primary.400" }}
          />
          <div className="flex flex-col ">
            <Typography
              sx={{ fontSize: 12, fontWeight: 500, color: "#babec5" }}
            >
              {t("device.temp")}
            </Typography>
            <Typography
              sx={{ fontSize: 20, fontWeight: 600, color: "text_neutral" }}
            >
              {temp} &#8451;
            </Typography>
          </div>
        </Node>
        <Node>
          <SvgIcon
            component={IconHumi}
            inheritViewBox={true}
            sx={{ width: 48, height: 48, color: "primary.400" }}
          />
          <div className="flex flex-col ">
            <Typography
              sx={{ fontSize: 12, fontWeight: 500, color: "#babec5" }}
            >
              {t("device.humi")}
            </Typography>
            <Typography
              sx={{ fontSize: 20, fontWeight: 600, color: "text_neutral" }}
            >
              {humi}%
            </Typography>
          </div>
        </Node>
        <Node>
          <SvgIcon
            component={IconBrightness}
            inheritViewBox={true}
            sx={{ width: 48, height: 48, color: "primary.400" }}
          />
          <div className="flex flex-col ">
            <Typography
              sx={{ fontSize: 12, fontWeight: 500, color: "#babec5" }}
            >
              {t("device.optic")}
            </Typography>
            <Typography
              sx={{ fontSize: 20, fontWeight: 600, color: "text_neutral" }}
            >
              {optic}
            </Typography>
          </div>
        </Node>
        <Node>
          <SvgIcon
            component={rain ? IconRain : IconSun}
            inheritViewBox={true}
            sx={{ width: 48, height: 48, color: "primary.400" }}
          />
          <div className="flex flex-col">
            <Typography
              sx={{ fontSize: 12, fontWeight: 500, color: "#babec5" }}
            >
              {t("device.weather")}
            </Typography>
            <Typography
              sx={{ fontSize: 20, fontWeight: 600, color: "text_neutral" }}
            >
              {rain ? t("device.rainy") : t("device.clear")}
            </Typography>
          </div>
        </Node>
        <Node>
          <SvgIcon
            component={
              battery > 90
                ? IconBattery3
                : battery > 50
                ? IconBattery2
                : battery > 25
                ? IconBattery1
                : IconBatteryEmpty
            }
            inheritViewBox={true}
            sx={{
              width: 38,
              height: 38,
              color:
                battery > 90
                  ? "battery.100"
                  : battery > 50
                  ? "battery.50"
                  : battery > 25
                  ? "battery.25"
                  : "battery.0",
            }}
          />
          <div className="flex flex-col ">
            <Typography
              sx={{ fontSize: 12, fontWeight: 500, color: "#babec5" }}
            >
              {t("device.battery")}
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 400,
                color:
                  battery > 90
                    ? "battery.100"
                    : battery > 50
                    ? "battery.50"
                    : battery > 25
                    ? "battery.25"
                    : "battery.0",
              }}
            >
              {battery}%
            </Typography>
          </div>
        </Node>
        <Node>
          <div className="flex flex-col gap-1">
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 400,
                color: "text_neutral",
                paddingRight: "20px",
              }}
            >
              {t("device.gridStatus")}
            </Typography>
            <div className="flex flex-row items-center gap-3">
              <Switch
                checked={inputData.grid_status}
                name="grid_status"
                onChange={(e) => onSwitchChange(e, setInputData)}
                size="medium"
              />
              <Typography sx={{ fontSize: 16, fontWeight: 400 }}>
                {inputData.grid_status
                  ? t("device.gridStatusOn")
                  : t("device.gridStatusOff")}
              </Typography>
            </div>
          </div>
        </Node>
        <Node>
          <div className="flex flex-col gap-1">
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 400,
                color: "text_neutral",
                paddingRight: "20px",
              }}
            >
              {t("device.ledColor")}
            </Typography>
            <div className="flex flex-row gap-3 items-center">
              <input
                onChange={(e) => onInputChange(e, setInputData)}
                className="h-[15px] rounded-[16px] border-[1px] border-[#000] overflow-hidden"
                type="color"
                name="ledColor"
                value={inputData.ledColor}
              />
              <Typography sx={{ fontSize: 16, fontWeight: 400 }}>
                {inputData.ledColor}
              </Typography>
            </div>
          </div>
        </Node>
        <Node>
          <div className="flex flex-col gap-1 w-full px-3">
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 400,
                color: "text_neutral",
              }}
            >
              {t("device.brightness")}
            </Typography>
            <Slider
              defaultValue={inputData.brightness}
              value={inputData.brightness}
              onChange={(e) => onInputChange(e, setInputData)}
              name="brightness"
              valueLabelDisplay="auto"
            />
          </div>
        </Node>
        <Node>
          <div className="flex flex-col gap-2 w-full px-3">
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 400,
                color: "text_neutral",
              }}
            >
              {t("device.timeTurnOn.title")}
            </Typography>
            <TimeInput
              title={t("device.timeTurnOn.start")}
              time={inputData.time_start}
              setTime={(e, unit) => onTimeChange(e, setInputData, unit)}
              name="time_start"
            />
            <TimeInput
              title={t("device.timeTurnOn.end")}
              time={inputData.time_end}
              setTime={(e, unit) => onTimeChange(e, setInputData, unit)}
              name="time_end"
            />
            <TimeInput
              title={t("device.timeTurnOn.loop")}
              time={inputData.time_send}
              setTime={(e, unit) => onTimeChange(e, setInputData, unit)}
              name="time_send "
            />
          </div>
        </Node>
        <Node>
          <div className="flex flex-col h-full">
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 400,
                color: "text_neutral",
              }}
            >
              {t("device.location.title")}
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 700,
                color: "text_neutral",
              }}
            >
              {t("device.location.latitude")}:{" "}
              <span className="font-[400]">{coordinates.latitude}</span>
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 700,
                color: "text_neutral",
              }}
            >
              {t("device.location.longitude")}:{" "}
              <span className="font-[400]">{coordinates.longitude}</span>
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 700,
                color: "text_neutral",
              }}
            >
              {t("device.location.address")}:{" "}
              <span className="font-[400]">{location}</span>
            </Typography>
          </div>
        </Node>
      </div>
      <div className="flex flex-row w-full gap-4">
        <Node>
          <div className="flex flex-col gap-2 w-full">
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 400,
                color: "text_neutral",
              }}
            >
              {t("device.mapTitle")}
            </Typography>
            <MapContainer
              key={Math.random()}
              center={{
                lat: coordinates.latitude,
                lng: coordinates.longitude - 0.06,
              }}
              style={{ height: "100vh", width: "100wh" }}
              zoom={13}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={{
                  lat: coordinates.latitude,
                  lng: coordinates.longitude - 0.06,
                }}
              >
                <Popup>Your device</Popup>
              </Marker>
            </MapContainer>
          </div>
        </Node>
        <Node>
          <div className="flex flex-col gap-2 w-full">
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 400,
                color: "text_neutral",
              }}
            >
              {t("device.imgTitle")}
            </Typography>
            <img
              alt=""
              src={image.url}
              className="object-cover w-full h-auto"
            />
          </div>
        </Node>
      </div>
      <div className="flex flex-row w-full h-[50px] sticky bottom-0 right-5 justify-end">
        <LoadingButton
          color="success"
          variant="contained"
          startIcon={<SvgIcon inheritViewBox={true} component={IconSave} />}
          onClick={handleUpdateDevice}
          sx={{
            fontWeight: 500,
            ":disabled": {
              color: "#ffffff",
              background: "#9D9AA4",
            },
          }}
          loading={loading}
          disabled={defaultInput === inputData}
        >
          {t("device.save")}
        </LoadingButton>
      </div>
    </div>
  );
};
const TimeInput = ({ title, time, setTime, name }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-row items-center gap-2">
      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 400,
          color: "text_neutral",
        }}
      >
        {title}:
      </Typography>
      <input
        onChange={(e) => setTime(e, "hour")}
        value={time.hour}
        name={name}
        maxLength={2}
        className="flex flex-col text-[14px] items-center justify-center px-1 w-[30px] font-Poppins outline-none border-[1px] border-[#D1D1D1] rounded-[8px] "
      />
      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 400,
          color: "text_neutral",
        }}
      >
        {t("device.timeTurnOn.hour")}
      </Typography>
      <input
        onChange={(e) => setTime(e, "min")}
        value={time.min}
        name={name}
        maxLength={2}
        className="flex flex-col text-[14px] items-center justify-center px-1 w-[30px] font-Poppins outline-none border-[1px]  border-[#D1D1D1] rounded-[8px] "
      />
      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 400,
          color: "text_neutral",
        }}
      >
        {t("device.timeTurnOn.min")}
      </Typography>
    </div>
  );
};
const Node = ({ children }) => {
  return (
    <div className="w-full">
      <Box
        sx={{
          boxShadow: "0px 0px 10px rgba(33, 34, 39, 0.1)",
          padding: "16px 12px",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {children}
      </Box>
    </div>
  );
};
export default Control;
