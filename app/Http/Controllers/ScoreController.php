<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Score;

class ScoreController extends Controller
{
    // 
    public function postScore(Request $request) {
        // recieve 2 post requests from scoring
        // request->score
        // request->userId
        $score = new Score;
        $score->score = $request->score;
        $score->userId = $request->userId;
        $score->save();

        return "Done";
    }

    public function getUserHighScore() {

    }

    public function getHighScore() {
        $scores = DB::select('select name,score from scores inner join users where scores.userId = users.id order by score DESC');
        return $scores;
    }
}
