import { RavenApi } from "@raven-fern/api-client";

void main();

async function main() {
  const ravenClient = new RavenApi.Client({
    _origin: "https://api.ravenapp.dev",
    authorization: "AuthKey Pf8t1HiM2ZJyisSVjUbesGveypdQHxmKrg6XVBDeD30="
  });

  const response = await ravenClient.event.sendBulk({
    appId: "67854f33-1686-4dd2-9a4a-2fe442ffbda4",
    _body:
    {
      event: "myFirstEvent",
      batch: [{
        user: {
          userId: "Danny"
        },
        data: {
          "colleagues": "Srivastava"
        },
      },
      {
        user: {
          userId: "Zach"
        },
        data: {
          "colleagues": "Srivastava"
        },
      },
      {
        user: {
          userId: "Deep"
        },
        data: {
          "colleagues": "Srivastava"
        },
      }
      ]
    }
  }
  );

  if (response.ok) {
    console.log()
  }

  else {
    console.log(response.error)
  }
}


  // const response = await ravenClient.user.createOrUpdate({
  //   appId: "67854f33-1686-4dd2-9a4a-2fe442ffbda4",
  //   _body: {
  //     userId: "Danny",
  //     email: "danny+raven@buildwithfern.com",
  //     mobile: "+12162807200"
  //   }
  // })
