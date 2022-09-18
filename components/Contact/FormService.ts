import {APIResponseModel} from "../../models/APIResponseModel";
import axios, {AxiosResponse} from "axios";

export interface FormValues {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

export default class FormService {
    public async sendForm(
        values: FormValues
    ): Promise<APIResponseModel | any> {
        const {name, email, subject, message} = values;
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name, email, subject, message}),
        };

        const api = axios.create();

        return await api.post("/api/ContactForm", { name:name, email:email, subject:subject, message:message})
            .then(function (response:AxiosResponse) {
            return response.data as APIResponseModel
        })
            .catch(function (error) {
                return error
            });

    }
}
