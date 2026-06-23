function validateTaskInput({ title, description, priority }) {
  const errors = [];
  if (\!title || title.trim() === '') errors.push('title is required');
  if (priority && \!['low', 'medium', 'high'].includes(priority)) {
    errors.push('priority must be low, medium, or high');
  }
  return errors;
}

module.exports = { validateTaskInput };
