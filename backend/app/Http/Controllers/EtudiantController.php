<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EtudiantController extends Controller
{
    public function register(Request $request){
        $data = [
            "message" => "Hello word",
        ];

        return response()->json($data, 200);
    }

    public function login(Request $request){
        $data = [
            "message" => "Hello word",
        ];

        return response()->json($data, 200);
    }
}
