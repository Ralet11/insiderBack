import { Router } from "express";
import { createHotel, getHotels, getHotelById, getHotelImages, getHotelsWithRooms } from "../controllers/hotel.controller.js";
import { authenticate, authorizeAdmin } from "../middleware/auth.js";
const router = Router();

router.get("/", getHotels);
router.get("/hotelsAndRooms", getHotelsWithRooms)
router.get("/:id", getHotelById);
router.post("/", authenticate, authorizeAdmin, createHotel);
router.get("/:id/images", getHotelImages);



export default router;
