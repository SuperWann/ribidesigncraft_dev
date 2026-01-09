<?php

namespace App\Filament\Resources\Galleries\Schemas;

use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class GalleryInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('title'),
                TextEntry::make('gallery_category_id')
                    ->numeric(),
                TextEntry::make('created_at')
                    ->dateTime(),
            ]);
    }
}
