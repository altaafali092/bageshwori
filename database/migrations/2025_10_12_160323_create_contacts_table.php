<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  
    public function up(): void
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
             $table->string('name');
            $table->string('email')->unique();
            $table->text('message')->nullable();
            $table->string('contact_no')->nullable();
            $table->boolean('status')->default(true);
            $table->softDeletes();
            $table->timestamps();
        });
    }
    public function down(): void
    {
        Schema::dropIfExists('contacts');
    }
};
