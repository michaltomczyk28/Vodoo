<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        return TaskResource::collection(Task::all());
    }

    public function store(CreateTaskRequest $request)
    {
        $task = Task::create($request->all());

        return (new TaskResource($task->fresh()))
            ->response()
            ->setStatusCode(201);
    }

    public function show(Task $task)
    {
        return new TaskResource($task);
    }

    public function update(UpdateTaskRequest $request, Task $task)
    {
        $task->update($request->all());

        return (new TaskResource($task))
            ->response()
            ->setStatusCode(200);
    }

    public function destroy(Task $task)
    {
        $task->delete();

        return response()->noContent();
    }
}
