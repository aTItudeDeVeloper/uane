<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
	public function categories()
	{
		return $this->belongsToMany(Category::class, 'category_course');
	}

	public function author()
	{
		return $this->belongsTo(Author::class);
	}
}
