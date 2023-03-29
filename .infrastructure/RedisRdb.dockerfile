FROM redis:latest

COPY redis-conf /etc/redis

ENTRYPOINT ["redis-server", "/etc/redis/redis-rdb.conf"]