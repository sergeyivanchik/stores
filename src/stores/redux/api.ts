// import { restApi } from '@/api';
//
// import { ITask } from '@/types';
//
// const fetchTasksApi = async (): Promise<ITask[]> => {
//   const { data: tasks } = await restApi.get<ITask[]>('todos');
//
//   return tasks;
// };
//
// const createTaskApi = async (title: ITask['title']): Promise<ITask> => {
//   const { data: task } = await restApi.post<ITask>('todos', {
//     title,
//     completed: false,
//   });
//
//   return task;
// };
//
// const deleteTaskApi = async (id: ITask['id']) => {
//   await restApi.delete(`todos/${id}`);
// };
//
// const changeTaskApi = async (id: ITask['id']) => {
//   await restApi.put(`todos/${id}`);
// };
//
// export { fetchTasksApi, createTaskApi, deleteTaskApi, changeTaskApi };
