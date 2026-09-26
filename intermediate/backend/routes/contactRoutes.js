const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

// CREATE contact
router.post("/", async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            message
        } = req.body;

        if (!name || !email || !phone) {
            return res.status(400).json({
                success: false,
                message: "Please provide name, email and phone."
            });
        }

        const contact = await Contact.create({
            name,
            email,
            phone,
            message
        });

        res.status(201).json({
            success: true,
            message: "Contact submitted successfully.",
            data: contact
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to submit contact form.",
            error: error.message
        });
    }
});

// GET all contacts
router.get("/", async (req, res) => {
    try {
        const contacts = await Contact.find()
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: contacts.length,
            data: contacts
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch contacts.",
            error: error.message
        });
    }
});

// GET contact by ID
router.get("/:id", async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: "Contact not found."
            });
        }

        res.status(200).json({
            success: true,
            data: contact
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Invalid contact ID."
        });
    }
});

// UPDATE contact
router.put("/:id", async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: "Contact not found."
            });
        }

        res.json({
            success: true,
            message: "Contact updated successfully.",
            data: contact
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to update contact."
        });
    }
});

// DELETE contact
router.delete("/:id", async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(
            req.params.id
        );

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: "Contact not found."
            });
        }

        res.json({
            success: true,
            message: "Contact deleted successfully."
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Invalid contact ID."
        });
    }
});

module.exports = router;