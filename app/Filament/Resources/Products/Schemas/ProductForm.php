<?php

namespace App\Filament\Resources\Products\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;

class ProductForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->label('Nama')
                    ->columnSpanFull()
                    ->required(),
                Textarea::make('description')
                    ->label('Deskripsi')
                    ->columnSpanFull(),
                Repeater::make('images')
                    ->relationship('images') 
                    ->label('Gambar')
                    ->schema([
                        FileUpload::make('image')
                            ->label('File Gambar')
                            ->directory('products')
                            ->disk('public')
                            ->image()
                            ->required(),

                        TextInput::make('alt_text')
                            ->label('Deskripsi Gambar')
                            ->placeholder('Deskripsi gambar untuk SEO'),
                    ])
                    ->columnSpanFull()
                    ->addActionLabel('Tambah gambar'),
                Select::make('product_category_id')
                    ->label('Kategori')
                    ->required()
                    ->searchable()
                    ->preload()
                    ->relationship('category', 'name')
                    ->createOptionForm([
                        TextInput::make('name')
                            ->label('Nama kategori')
                            ->required(),
                    ])
                    ->editOptionForm([
                        TextInput::make('name')->required(),
                    ]),
                TextInput::make('stock')
                    ->label('Stok')
                    ->required()
                    ->numeric()
                    ->default(0),
                TextInput::make('price')
                    ->label('Harga')
                    ->default(0)
                    ->columnSpanFull()
                    ->required()
                    ->numeric()
                    ->prefix('Rp'),
                Toggle::make('is_available')
                    ->label('Produk tersedia?')
                    ->default(true)
                    ->required(),
                Toggle::make('is_custom_order')
                    ->label('Produk bisa pesan kustom?')
                    ->default(false)
                    ->required(),
                Toggle::make('featured')
                    ->label('Produk unggulan?')
                    ->default(false)
                    ->required(),
            ]);
    }
}
