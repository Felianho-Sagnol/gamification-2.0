<?php

namespace App\Http\Controllers;

use App\Models\Section;
use Illuminate\Http\Request;

class SectionController extends Controller
{
    public function addSection(Request $request)
    {
        $s1 = new Section;
        $s1->name = "Les Verrous mentaux";
        $s1->imageUrl = 'verroumentaux.png';
        $s1->scoreMax = 50;

        $s1->save();

        $s2 = new Section;
        $s2->name = "Le processus de prise de décision rationnelle.";
        $s2->imageUrl = 'prisedecision.png';
        $s2->scoreMax = 50;

        $s2->save();

        return response()->json(Section::all(), 200);
    }

    public function getSections(Request $request)
    {
        return response()->json(Section::all(), 200);
    }

    public function getSectionById(Request $request){
        $section = Section::where('id',$request->input('id'))->first();
        $data = [
            "section" => $section,
        ];
        return response()->json($data, 200);
    }
}
