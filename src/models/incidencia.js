const { Schema, model } = require('mongoose');

const incidenciaSchema = new Schema({
    rfc8: String,
    admi: String,
    problem: String,
    descri: String,
    fecha: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = model('Incidencia', incidenciaSchema);