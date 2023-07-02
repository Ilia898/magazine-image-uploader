import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const router = express.Router();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

router.use(cors(corsOptions));
router.use(bodyParser.json());

router.get("/", (req, res) => {
    res.send("Hello World!");
});
  
router.post("/user/upload/image", (req, res) => {
  console.log(req.body)
})

export default router;