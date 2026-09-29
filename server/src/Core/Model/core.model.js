import mongoose from 'mongoose';
const baseSchemaOptions = { timestamps: true };
const questionSchema = new mongoose.Schema({
    ID: { type: Number, required: true },
    Question: { type: String, required: true },
    Answer: { type: String, required: true },
    Difficulty: { type: String, default: "N/A" }
}, {
    timestamps: true
});

const Question = mongoose.model('Question', questionSchema);
export default Question;

// 1. DBMS Schema & Model
const dbmsSchema = new mongoose.Schema({
    ID: { type: Number, required: true },
    Question: { type: String, required: true },
    Answer: { type: String, required: true },
    Difficulty: { type: String, default: "N/A" }
}, baseSchemaOptions);

export const DBMSQuestion = mongoose.model('DBMSQuestion', dbmsSchema);

// 2. CN Schema & Model
const cnSchema = new mongoose.Schema({
    ID: { type: Number, required: true },
    Question: { type: String, required: true },
    Answer: { type: String, required: true },
    Difficulty: { type: String, default: "N/A" }
}, baseSchemaOptions);

export const CNQuestion = mongoose.model('CNQuestion', cnSchema);

// 3. OS Schema & Model
const osSchema = new mongoose.Schema({
    ID: { type: Number, required: true },
    Question: { type: String, required: true },
    Answer: { type: String, required: true },
    Difficulty: { type: String, default: "N/A" }
}, baseSchemaOptions);

export const OSQuestion = mongoose.model('OSQuestion', osSchema);

const sweSchema = new mongoose.Schema({
    ID: { type: Number, required: true },
    Question: { type: String, required: true },
    Answer: { type: String, required: true },
    Difficulty: { type: String, default: "N/A" }
}, baseSchemaOptions);

export const SWEQuestion = mongoose.model('SWEQuestion', sweSchema);