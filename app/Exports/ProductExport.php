<?php

namespace App\Exports;

use App\Models\Product;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithTitle;

class ProductExport implements FromCollection, WithHeadings, WithTitle
{
    public function collection()
    {
        return Product::select('name', 'model_number', 'stock', 'unit', 'price', 'purchase_price')->get();
    }

    public function headings(): array
    {
        return ['Nama Produk', 'Kode Barang', 'Stock', 'Unit', 'Harga Jual', 'Harga Beli'];
    }

    public function title(): string
    {
        return 'Product';
    }
}
