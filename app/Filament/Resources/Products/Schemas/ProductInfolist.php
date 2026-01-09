<?php

namespace App\Filament\Resources\Products\Schemas;

use Filament\Infolists\Components\IconEntry;
use Filament\Infolists\Components\ImageEntry;
use Filament\Infolists\Components\RepeatableEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class ProductInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('name')
                    ->label('Nama')
                    ->size('lg')
                    ->weight('bold')
                    ->columnSpanFull(),
                TextEntry::make('stock')
                    ->label('Stok')
                    ->numeric(),
                TextEntry::make('category.name')
                    ->label('Kategori'),
                TextEntry::make('price')
                    ->label('Harga')
                    ->prefix('Rp')
                    ->numeric()
                    ->columnSpanFull(),
                RepeatableEntry::make('images')
                    ->label('List Gambar')
                    ->schema([
                        ImageEntry::make('image')
                            ->label('Gambar')
                            ->getStateUsing(fn($record) => asset('storage/' . $record->image)),
                        TextEntry::make('alt_text')
                            ->label('Deskripsi Singkat'),
                    ])
                    ->grid(3)
                    ->columnSpanFull(),
                IconEntry::make('is_available')
                    ->label('Tersedia')
                    ->boolean(),
                IconEntry::make('is_custom_order')
                    ->label('Custom Order')
                    ->boolean(),
                IconEntry::make('featured')
                    ->label('Unggulan')
                    ->boolean()
                    ->columnSpanFull(),
                TextEntry::make('created_at')
                    ->label('Dibuat pada')
                    ->dateTime(),
                TextEntry::make('updated_at')
                    ->label('Diperbarui pada')
                    ->dateTime(),
            ]);
    }
}
