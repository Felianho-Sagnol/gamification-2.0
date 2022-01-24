<?php

namespace App\Http\Controllers;

use App\Models\Coach;
use App\Models\Etudiant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CoachController extends Controller
{
    public function addCoach(){
        $message = null;
        $error = null;


        $coach = DB::table('coaches')->where('matricule', $request->input('matricule'))->first();
        if(empty($coach)){
            $newCoach = new Coach;
            $newCoach->matricule = $request->input('matricule');
            $newCoach->name = $request->input('name');

            $newCoach->save();

            $message = "Coach ajouté avec succès.";
        }else{
            $error = "Un coach existe déjà avec ce matricule.";
        }
        $data = [
            "message" => $message,
            "error" => $error,
        ];

        return response()->json($data, 200);

    }

    /**
     * function utilitaires
    */

    public function getCoach(Request $request){
        $message = null;
        $error = null;
        $etudiants = [];
        $coachInfos = [
            "coach" => null,
            "etudiants" => null,
        ];

        $coach = DB::table('coaches')->where('matricule', $request->input('matricule'))->first();
        if(!empty($coach)){
            $coach_id = $coach->id;
            $coachInfos['coach'] = $coach;
            $etudiants = $this->getAllStudentsForACoach($coach_id);
            $coachInfos['etudiants'] = $etudiants;
        }else{
            $error = "Aucun coach trouvé avec ce matricule.";
        }

        $data = [
            "message" => $message,
            "error" => $error,
            "coach" => $coachInfos,
        ];

        return response()->json($data, 200);
    }


    public function getAllStudentsForACoach($coach_id){
        return Etudiant::where('coach_id',$coach_id)->get();
    }
}
