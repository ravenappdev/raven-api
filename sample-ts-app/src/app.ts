import { RavenApi } from "@raven-fern/api-client";

void main();

async function main() {
  const ravenClient = new RavenApi.Client({
    _origin: "https://api.ravenapp.dev",
    authorization: "AuthKey Pf8t1HiM2ZJyisSVjUbesGveypdQHxmKrg6XVBDeD30="
  });

  const response = await ravenClient.device.update({
    /** your app identifier */
    appId: "67854f33-1686-4dd2-9a4a-2fe442ffbda4",
    /** your user identifier */
    userId: "danny-test-user",
    deviceId: "ce2421fd-3987-4daf-85ac-74426aa3a080",
    _body: {
      notificationsDisabled: true
    }
  });

  if (response.ok) {
    console.log(response.body)
  }
  else {
    console.log(response.error)
  }
}