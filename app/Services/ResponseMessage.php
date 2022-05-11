<?php

namespace App\Services;

class ResponseMessage
{
    public static function success($message): array
    {
        return [
            'message' => [
                'type' => 'success',
                'value' => $message
            ]
        ];
    }

    public static function error($message): array
    {
        return [
            'message' => [
                'type' => 'error',
                'value' => $message
            ]
        ];
    }
}
