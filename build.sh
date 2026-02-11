#!/usr/bin/env bash
set -e

# Install PHP dependencies
composer install --no-dev --optimize-autoloader

# Install Node dependencies and build assets
npm ci
npm run build

# Cache Laravel configuration
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Run migrations
php artisan migrate --force