const mongoose = require('mongoose');

// export default pastSprintSchemaDAO;

const pastSprintSchema = mongoose.Schema({
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
const pastSprintSchemaDAO = mongoose.model('PastSprints', pastSprintSchema);

export default pastSprintSchemaDAO;
