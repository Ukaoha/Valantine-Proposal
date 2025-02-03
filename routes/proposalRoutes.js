const express = require('express');
const router = express.Router();
const Proposal = require('../models/Proposal');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Create a new proposal
router.post('/create-proposal', async (req, res) => {
    try {
        const { creatorName, creatorEmail, recipientName } = req.body;
        const uniqueId = crypto.randomBytes(8).toString('hex');

        const proposal = new Proposal({
            creatorName,
            creatorEmail,
            recipientName,
            // recipientEmail,
            uniqueId,
            response: null
        });

        await proposal.save();
        const proposalUrl = `${process.env.FRONTEND_URL}/proposal/${uniqueId}`;

        res.json({ proposalUrl });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Fetch Proposal by ID
router.get('/proposal/:uniqueId', async (req, res) => {
    try {
        const { uniqueId } = req.params;
        const proposal = await Proposal.findOne({ uniqueId });

        if (!proposal) return res.status(404).json({ message: 'Proposal not found' });

        res.json(proposal);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Handle YES/NO Response
router.post('/response', async (req, res) => {
    try {
        const { uniqueId, response } = req.body;
        const proposal = await Proposal.findOneAndUpdate(
            { uniqueId },
            { response },
            { new: true }
        );

        if (!proposal) return res.status(404).json({ message: 'Proposal not found' });

        // Send Email Notification to Creator
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: proposal.creatorEmail,
            subject: 'Your Proposal Response',
            text: `${proposal.recipientName} has responded: ${response}`
        };

        await transporter.sendMail(mailOptions);

        res.json({ message: 'Response recorded and email sent!' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
