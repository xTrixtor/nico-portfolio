import { APIResponseModel } from "../../models/APIResponseModel";

export interface FormValues {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default class FormService {
  public async sendForm(
    values: FormValues
  ): Promise<APIResponseModel | undefined> {
    const { name, email, subject, message } = values;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, subject, message }),
    };

    return await fetch("https://nboehner.vercel.app/api/ContactForm", requestOptions)
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error:", error);
        return undefined;
      });
  }
}
