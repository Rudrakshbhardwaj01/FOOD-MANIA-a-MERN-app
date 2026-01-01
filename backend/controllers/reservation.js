import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";
import { sendEmail } from "../utils/sendEmail.js";

export const sendReservation = async (req, res, next) => {

  if (!req.body) {
    return next(
      new ErrorHandler("Request body is missing", 400)
    );
  }

  const { firstName, lastName, email, phone, date, time } = req.body;

  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return next(
      new ErrorHandler("Please fill full reservation form!", 400)
    );
  }

  try {
    // 1️⃣ Save reservation to DB
    await Reservation.create({
      firstName,
      lastName,
      email,
      phone,
      date,
      time,
    });

    // 2️⃣ Send confirmation email
    try {
      await sendEmail({
        to: email,
        subject: "Your Reservation is Confirmed ✅",
        html: `
          <h2>Hello ${firstName},</h2>
          <p>Your table has been successfully reserved.</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time}</p>
          <p>We look forward to serving you 🍽️</p>
          <br/>
          <p>— Restaurant Team</p>
        `,
      });
    } catch (emailError) {
      console.error("Email failed to send:", emailError.message);
      // Reservation still succeeds even if email fails
    }

    // 3️⃣ Send response to frontend
    res.status(200).json({
      success: true,
      message: "Reservation confirmed and email sent",
    });

  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );

      return next(
        new ErrorHandler(validationErrors.join(", "), 400)
      );
    }

    return next(error);
  }
};
