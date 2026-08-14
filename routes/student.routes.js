// import express from "express";
// import {
//     index,
//     create,
//     store,
//     edit,
//     update,
//     destroyPage,
//     destroy,
//     show
// } from "../controller/student.controller.js";

// const router = express.Router();

// router.get("/students", index);

// router.get("/students/create", create);

// router.post("/students", store);

// router.get("/students/:id/edit", edit);

// router.post("/students/:id", update);

// router.get("/students/:id/destroy", destroyPage);

// router.post("/students/:id/delete", destroy);

// router.delete("/students/:id", destroy);

// router.get("/students/:id", show);

// export default router;




import express from "express";
import { index, create, show, edit, deleteView, store, update, destroy } from "../controller/student.controller.js";

const router = express.Router();

router.get("/", index);
router.get("/new", create);
router.get("/:id/edit", edit);
router.get("/:id/delete", deleteView);
router.get("/:id", show);
router.post("/", store);
router.post("/:id", update);
router.post("/:id/delete", destroy);

export default router;
