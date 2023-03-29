|                      | Put   | Read  |
|----------------------|-------|-------|
| Beanstalkd           | 0.05s | 0.05s |
| Redis RDB Pub/Sub    | 0.13s | 0.13s |
| Redis AOF Pub/Sub    | 0.13s | 0.13s |
| Redis RDB RPUSH/LPOP | 0.13s | 0.12s |
| Redis AOF RPUSH/LPOP | 0.12s | 0.12s |