<?php

namespace App\Http\Controllers;

use session;
use App\Models\Etudiant;
use Illuminate\Http\Request;

class EtudiantController extends Controller
{
    public function register(Request $request){
        $message = null;
        $error = null;

        $request->validate(
            [
                'name' => 'required',
                'firstName' => 'required',
                'password' => 'required',
                'email' => 'required|email',
                'appoge' => 'required',
            ]
        );

        $etudiant = Etudiant::where('email', '=', $request->input('email'))->first();
        if(!empty($etudiant)){
            $error = "Cette adresse email est déjà utilié pour un autre compte.";
            $data = [
                "message" => $message,
                "error" => $error,
                'user' => null
            ];
            return response()->json($data, 200);
        }else{
            $etudiant = new Etudiant;
            $etudiant->name = $request->input('name');
            $etudiant->firstName = $request->input('firstName');
            $etudiant->appoge = $request->input('appoge');
            $etudiant->password = sha1($request->input('password'));
            $etudiant->email = $request->input('email');

            $query = $etudiant->save();

            if($query){
                $message = "Votre compte a été crée avec succès.";
            }else{
                $error = "Une erreur est survenu lors de votre operation , veuillez rressayer.";
            }
            $data = [
                "message" => $message,
                "error" => $error,
                'user' => $etudiant,
            ];

            return response()->json($data, 200);
        }
    }

    public function logIn(Request $request){
        $message = null;
        $error = null;

        $request->validate(
            [
                'password' => 'required',
                'email' => 'required|email',
            ]
        );

        $etudiant = Etudiant::where('email', '=', $request->input('email'))->first();

        if(!empty($etudiant)){
            if($etudiant->password == sha1($request->input('password'))){
                $message = "Connecté avec succès.";
            }else{
                $error = "Mot de passe incorrecte.";
                $etudiant = null;
            }
        }else{
            $error = "Aucun compte trouvé avec cette adresse email.";
        }

        $data = [
            "message" => $message,
            "error" => $error,
            "user" => $etudiant
        ];

        return response()->json($data, 200);
    }


    public function logOut(Request $request){
        $data = [
            "state" => true,
        ];
        return response()->json($data, 200);
    }

}
