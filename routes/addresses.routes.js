import express from "express";
import {index, show, store,update,destroy} from "../controller/addresses.controller.js";

const router = express.Router();

router.get("/", index);
router.get("/:gn_id", show);
router.post("/", store);
router.put("/:gn_id", update);
router.delete("/:gn_id", destroy);

export default router;