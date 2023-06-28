// import {
//   take,
//   call,
//   put,
//   fork,
//   all,
//   SagaReturnType,
//   select,
// } from 'redux-saga/effects';
//
// import {
//   fetchTasksApi,
//   createTaskApi,
//   deleteTaskApi,
//   changeTaskApi,
// } from './api';
// import { actions } from './slice';
// import { getTasks, getValue } from './selectors';
//
// function* deleteTaskWorker({
//   payload: id,
// }: ReturnType<typeof actions.deleteTask>) {
//   const tasks: ReturnType<typeof getTasks> = yield select(getTasks);
//
//   try {
//     yield deleteTaskApi(id);
//
//     yield put(actions.setTasks(tasks.filter((t) => t.id !== id)));
//   } catch (error) {
//     console.error(error);
//   }
// }
//
// function* changeTaskWorker({
//   payload: id,
// }: ReturnType<typeof actions.changeTask>) {
//   const tasks: ReturnType<typeof getTasks> = yield select(getTasks);
//
//   try {
//     yield changeTaskApi(id);
//
//     yield put(
//       actions.setTasks(
//         tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
//       )
//     );
//   } catch (error) {
//     console.error(error);
//   }
// }
//
// function* getTasksWorker() {
//   yield put(actions.setLoading(true));
//
//   try {
//     const tasks: SagaReturnType<typeof fetchTasksApi> = yield fetchTasksApi();
//
//     yield put(actions.setTasks(tasks));
//   } catch (error) {
//     console.error(error);
//   } finally {
//     yield put(actions.setLoading(false));
//   }
// }
//
// function* createTaskWorker() {
//   const value: ReturnType<typeof getValue> = yield select(getValue);
//   const tasks: ReturnType<typeof getTasks> = yield select(getTasks);
//
//   if (!!value) {
//     try {
//       const task: SagaReturnType<typeof createTaskApi> = yield createTaskApi(
//         value
//       );
//
//       yield put(actions.setTasks([task, ...tasks]));
//       yield put(actions.setValue(''));
//     } catch (error) {
//       console.error(error);
//     } finally {
//       yield put(actions.setLoading(false));
//     }
//   } else {
//     yield put(actions.setError('Please fill in the field'));
//   }
// }
//
// function* getTasksWatcher() {
//   while (true) {
//     yield take(actions.fetchTasks.type);
//     yield call(getTasksWorker);
//   }
// }
//
// function* createTaskWatcher() {
//   while (true) {
//     yield take(actions.createTask.type);
//     yield call(createTaskWorker);
//   }
// }
//
// function* deleteTaskWatcher() {
//   while (true) {
//     const action: ReturnType<typeof actions.deleteTask> = yield take(
//       actions.deleteTask.type
//     );
//     yield call(deleteTaskWorker, action);
//   }
// }
//
// function* changeTaskWatcher() {
//   while (true) {
//     const action: ReturnType<typeof actions.changeTask> = yield take(
//       actions.changeTask.type
//     );
//     yield call(changeTaskWorker, action);
//   }
// }
//
// function* rootSaga() {
//   yield all([
//     // fork(getTasksWatcher),
//     fork(createTaskWatcher),
//     fork(deleteTaskWatcher),
//     fork(changeTaskWatcher),
//   ]);
// }
//
// export { rootSaga };
