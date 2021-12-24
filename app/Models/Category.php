<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Post;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
    	'content',
    ];

    /**
     * Get the post that owns the comment.
     */
    public function posts()
    {
        return $this->belongsToMany(Post::class);
    }
}
