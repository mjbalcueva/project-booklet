<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UploadController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $books = Book::where('user_id', auth()->user()->id)->with('chapters')->paginate(10);

    return Inertia::render('Upload/Index', [
      'books' => $books,
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return Inertia::render('Uploads/Create');
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Display the specified resource.
   */
  public function show(Book $book)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Book $book)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Book $book)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Book $book)
  {
    //
  }
}