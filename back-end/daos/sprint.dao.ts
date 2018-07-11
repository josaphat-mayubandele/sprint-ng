const mongoose = require('mongoose');

// export default sprintSchemaDAO;

const sprintSchema = mongoose.Schema({
  name: String,
  duration: Number,
  status: String,
  progress: Number,
  description: String,
  notify: Boolean,
  user: String,
  createdAt: Date,
  startedAt: Date,
  finishedAt: Date
});
const sprintSchemaDAO = mongoose.model('PastSprints', sprintSchema);

export default sprintSchemaDAO;
