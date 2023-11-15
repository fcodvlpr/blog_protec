<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use App\Http\Requests\StoreBlogRequest;
use Illuminate\Support\Facades\Validator;
use DB;
use Log;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            $sql = "CALL search_blogs(?);";

            $response = DB::select($sql, array(''));

            return Response::json($response);
            
        } catch (\Throwable $th) {
            $status = $th->getCode();
            $message = $th->getMessage();

            // Log::info($status);
            // Log::info($message);

            return Response::json(['error' => $message], $status);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBlogRequest $request)
    {
        try {
            $validated = $request->validated();
            
            $sql = "CALL save_blog(?, ?, ?, ?);";

            $response = DB::select($sql, array(
                $request->title,
                $request->author,
                $request->content,
                $request->image,
            ));

            return Response::json(["message" => "Success"]);
        } catch (\Throwable $th) {
            $status = $th->getCode();
            $message = $th->getMessage();

            // Log::info($status);
            // Log::info($message);

            return Response::json(['error' => $message], $status);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $sql = "CALL find_blog_by_id(?);";

            $response = DB::select($sql, array($id));

            return Response::json($response);
        } catch (\Throwable $th) {
            $status = $th->getCode();
            $message = $th->getMessage();

            // Log::info($status);
            // Log::info($message);

            return Response::json(['error' => $message], $status);
        }
    }

    /**
     * Display the specified resource by term.
     */
    public function search(string $term)
    {
        try {
            $sql = "CALL search_blogs(?);";

            $response = DB::select($sql, array($term));

            return Response::json($response);
        } catch (\Throwable $th) {
            $status = $th->getCode();
            $message = $th->getMessage();

            // Log::info($status);
            // Log::info($message);

            return Response::json(['error' => $message], $status);
        }
    }
}
