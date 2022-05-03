<?php


namespace App\Http\Scopes;


use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class NewestOrderScope implements Scope
{
    public function apply(Builder $builder, Model $model)
    {
        $builder->orderByDesc('created_at');
    }
}
