const PRIORITY_LEVELS = ['low', 'medium', 'high'];

function validatePriority(priority) {
  if (\!PRIORITY_LEVELS.includes(priority)) {
    throw new Error(`Invalid priority. Must be one of: ${PRIORITY_LEVELS.join(', ')}`);
  }
  return priority;
}

module.exports = { PRIORITY_LEVELS, validatePriority };
