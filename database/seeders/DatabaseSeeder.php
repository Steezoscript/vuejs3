<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Post;
use App\Models\Comment;
use App\Models\Category;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
    	/*$posts = Post::factory()->count(15)->has(Comment::factory()->count(rand(5, 10)))->create();
		$categories = Category::factory()->count(15)->create();

		$posts->first()->categories()->sync($categories);*/
		Post::factory()->count(15)->has(Comment::factory()->count(2))->has(Category::factory()->count(2))->create();
    }
}
