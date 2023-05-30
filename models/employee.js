const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PersonalSchema = new Schema({
    first_name: { type: String, required: true },
    family_name: { type: String },
    date_of_birth: { type: Date },
    date_of_death: { type: Date },
    clearance_level: {
        type: String,
        enum: ["I", "II", "III", "IV", "V"],
        required: true
    }
});

PersonalSchema.virtual("url").get(function () {
    return `/database/personal/${this.id}`;
});

module.exports = mongoose.model("Personal", PersonalSchema);