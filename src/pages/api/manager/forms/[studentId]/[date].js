import { statusForm } from "@/controllers/FormController";
import { getDailyForm } from "@/controllers/StudentController";

export default async function (req, res) {

    if (req.method === "GET") {
        getDailyForm(req, res)
    }
    if (req.method === 'POST') {
        statusForm(req, res)
    }
}
