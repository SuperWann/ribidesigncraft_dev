FROM php:8.3-cli

# Set working directory
WORKDIR /var/www/html

# Set composer memory limit
ENV COMPOSER_MEMORY_LIMIT=-1
ENV COMPOSER_ALLOW_SUPERUSER=1

# Install system dependencies + supervisor
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libpq-dev \
    libzip-dev \
    zip \
    unzip \
    supervisor \
    nginx \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install \
    pdo_pgsql \
    mbstring \
    exif \
    pcntl \
    bcmath \
    gd \
    zip

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy seluruh aplikasi
COPY . .

# Beri izin execute untuk build.sh
RUN chmod +x build.sh

# Jalankan build script
RUN ./build.sh

# Create necessary directories
RUN mkdir -p storage/framework/sessions \
    storage/framework/views \
    storage/framework/cache \
    storage/logs \
    bootstrap/cache \
    /var/log/supervisor

# Set permissions
RUN chmod -R 775 storage \
    && chmod -R 775 bootstrap/cache \
    && chown -R www-data:www-data storage \
    && chown -R www-data:www-data bootstrap/cache

# Buat konfigurasi supervisor untuk multiple services
RUN mkdir -p /etc/supervisor/conf.d/

# Copy konfigurasi supervisor
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Copy nginx configuration (optional - kalau mau pake nginx)
COPY docker/nginx.conf /etc/nginx/nginx.conf

# Expose ports
EXPOSE 8000
EXPOSE 80
EXPOSE 443

# Jalankan supervisor
CMD ["/usr/bin/supervisord", "-n", "-c", "/etc/supervisor/conf.d/supervisord.conf"]