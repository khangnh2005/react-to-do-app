export default function tasksReducer(taskList, action) {
  switch (action.type) {
    case "added":
      return [
        ...taskList,
        {
          id: action.id,
          title: action.title,
        },
      ];
    case "deleted":
      return taskList.filter(task => task.id !== action.deleteId);
    case "replaced":
      return taskList.map(task => {
        if (task.id === action.replaceId) {
          return {
            id: action.id,
            title: action.title,
          }
        } else {
          return task;
        }
      });
    default:
      throw Error('Unknown action: ' + action.type);
  }
}