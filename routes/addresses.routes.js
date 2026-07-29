import express from "express";
import {
    index,
    create,
    store,
    show,
    edit,
    update,
    destroy
} from "../controller/addresses.controller.js";

const router = express.Router();

router.get("/", index);
router.get("/create", create);
router.post("/", store);
router.get("/:id", show);
router.get("/:id/edit", edit);
router.post("/:id", update);
router.post("/:id/delete", destroy);
router.delete("/:id", destroy);

export default router;