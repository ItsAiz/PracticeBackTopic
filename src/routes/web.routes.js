import { Router, request, response } from "express";

import { methods as TopicController } from "../controllers/TopicController.controller";

const router = Router()

router.get("/", (req, res) =>{
    res.json("Inicio")
})

router.get("/getTopics", TopicController.getTopics);
router.post("/createTopic", TopicController.createTopic)
router.patch("/updateTopic/:id", TopicController.updateTopic)
router.delete("/deleteTopic/:id", TopicController.deleteTopic)
  
export default router;