// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {
  createBicycle,
  fetchBicycles,
} from "../../services/db/bicycle_service";

const handler = async (req, res) => {
  try {
    const { method } = req;
    switch (method) {
      case "POST": {
        const createdBicycle = await createBicycle(req.body);
        res.status(200).json(createdBicycle);
        // , { headers: { key: "Access-Control-Allow-Origin", value: "*" } });
        break;
      }
      case "GET": {
        const allBicycles = await fetchBicycles();
        res.status(200).json(allBicycles);
        // , { headers: { key: "Access-Control-Allow-Origin", value: "*" } });
        break;
      }
      case "PUT": {
        //Do some thing
        res.status(200).send("We Secured the PUT API End Point");
        break;
      }
      case "DELETE": {
        //Do some thing
        res.status(200).send("We Secured the DELETE API End Point");
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        // res.headers.append("Access-Control-Allow-Origin", "*");
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    res.status(400).json({
      error_code: "bicycles",
      message: err.message,
    });
  }
};

export default handler;
