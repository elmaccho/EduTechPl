<?php

use App\LanguagesEnum;
use App\LevelEnum;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('courses', function (Blueprint $table) {
            $table->decimal('price', 8, 2)->default(0.00)->after('title');
            $table->integer('duration')->default(0)->after('price');
            $table->enum('level', array_column(LevelEnum::cases(), 'value'))->nullable()->after('duration');
            $table->enum('language', array_column(LanguagesEnum::cases(), 'value'))->nullable()->after('level');
            $table->integer('student_count')->default(0)->after('language');
            $table->integer('rating_count')->default(0)->after('student_count');
            $table->decimal('rating_average', 3, 2)->default(0.00)->after('rating_count');
            $table->boolean('active')->default(0)->after('rating_average');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('courses', function (Blueprint $table) {
            $table->dropColumn([
                'price',
                'duration',
                'level',
                'language',
                'student_count',
                'rating_count',
                'rating_average',
                'active'
            ]);
        });
    }
};
