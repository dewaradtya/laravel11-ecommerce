<?php

namespace Database\Seeders;

use App\Models\Menu;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Menu::create([
            'menu' => 'Dashboard',
            'url' => '/',
            'group_menu' => 'Admin',
            'is_active' => true,
        ]);
        Menu::create([
            'menu' => 'Customer',
            'url' => '/customer',
            'group_menu' => 'Admin',
            'is_active' => true,
        ]);
        Menu::create([
            'menu' => 'Project',
            'url' => '-',
            'group_menu' => 'Sales',
            'is_active' => true,
        ]);
        Menu::create([
            'menu' => 'Berlangsung',
            'url' => '/project',
            'group_menu' => 'Sales',
            'main_menu' => 3,
            'is_active' => true,
        ]);
        Menu::create([
            'menu' => 'Selesai',
            'url' => '/project/selesai',
            'group_menu' => 'Sales',
            'main_menu' => 3,
            'is_active' => true,
        ]);
        Menu::create([
            'menu' => 'Oprasional',
            'url' => '/oprasional',
            'group_menu' => 'Sales',
            'is_active' => true,
        ]);
        Menu::create([
            'menu' => 'Product',
            'url' => '-',
            'group_menu' => 'Sales',
            'is_active' => true,
        ]);
        Menu::create([
            'menu' => 'Product',
            'url' => '/products',
            'group_menu' => 'Sales',
            'main_menu' => 7,
            'is_active' => true,
        ]);
        Menu::create([
            'menu' => 'History',
            'url' => '/products/history',
            'group_menu' => 'Sales',
            'main_menu' => 7,
            'is_active' => true,
        ]);
        Menu::create([
            'menu' => 'Unit',
            'url' => '/units',
            'group_menu' => 'Sales',
            'main_menu' => 7,
            'is_active' => true,
        ]);
        Menu::create([
            'menu' => 'Purchase',
            'url' => '/purchase',
            'group_menu' => 'Sales',
            'is_active' => true,
        ]);
        Menu::create([
            'menu' => 'Invoice',
            'url' => '-',
            'group_menu' => 'Sales',
            'is_active' => true,
        ]);
        Menu::create([
            'menu' => 'Invoice Jual',
            'url' => '/invoice',
            'group_menu' => 'Sales',
            'main_menu' => 11,
            'is_active' => true,
        ]);
        Menu::create([
            'menu' => 'Invoice Hutang Beli',
            'url' => '/invoice/hutang',
            'group_menu' => 'Sales',
            'main_menu' => 11,
            'is_active' => true,
        ]);
        Menu::create([
            'menu' => 'Tax',
            'url' => '/tax',
            'group_menu' => 'General',
            'is_active' => true,
        ]);
        Menu::create([
            'menu' => 'Kelola',
            'url' => '-',
            'group_menu' => 'General',
            'is_active' => true,
        ]);
        Menu::create([
            'menu' => 'Modal',
            'url' => '/modal',
            'group_menu' => 'General',
            'main_menu' => 15,
            'is_active' => true,
        ]);
        Menu::create([
            'menu' => 'Hutang',
            'url' => '/Hutang',
            'group_menu' => 'General',
            'main_menu' => 15,
            'is_active' => true,
        ]);
        Menu::create([
            'menu' => 'Piutang',
            'url' => '/piutang',
            'group_menu' => 'General',
            'main_menu' => 15,
            'is_active' => true,
        ]);
    }
}
