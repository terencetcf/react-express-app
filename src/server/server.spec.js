import { addNewTask, updateTask } from "./server";

(async () => {
  await addNewTask({
    name: "My task 2",
    id: "12346"
  });

  await updateTask({
    name: "My task 2 updated",
    id: "12346"
  });
})();
