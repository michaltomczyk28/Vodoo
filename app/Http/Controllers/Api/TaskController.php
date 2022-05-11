<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use App\Services\ResponseMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    public function index()
    {
        $whereConditions = [];

        $whereConditions['is_done'] = request('is_done') ?? 0;

        if ($deadline = request('deadline'))
            $whereConditions['deadline'] = $deadline;

        if ($deadlineMin = request('deadlineMin'))
            $whereConditions[] = ['deadline', '>=', $deadlineMin];

        if ($deadlineMax = request('deadlineMax'))
            $whereConditions[] = ['deadline', '<=', $deadlineMax];

        $tasks = Auth::user()
            ->tasks()
            ->where($whereConditions)
            ->orderBy('created_at', 'desc')
            ->get();

        return TaskResource::collection($tasks);
    }

    public function store(CreateTaskRequest $request)
    {
        $task = Auth::user()
            ->tasks()
            ->create($request->all());

        return (new TaskResource($task->fresh()))
            ->additional(ResponseMessage::success("You've successfully added a new task!"))
            ->response()
            ->setStatusCode(201);
    }

    public function show(Task $task)
    {
        $this->authorize('view', $task);

        return new TaskResource($task);
    }

    public function update(UpdateTaskRequest $request, Task $task)
    {
        $this->authorize('update', $task);
        $task->update($request->all());

        return (new TaskResource($task))
            ->additional(ResponseMessage::success("You've successfully updated the task!"))
            ->response()
            ->setStatusCode(200);
    }

    public function toggleDone(Task $task)
    {
        $task->is_done = !$task->is_done;
        $task->save();

        return (new TaskResource($task))
            ->response()
            ->setStatusCode(200);
    }

    public function destroy(Task $task)
    {
        $this->authorize('delete', $task);
        $task->delete();

        return response()
            ->json(ResponseMessage::success("You've successfully removed the task!"));
    }
}
