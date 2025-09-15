<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Author;
use App\Models\Category;
use App\Models\Course;

class CourseSeeder extends Seeder
{
    public function run(): void
    {
        // Categorias
        $extensao = Category::create(['name' => 'EXTENSÃO']);
        $bemViver = Category::create(['name' => 'BEM-VIVER']);
        $curtaDuracao = Category::create(['name' => 'CURTA DURAÇÃO']);
        $tecnologia = Category::create(['name' => 'TECNOLOGIA E PROFISSÃO']);

        // Autores
        $fundacao = Author::create(['name' => 'Fundação Demócrito Rocha']);
        $daniel = Author::create(['name' => 'Daniel Pagliuca']);
        $grecianny = Author::create(['name' => 'Grecianny Carvalho']);

        // Cursos
        $curso1 = Course::create([
            'title' => 'Educação Ambiental para um Presente Sustentável',
            'description' => 'Educação Ambiental para um Presente Sustentável',
            'image_url' => null,
            'author_id' => $fundacao->id,
        ]);
        $curso1->categories()->attach([$extensao->id, $bemViver->id]);

        $curso2 = Course::create([
            'title' => 'Como Implementar a Política Municipal de Educação Ambiental',
            'description' => 'Como Implementar a Política Municipal de Educação Ambiental',
            'image_url' => null,
            'author_id' => $daniel->id,
        ]);
        $curso2->categories()->attach([$curtaDuracao->id, $tecnologia->id]);

        $curso3 = Course::create([
            'title' => 'Bullying: conhecer para combater',
            'description' => 'Bullying: conhecer para combater',
            'image_url' => null,
            'author_id' => $grecianny->id,
        ]);
        $curso3->categories()->attach([$curtaDuracao->id, $bemViver->id]);

        $curso4 = Course::create([
            'title' => 'Gestão Fiscal Interfederativa',
            'description' => 'Gestão Fiscal Interfederativa',
            'image_url' => null,
            'author_id' => $fundacao->id,
        ]);
        $curso4->categories()->attach([$extensao->id, $bemViver->id]);
    }
}
