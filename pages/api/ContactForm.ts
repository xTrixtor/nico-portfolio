import { ContactFormModel } from "../../models/ContactFormModel";
import { APIResponseModel } from "../../models/APIResponseModel";
const corsLib = require("cors");

const cors = corsLib({
  methods: ["POST"],
});

function runMiddleware(req: any, res: any, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(req: any, res: any) {
  await runMiddleware(req, res, cors);

  if (req.method !== "POST") {
    sendResponse(res, 405, "Method not allowed");
    return;
  }

  if (req.method === "POST") {
    let contactData: ContactFormModel = {};
    contactData = JSON.parse(JSON.stringify(req.body));
    await sendEmail(contactData, res);
  } else {
  }
}

const sendEmail = async (
  contactData: ContactFormModel,
  res: any
): Promise<void> => {
  const message =
    "Name: " +
    contactData.name +
    "<br/>" +
    "Anliegen: " +
    contactData.subject +
    "<br/>" +
    "Email: " +
    contactData.email +
    "<br/>" +
    "Nachricht: " +
    contactData.message;

  if(process.env.PUBLIC_KEY_JETMAIL === null ||process.env.PRIVATE_KEY_JETMAIL === null)
    sendResponse(res, 500, "MailJetKey is null")

  const mailjet = require("node-mailjet").connect(
    process.env.PUBLIC_KEY_JETMAIL,
    process.env.PRIVATE_KEY_JETMAIL
  );
  mailjet
    .post("send", { version: "v3.1" })
    .request({
      Messages: [
        {
          From: {
            Email: "nico.boehner1999@gmail.com",
            Name: "NicoLanding",
          },
          To: [
            {
              Email: "nico.boehner1999@gmail.com",
              Name: "Nico",
            },
          ],
          Subject: "Kontaktformular Nico-Landing",
          TextPart: message,
          HTMLPart: message,
        },
      ],
    })
    .then((response: any) => {
      sendResponse(res, 200, "Ok");
      return;
    })
    .catch((err: any) => {
      sendResponse(res, 500,err.message);
    });
};

function sendResponse(
  res: any,
  status: number,
  message: string,
  data?: any
): void {
  const response = { status, message, data: data ?? null } as APIResponseModel;
  res.status(status).json(response);
}
