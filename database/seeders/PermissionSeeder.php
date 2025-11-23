<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{

    public function run(): void
    {

        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // Define permissions
        $permissions = [

            'view users',
            'edit users',
            'delete users',
            'create users',

            'view permission',
            'edit permission',
            'delete permission',
            'create permission',

            'view role',
            'edit role',
            'delete role',
            'create role',

            //others

            'view blog',
            'edit blog',
            'delete blog',
            'create blog',



            'view category',
            'edit category',
            'delete category',
            'create category',

            'view contact',
            'edit contact',
            'delete contact',
            'create contact',

            'view officeSetting',
            'edit officeSetting',
            'delete officeSetting',
            'create officeSetting',

            'view menu',
            'edit menu',
            'delete menu',
            'create menu',

            'view product',
            'edit product',
            'delete product',
            'create product',

            'view slider',
            'edit slider',
            'delete slider',
            'create slider',


        ];

        // Create permissions
        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission]);
        }
    }
}
