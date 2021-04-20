import { Router } from "express";
import IndexCtrl from "../controllers/IndexController";

const router = Router();
router.get("/", IndexCtrl.RegionCtrl.findAll);
router.get('/:id', IndexCtrl.RegionCtrl.findOne);
router.post("/", IndexCtrl.RegionCtrl.create);
router.put("/:id", IndexCtrl.RegionCtrl.update);
router.delete("/:id", IndexCtrl.RegionCtrl.remove);
router.get("/rawsql/:id", IndexCtrl.RegionCtrl.rawSQL);

export default router;
