import { defineStore } from 'pinia'
interface TaskModel {
  id: string
  name: string
  taskId: string
}
export const useGeneralStore = defineStore('alerts', {
  state: () => ({
    username: '',
    taskList: [] as TaskModel[],
    task: ''
  }),
  actions: {
    setUsername(username: string) {
      this.username = username
    },
    setTaskList(taskList: any) {
      this.taskList = taskList
    },
    setTask(task: string) {
      this.task = task
    },
    deleteTask(id: string) {
      this.taskList = this.taskList.filter((task) => task.taskId !== id)
    }
  }
})
