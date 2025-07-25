import { Router } from "express"
import authRoutes from "./auth.routes.js"
import userRoutes from "./user.routes.js" // ← NUEVO
import hotelRoutes from "./hotel.routes.js"
import roomRoutes from "./room.routes.js"
import discountRoutes from "./discount.routes.js"
import bookingRoutes from "./booking.routes.js"
import commissionRoutes from "./commission.routes.js"
import upsellCodeRoutes from "./upsellCode.routes.js"
import paymentRoutes from "./payment.routes.js"
import emailRoutes from "./email.routes.js"
import addonRoutes from "./addon.routes.js"
import staffAddonRoutes from "./staffAddon.routes.js"

const router = Router()

router.use("/auth", authRoutes)
router.use("/users", userRoutes)
router.use("/hotels", hotelRoutes)
router.use("/hotels/:hotelId/rooms", roomRoutes)
router.use("/discounts", discountRoutes)
router.use("/bookings", bookingRoutes)
router.use("/commissions", commissionRoutes)
router.use("/upsell-code", upsellCodeRoutes)
router.use("/payments", paymentRoutes)
router.use("/email", emailRoutes)
router.use("/addons", addonRoutes)
router.use("/api/staff-addon", staffAddonRoutes)

export default router
