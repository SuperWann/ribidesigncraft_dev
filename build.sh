#!/usr/bin/env bash
set -e

echo "📦 Installing PHP dependencies..."
composer install --no-dev --optimize-autoloader

echo "📦 Installing Node dependencies..."
npm ci

echo "🔨 Building assets..."
npm run build

echo "🗄️ Caching Laravel configuration..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo "✅ Build completed!"