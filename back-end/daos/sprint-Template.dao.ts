const mongoose = require('mongoose');

const sprintTemplateSchema = mongoose.Schema({
  name: String,
  duration: Number,
  status: String
});

const sprintTemplateSchemaDAO = mongoose.model(
  'SprintTemplate',
  sprintTemplateSchema
);

export default sprintTemplateSchemaDAO;
