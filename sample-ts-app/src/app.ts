import { RavenApi } from "@raven-fern/api-client";
import { Platform } from "@raven-fern/api-client/api";

void main();

async function main() {
  const ravenClient = new RavenApi.Client({
    _origin: "https://api.ravenapp.dev",
    authorization: "AuthKey Pf8t1HiM2ZJyisSVjUbesGveypdQHxmKrg6XVBDeD30="
  });

  const response = await ravenClient.device.add({
    /** your app identifier */
    appId: "67854f33-1686-4dd2-9a4a-2fe442ffbda4",
    /** your user identifier */
    userId: "danny-test-user",
    _body: {
      platform: Platform.Ios,
      fcmToken: "qweKu7bdTZumJpzxUqqpxe",
    }
  });

  if (response.ok) {
    console.log(response.body)
  }
  else {
    console.log(response.error)
  }
}