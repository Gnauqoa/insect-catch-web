import Device from "./assets/device.png"

const DeviceInfoData = [
  {
    imgUrl: Device,
    name: "Catch",
    desc: "nothing",
    create: "03/10/2022",
    status: 1,
    battery: 100
  },
  {
    imgUrl: Device,
    name: "Catch",
    desc: "nothing",
    create: "03/10/2022",
    status: 0,
    battery: 74
  },
  {
    imgUrl: Device,
    name: "Catch",
    desc: "nothing",
    create: "03/10/2022",
    status: 2,
    battery: 10
  },
  {
    imgUrl: Device,
    name: "Catch",
    desc: "nothing",
    create: "03/10/2022",
    status: 0,
    battery: 10
  }
]

export function getDeviceInfoData () {
  return DeviceInfoData;
}