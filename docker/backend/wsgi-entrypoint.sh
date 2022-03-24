#!/bin/sh

# Wait till server is ready
until cd /code/backend
do
    echo "Waiting for server volume..."
done

# Run DB migration and collect static files
./manage.py collectstatic --noinput
# Apply all migrations
./manage.py makemigrations
./manage.py migrate

# Run all test cases
./manage.py test

# Run gunicorn server with 4 workers and threads (16 concurrent request)
gunicorn backend.wsgi --bind 0.0.0.0:8000 --workers 4 --threads 4 --log-level debug

