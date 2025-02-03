const mongoose = require('mongoose');

const ProposalSchema = new mongoose.Schema({
    creatorName: String,
    creatorEmail: String,
    recipientName: String,
    // recipientEmail: String,
    uniqueId: String,
    response: String
});

module.exports = mongoose.model('Proposal', ProposalSchema);
