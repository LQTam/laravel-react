<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::resource('products', 'Api\ProductsController');
Route::get('/products','Api\ProductsController@index');
route::post('/products','Api\ProductsController@store');
Route::delete('/products/{id}','Api\ProductsController@destroy');
route::get("/products/{id}",'Api\ProductsController@show');
route::put('/products/{id}','Api\ProductsController@update');