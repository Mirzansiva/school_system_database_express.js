import express from "express";
import { index, create, show, edit, deleteView, store, update, destroy } from "../controller/teachers.controller.js";

const router = express.Router();

router.get("/new", create);
router.get("/:id/edit", edit);
router.get("/:id/delete", deleteView);
router.get("/", index);
router.get("/:id", show);
router.post("/", store);
router.post("/:id", update);
router.post("/:id/delete", destroy);

export default router;