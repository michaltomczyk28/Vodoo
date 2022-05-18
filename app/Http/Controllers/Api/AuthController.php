<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Services\ResponseMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request){
        $fields = $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required|string|min:8|confirmed'
        ]);

        $user = User::create([
            'first_name' => $fields['first_name'],
            'last_name' => $fields['last_name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password'])
        ]);

        $token = $user->createToken('apptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ] + ResponseMessage::success("You've succesfully signed up!");

        return response()->json($response, 201);
    }

    public function login(Request $request){
        $fields = $request->validate([
            'email' => 'required|email|string',
            'password' => 'required|string'
        ]);

        $user = User::where('email', $fields['email'])->first();
        if(!$user || !Hash::check($fields['password'], $user->password))
            return response()->json(ResponseMessage::error('Bad credits!'),401);

        $token = $user->createToken('apptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token,
        ] + ResponseMessage::success("You've successfully logged in!");

        return response()->json($response, 201);
    }

    public function logout(Request $request){
        auth()->user()->tokens()->delete();

        return response()->json(ResponseMessage::success("You've successfully logged out!"));
    }

    public function user(){
        return auth()->user();
    }
}
