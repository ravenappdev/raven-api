import { Raven } from "@raven-fern/raven-client-v2";

const ravenClient = new Raven.Client({
  _origin: "https://api.ravenapp.dev"
});

const response = await ravenClient.devices.getDevice({
  deviceId: "12345678",
  appId: "12345678",
  userId: "12345678"
});

if (response.ok) {
  console.log("The Xiaomi Token is:", response.body.xiaomi_token)
} else {
  response.error._visit({
    appNotFoundError: () => {
      console.error("App not found.")
    },
    deviceNotFoundError: () => {
      console.error("Device not found.")
    },
    _network: () => {
      console.error("Are you sure you're connected to the internet?")
    },
    _unknown: () => {
      console.error("Received unknown error.", response.error.body)
    }
  })
}