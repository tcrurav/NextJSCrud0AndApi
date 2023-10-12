import {
  deleteBicycle
} from "../../../services/db/bicycle_service";

const handler = async (req, res) => {
  try {
    const { method } = req;
    switch (method) {
      case "GET": {
        //Do some thing
        res.status(200).send("We Secured the GET API End Point");
        break;
      }
      case "PUT": {
        //Do some thing
        res.status(200).send("We Secured the PUT API End Point");
        break;
      }
      case "DELETE": {
        await deleteBicycle(req.query.id);
        res.status(200).send(`Bicycle with id=${req.query.id} deleted successfully`);
        break;
      }
      default:
        res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
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
