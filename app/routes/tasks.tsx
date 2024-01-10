import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import { taskSchema } from "~/components/task/data/schema";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import TaskPage from "~/components/task";

async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/components/task/data/tasks.json")
  );
  const tasks = JSON.parse(data.toString());
  return z.array(taskSchema).parse(tasks);
}

export const loader = async () => {
  const tasks = await getTasks();
  return json({ tasks });
};

export default function Task() {
  const { tasks } = useLoaderData<typeof loader>();
  return <>{tasks ? <TaskPage tasks={tasks} /> : null}</>;
}
