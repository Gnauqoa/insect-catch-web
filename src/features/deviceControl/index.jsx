import { Box, IconButton, Link, Slider, Typography } from "@mui/material";
import React, { useState } from "react";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { MuiColorInput } from "mui-color-input";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import Battery90Icon from "@mui/icons-material/Battery90";
import Battery80Icon from "@mui/icons-material/Battery80";
import Battery60Icon from "@mui/icons-material/Battery60";
import Battery50Icon from "@mui/icons-material/Battery50";
import Battery30Icon from "@mui/icons-material/Battery30";
import Battery20Icon from "@mui/icons-material/Battery20";
import Battery1BarIcon from "@mui/icons-material/Battery1Bar";
import Humi from "./assets/humi.svg";
import Rain from "./assets/rain.svg";
import Day from "./assets/day.svg";
import Night from "./assets/night.svg";
import Raining from "./assets/raining.svg";
import Afternoon from "./assets/afternoon.svg";
import CameraIcon from "@mui/icons-material/Camera";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Introduce = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-row items-center gap-4">
        <Link underline="none" href="/device">
          <IconButton>
            <ArrowBackIosNewIcon />
          </IconButton>
        </Link>
        <p className="font-[700] text-[48px]">Device name</p>
      </div>
      <p className="font-[400] text-[#979CA5] text-[16px]">
        Hmmm, your device seem work very good!
      </p>
    </div>
  );
};

const MainArea = ({
  isCharging = 0,
  battery = 96,
  temp = 27,
  humi = 30,
  rain = 0.2,
  optic = 245,
  weather = 4,
}) => {
  const [colorLed, setColorLed] = useState("#ffffff");
  const handleColorChange = (color) => {
    setColorLed(color);
  };
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-row">
        <div className="flex flex-col h-[300px] w-full overflow-hidden">
          <img
            className="h-full w-auto"
            src={
              weather === 1
                ? Day
                : weather === 2
                ? Afternoon
                : weather === 3
                ? Night
                : Raining
            }
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <Typography
            sx={{
              fontSize: 24,
              fontWeight: 400,
            }}
          >
            17th Jun '21
          </Typography>
          <div className="flex flex-row gap-1">
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 400,
              }}
            >
              Thursday |
            </Typography>
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 400,
              }}
            >
              2:45 am
            </Typography>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col gap-4">
          <div className="flex flex-row gap-2 item-center">
            <DeviceThermostatIcon />
            <Typography>Temperature:</Typography>
            <Typography>{temp}°C</Typography>
          </div>
          <div className="xl:flex hidden w-[2px] h-full bg-[#000000]" />
          <div className="flex  flex-row gap-2 item-center">
            <img src={Humi} />
            <Typography>Humidity:</Typography>
            <Typography>{humi}%</Typography>
          </div>{" "}
          <div className="xl:flex hidden w-[2px] h-full bg-[#000000]" />
          <div className="flex flex-row gap-2">
            <img src={Rain} />
            <Typography>Rain: </Typography>
            <Typography>{rain}%</Typography>
          </div>{" "}
          <div className="xl:flex hidden w-[2px] h-full bg-[#000000]" />
          <div className="flex flex-row gap-2">
            <WbTwilightIcon />
            <Typography>Optic: </Typography>
            <Typography>{optic}</Typography>
          </div>
        </div>

        <div className="flex flex-row items-center gap-3">
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "12px",
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
            {isCharging ? (
              <ElectricBoltIcon />
            ) : battery > 90 ? (
              <BatteryFullIcon />
            ) : battery > 80 ? (
              <Battery90Icon />
            ) : battery > 60 ? (
              <Battery80Icon />
            ) : battery > 50 ? (
              <Battery60Icon />
            ) : battery > 30 ? (
              <Battery50Icon />
            ) : battery > 20 ? (
              <Battery30Icon />
            ) : battery > 5 ? (
              <Battery20Icon />
            ) : (
              <Battery1BarIcon />
            )}
            <Typography>{battery}%</Typography>
            <Slider
              disabled
              defaultValue={battery}
              sx={{
                width: "100%",
                height: 10,
                padding: 0,
                "& .MuiSlider-thumb": {
                  borderRadius: "1px",
                  height: "0px",
                  width: "0px",
                },
                "&.Mui-disabled": {
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
                },
              }}
            />
          </Box>
        </div>

        <div className="flex flex-col gap-2 select-none">
          <Typography sx={{ fontSize: 20, fontWeight: 700 }}>
            Color led
          </Typography>
          <MuiColorInput value={colorLed} onChange={handleColorChange} />
        </div>
      </div>
    </div>
  );
};
const gg =
  "data:image/jpeg;base64,%2F9j%2F4ICQysbJxoCBgYGAgICAgID%2F24DDgIqHiImIhoqJiImLi4qMj5mQj46Oj5%2BWl5KZpKCmpqSgo6KorbqxqKu2q6KjssSztru9wMHAp7DHzMa%2Fy7q%2FwL7%2F24DDgYuLi4%2BNj52QkJ2%2BqaOpvr6%2Bvr6%2Bvr6%2Bvr6%2Bvr6%2Bvr6%2Bvr6%2Bvr6%2Bvr6%2Bvr6%2Bvr6%2Bvr6%2Bvr6%2Bvr6%2Bvr6%2Bvr6%2Bvr7%2FxICfgICBhYGBgYGBgYCAgICAgICAgYKDhIWGh4iJiov%2FxIC1kICCgYODgoSDhYWEhICAgf2BgoOAhJGFkqGxwYaT0eGHovGUsoGRoYijwrHBldLR8KSz4vKCiYqWl5iZmqWmp6ipqrS1tre4ubrDxMXGx8jJytPU1dbX2Nna4%2BTl5ufo6erz9PX29%2Fj5%2BoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5%2Bjp6vHy8%2FT19vf4%2Bfr%2FxICfgYCDgYGBgYGBgYGBgICAgICAgYKDhIWGh4iJiov%2FxIC1kYCCgYKEhIOEh4WEhICBgveAgYKDkYSFobGGksHRh%2BHxk6KygYiUwpGhscGJo7PS8JXi8tGKlqS04aXxl5iZmqanqKmqtba3uLm6w8TFxsfIycrT1NXW19jZ2uPk5ebn6Onq8%2FT19vf4%2BfqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4%2BTl5ufo6ery8%2FT19vf4%2Bfr%2FwICRiID4gKCDgaGAgpGBg5GB%2F9qAjIOBgIKRg5GAv4D22qiiqKigsKKQgorjiqiApOKVyb2FpufR2qWI08%2BVpe71%2FdSo4rnXxPGtmLWckKyDkd3mteinrM7j1LXaxrfhv4T615%2F8jJ3z1NK5y52K8a7pq8yyiPCmgL3SiueqlNCBxYCU0IHFgJXS%2Bf7so6v1%2Btb1trnrvoTwrsjAqauK25jT1YWVtOfh1JvbmdeKr5yM172o6bDcnJyp9qy5jOLz0%2BnywsnMsKzZg6Pg5J%2F62bKP5aK0vaCigIqogKKAiqiArPiBmuGl4dawrPHW%2FvGhxefMmIWj%2FdrS5tPUz7i1mbWCqcuD1K7gx%2FvKjdqs9Iqr87L29uHFs9CimIWUgKimg7zF8%2Fyyxu6g5624gLqKzaWzjaqh6K72nI7pp42CoJrO1ZmRnbvW9M3W2qnI1dXY1ZT6hZXU97XymO6V5eSfwvHT1sr62MqS6JTWxsLnmtrKmrbBq4W2xtiZq%2FuR0dqmmOP39tL%2FgI%2Fw%2Favqkvb81ciq8rORvs2JqK6U1NHSnOqiuYPj5azppeW44YPYypynpKHK0Zbaoay1osWppaqtpdH2vaao69qC6frU1%2B%2FVx8q927X1nfzante%2Fjq%2FjkdLeyOHU44XNv8vxzqmU4smuzNHnmN346ovE5vO9ubXtoeLX%2FtKzmZnBmfPQx%2BLtmsn2rfLn1KmCiPObqfe1oZqp4pLBosiHo6HItaXRoNamr%2F6%2F1KHr8v%2BAjcXPhMq34azI1ZWzm42VwPLIyZyB1M3e3pXxlbaS09SLqsS%2F1oK9xdqS29zF95LFrrXS4dbtmff2kZ7gk57GsO7SyP%2FWr561k4i7mbLJ0YbJoNT0%2BvL%2FgIqa9uXLi%2Fb54eXO%2BN%2FdgoyZ5cbvlsPXn8q%2Br4SMnsP%2FgNfSjazbhvnDgMzY9M3M15vG8vC647WitqPtteuF8aKdhf%2BLta3v493Kg%2FLe3Jb%2FgKaO2p%2Bwne7owfGL042%2F%2BOmm4dHTlafD4qvp59e53J2Ax7Wdxcy0ndu6zbfRtrz%2FgI%2FZls298dTWwtzg9a6mjNjJ7oaqjLKP2pCUppD61bPw0bbo3Kn1hq2Ow9PckJzPh569jcy6nNecq%2FP909umxazSuI6Juej9qrubz%2FSsscqvtbLFmt6o1PXbzauWkNz9otbblYWb6ve14%2FqlrqrHz%2BP6l73MhNb%2B0a6msY23sp7S84%2F024z2zOfWtdPK1baD%2FZ37gLr5rcvaruW18sXTtdbltOvc9p7D046fqOTu06%2B%2F78PR7aPcrMr3sOrF9rWV0vv5rcuNhqTG1sLw%2F4Dblqftody2xN%2Fh1bvY3%2FP%2FgMyapOu91oX%2FgJD93uP%2FgMzaodWFt5erpbLN8t7h54bT0MfejLC19vqviPW5sZajpt6h%2F4Ceotnx2MnBrcn2%2FY6D%2FduMi%2Fnw%2F%2BmZqJze%2F4DPrcf9%2BrWWg%2Fby7NaSu9%2F59Ln%2FgL%2FN1eWC%2FP%2BAy53X%2Ffnq95%2Bzl%2BKclrqH%2FPjd%2F4DflqqS2erf8%2BH5%2F4D%2Bmp%2By7s%2Bzl%2BHimtKc%2FYbxh7yN3YWk16vus%2BnymPP%2Bqaq504jTl%2BP7xdeCn6q%2B2Mmug9y4zLuXvfew6vOO3%2BjxnIOc8fnX54PvtIj6qLSFtoXbvc%2Fk64L%2B9YTysPm71LDm08rP8evv2tGcoNHS7dC6mpa7w%2Fq107iUybWCp4XhzdK20cLqqof3y5%2FzyNa2tL%2BQy%2Bjz%2FKeq9rXZ6Zq9rqK%2FuuzJ%2FcPE3Y3hroaFlaG40d7t2d2ctd6hxfXhvpua0tjyzer37bLIzNnjzfKT3Za%2ByeKjsaK7jJHF%2F%2Fno1aTG09O11drc58yN%2BJnKgcjmpbnN5u3Z9sXvk7%2FPj5zg9aTJg4vm5IPPtbizhd681IH2wfOcjPvU7az2iOaT7%2FaUgZDnlvLyxYj0q%2FDCkenc1onn7Krr69Oejs7Fw4O88P%2BAitLj7b3z4b%2BGz9rq67q1udG%2FvoHJuNeVzveotNepydqI64qyvL7y6fLbvauWuJvz5fCt%2Fe71psapj7ST%2FIy4w5Hb3viO0qSk9Kf77oaVy6z3hIK%2B7%2BXdjJKG0dXz8%2B3p0IGYq6bbnrj%2FgIDWxNLvg5rSxOrr2r7b9smsjcrlrq%2FSpbyO2KDGjYzB46vM8d6VhdSs2M2wyqveoaGKt4GPj92%2Fhbzao4vr%2FaDo%2BqSf3Pas6sLox%2Bru1ZSU4NT0o726ht71y5Wth5LNleud587f6fO3%2FNWU25HAz5qx0f2p6M7luPXkk%2B6Ow9uHlbSSyLDdi%2FTn1puxzKm%2BnO7el%2BnW7K6xnPiTvYGpp%2FTF85SdvYnpmr3tsceNn9qvpYbpzbGLzPPr0rD05LPd5L%2FK2pK2uqmlkMXP6syf052p2sStyp%2FpuJz8o5zSmOfO2bmosaDdrrr2pdmZ24a%2BtbaS1Oi0veb21tHlysb79rXsupSm58uK5Zfpk7Xi0vaXqovTyorfnNz55Mjz3%2BvW45vN4bn61rew%2BuqFiqHJh4KftInkgLjOuM22mpSYt7SJr5byl4%2Fq2%2Bi1qfPM2aHTge%2FPtuOQvNTci7L2ofDFjsDOz%2F6VhpTrlavM3OKB9Jukk9629%2BD0pdSCgZmG4570r6jswvqMjfLEmPr2qJrJ5PvGlsHrkvmb85ehpsnFwcfR4euTqOqQxZ%2FZm%2FKv8oa0hpSKsYTBtIrjqbuyosfR2fvByufJx6%2FNyffvzon%2B4vr3r967lMuq%2BaOf%2Fr3KoMrhyOad8dqWpu%2FBkq%2FNtdOY9KPWv7HQyeWeh4evtequ3c7vzunY5NeT5Y7aq4n%2F0IqOrNS2houR4e3QtKfu%2F4CNxt7I4ILn1NSrksLzyJefw%2BiqhubH2pjG7vOPmqzBy9bvwLHs%2F4z0sZWz6pKO26P39a%2FArqvNqO%2BhsK6FwaXApObPlKS846GU1PC5vavb%2Fub27NiSqfzPrdyCwc%2FeuKPryNuLr7z7%2BtXZ%2Bema17DHwrnIz8P1pdmM%2BLTu0avNufP86aGrkLf8vejYlNrdvcC809iM0uK1hpPQl5np1pOAh5rW0eD7m8jjjcnmuIKyqbHHvunxx6fp0NrH0rXH1q2JwerzzMbJ8L3qq8%2FP2qKP%2F9mAgICAgICAgICAgICAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
const LocationArea = () => {
  return (
    <div className="flex flex-col h-full gap-6">
      <div className="flex flex-col h-full gap-4">
        <div className="flex flex-row items-center gap-2">
          <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
            Camera picture
          </Typography>
          <CameraIcon />
        </div>
        <div className="flex flex-col select-none overflow-hidden border-[2px] border-[#9D9AA4] h-[90%]">
          <img src={`data:image/jpeg;base64,${gg}`} />
        </div>
      </div>
      <div className="flex flex-col h-full gap-2 overflow-hidden">
        <div className="flex flex-row items-center gap-2">
          <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
            GPS location
          </Typography>
          <LocationOnIcon />
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-row items-center gap-2">
            <Typography sx={{ fontSize: 16, fontWeight: 400 }}>
              Longitude:
            </Typography>
            <Typography sx={{ fontSize: 16, fontWeight: 400 }}>11</Typography>
          </div>
          <div className="xl:flex hidden w-[2px] h-full bg-[#000000]" />
          <div className="flex flex-row items-center gap-2">
            <Typography sx={{ fontSize: 16, fontWeight: 400 }}>
              Latitude:
            </Typography>
            <Typography sx={{ fontSize: 16, fontWeight: 400 }}>11</Typography>
          </div>
        </div>
        <div className="overflow-hidden">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

const DeviceControl = () => {
  return (
    <div className="xl:h-screen">
      <div className="flex xl:flex-row flex-col w-full h-full rounded-[32px] overflow-auto">
        <div className="flex flex-col min-w-[50%] gap-16 xl:p-14 p-6">
          <Introduce />
          <MainArea />
        </div>
        <div className="flex flex-col w-full bg-[#F6F2DD] xl:p-14 p-6 overflow-hidden">
          <LocationArea />
        </div>
      </div>
    </div>
  );
};

export default DeviceControl;
