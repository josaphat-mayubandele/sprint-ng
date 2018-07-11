const mongoose = require('mongoose');

const sprintTemplateSchema = mongoose.Schema({
  name: String,
  duration: Number,
  status: String
});

const pastTemplateSchemaDAO = mongoose.model(
  'SprintTemplate',
  sprintTemplateSchema
);

export default pastTemplateSchemaDAO;
