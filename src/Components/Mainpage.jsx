import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { ScrollArea } from "../components/ui/scroll-area";

function Mainpage() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("Medium");
  const [taskAssignee, setTaskAssignee] = useState("");
  const [taskStatus, setTaskStatus] = useState("Pending");
  const [taskDate, setTaskDate] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

 
  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedTasks = tasks.map((task, i) =>
        i === editIndex
          ? {
              title: taskTitle,
              description: taskDescription,
              priority: taskPriority,
              assignee: taskAssignee,
              status: taskStatus,
              date: taskDate,
            }
          : task
      );
      setTasks(updatedTasks);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      const newTask = {
        title: taskTitle,
        description: taskDescription,
        priority: taskPriority,
        assignee: taskAssignee,
        status: taskStatus,
        date: taskDate,
      };
      setTasks([...tasks, newTask]);
    }
    resetForm();
  };


  const resetForm = () => {
    setTaskTitle("");
    setTaskDescription("");
    setTaskPriority("Medium");
    setTaskAssignee("");
    setTaskStatus("Pending");
    setTaskDate("");
  };

 
  const handleEdit = (index) => {
    const task = tasks[index];
    setTaskTitle(task.title);
    setTaskDescription(task.description);
    setTaskPriority(task.priority);
    setTaskAssignee(task.assignee);
    setTaskStatus(task.status);
    setTaskDate(task.date);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, status: "Completed" } : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-col items-center p-8 min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="flex flex-row justify-between gap-12 w-full max-w-screen-xl">
        <Card className="w-[400px] bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white shadow-lg p-6 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-['Neue_Montreal']">{isEditing ? "Edit Task/Bug" : "Create Task/Bug"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleTaskSubmit}>
              <div className="grid gap-6">
                <div className="flex flex-col">
                  <Label htmlFor="title" className="text-sm text-gray-300">Title</Label>
                  <Input
                    id="title"
                    type="text"
                    placeholder="Task Title"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    required
                    className="p-3 bg-gray-700 text-white border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex flex-col">
                  <Label htmlFor="description" className="text-sm text-gray-300">Description</Label>
                  <Input
                    id="description"
                    type="text"
                    placeholder="Task Description"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    required
                    className="p-3 bg-gray-700 text-white border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>


                <div className="flex flex-col">
                  <Label htmlFor="priority" className="text-sm text-gray-300">Priority</Label>
                  <select
                    id="priority"
                    value={taskPriority}
                    onChange={(e) => setTaskPriority(e.target.value)}
                    className="p-3 bg-gray-700 text-white border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>


                <div className="flex flex-col">
                  <Label htmlFor="assignee" className="text-sm text-gray-300">Assignee</Label>
                  <Input
                    id="assignee"
                    type="text"
                    placeholder="Assignee Name"
                    value={taskAssignee}
                    onChange={(e) => setTaskAssignee(e.target.value)}
                    required
                    className="p-3 bg-gray-700 text-white border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>


                <div className="flex flex-col">
                  <Label htmlFor="status" className="text-sm text-gray-300">Status</Label>
                  <select
                    id="status"
                    value={taskStatus}
                    onChange={(e) => setTaskStatus(e.target.value)}
                    className="p-3 bg-gray-700 text-white border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>


                <div className="flex flex-col">
                  <Label htmlFor="date" className="text-sm text-gray-300">Deadline</Label>
                  <Input
                    id="date"
                    type="datetime-local"
                    value={taskDate}
                    onChange={(e) => setTaskDate(e.target.value)}
                    required
                    className="p-3 bg-gray-700 text-white border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <Button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg focus:ring-2 focus:ring-blue-400">
                  {isEditing ? "Save Changes" : "Add Task"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>


        <ScrollArea className="w-full lg:w-[800px] max-h-[750px] p-4 bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg shadow-lg border-gray-700">
  {tasks.length === 0 ? (
    <div className="text-center text-gray-400">No tasks yet. Start by adding a task!</div>
  ) : (
    tasks.map((task, index) => (
      <Card
        key={index}
        className="mb-6 p-6 shadow-md rounded-lg border border-gray-700 bg-gray-800 hover:bg-gray-700 hover:shadow-2xl hover:border-blue-500 transition-all duration-300"
      >
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-white">{task.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-300">
            Priority:{" "}
            <span
              className={`font-medium ${
                task.priority === "High"
                  ? "text-red-500"
                  : task.priority === "Medium"
                  ? "text-yellow-400"
                  : "text-green-500"
              }`}
            >
              {task.priority}
            </span>
          </p>
          <p className="text-sm text-gray-300">
            Status:{" "}
            <span
              className={`font-medium ${
                task.status === "Completed"
                  ? "text-green-400"
                  : task.status === "In Progress"
                  ? "text-yellow-400"
                  : "text-gray-400"
              }`}
            >
              {task.status}
            </span>
          </p>
          <p className="text-sm text-gray-300">Description: {task.description}</p>
          <p className="text-sm text-gray-300">Assignee: {task.assignee}</p>
          <p className="text-sm text-gray-300">
            Deadline: {new Date(task.date).toLocaleString()}
          </p>
        </CardContent>
        <CardFooter className="flex justify-start gap-3">
          <Button
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg"
            onClick={() => handleEdit(index)}
          >
            Edit
          </Button>
          <Button
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
            onClick={() => handleComplete(index)}
          >
            Complete
          </Button>
          <Button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
            onClick={() => handleDelete(index)}
          >
            Delete
          </Button>
        </CardFooter>
      </Card>
    ))
  )}
</ScrollArea>

      </div>
    </div>
  );
}

export default Mainpage;
