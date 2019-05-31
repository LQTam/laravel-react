<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("products")->insert(
            [
                [
                    "name" => "iPhone 5",
                    "price" => "3000000",
                    "condition" => 1
                ],
                [
                    "name" => "HTC One M2",
                    "price" => "2900000",
                    "condition" => 0
                ],
            ]
    );
    }
}
