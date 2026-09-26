const express = require("express");
const Appointment = require("../models/Appointment");

const router = express.Router();

// CREATE appointment
router.post("/", async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            date,
            time,
            treatment,
            message
        } = req.body;

        if (!name || !email || !phone || !date || !time || !treatment) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required fields."
            });
        }

        const appointment = await Appointment.create({
            name,
            email,
            phone,
            date,
            time,
            treatment,
            message
        });

        res.status(201).json({
            success: true,
            message: "Appointment created successfully.",
            data: appointment
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create appointment.",
            error: error.message
        });
    }
});


// GET all appointments
router.get("/", async (req, res) => {
    try {
        const appointments = await Appointment.find()
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: appointments.length,
            data: appointments
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch appointments.",
            error: error.message
        });
    }
});


// GET appointment by ID
router.get("/:id", async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);

        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "Appointment not found."
            });
        }

        res.status(200).json({
            success: true,
            data: appointment
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Invalid appointment ID."
        });
    }
});


// UPDATE appointment
router.put("/:id", async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "Appointment not found."
            });
        }

        res.json({
            success: true,
            message: "Appointment updated successfully.",
            data: appointment
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to update appointment."
        });
    }
});


// DELETE appointment
router.delete("/:id", async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndDelete(
            req.params.id
        );

        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "Appointment not found."
            });
        }

        res.json({
            success: true,
            message: "Appointment deleted successfully."
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Invalid appointment ID."
        });
    }
});

module.exports = router;