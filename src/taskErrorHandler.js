function handleTaskNotFound(task, res) {
  if (\!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  return null;
}

module.exports = { handleTaskNotFound };
