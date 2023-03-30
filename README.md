Concurrency: 10. Time: 1 minute

|                      | Complete Requests | Failed Requests | Requests per seconds | Longest transaction |
|----------------------|-------------------|-----------------|----------------------|---------------------|
| Beanstalkd           | 32640             | 0               | 540.49               | 19.59               |
| Beanstalkd Persist   | 32604             | 0               | 542.50               | 13.15               |
| Redis Pub/Sub        | 32627             | 5               | 538.40               | 19.52               |
| Redis RDB Pub/Sub    | 32592             | 7               | 536.23               | 19.53               |
| Redis AOF Pub/Sub    | 32574             | 7               | 542.00               | 19.55               |
| Redis RPUSH/LPOP     | 32634             | 8               | 537.89               | 20.19               |
| Redis RDB RPUSH/LPOP | 32621             | 6               | 537.86               | 19.52               |
| Redis AOF RPUSH/LPOP | 32633             | 6               | 541.81               | 20.16               |

Concurrency: 50. Time: 1 minute

|                      | Complete Requests | Failed Requests | Requests per seconds | Longest transaction |
|----------------------|-------------------|-----------------|----------------------|---------------------|
| Beanstalkd           | 32700             | 0               | 541.57               | 19.54               |
| Beanstalkd Persist   | 32708             | 37              | 541.52               | 19.55               |
| Redis Pub/Sub        | 32717             | 39              | 540.42               | 19.53               |
| Redis RDB Pub/Sub    | 32663             | 46              | 541.50               | 19.60               |
| Redis AOF Pub/Sub    | 32474             | 0               | 534.20               | 19.54               |
| Redis RPUSH/LPOP     | 32690             | 46              | 537.93               | 19.51               |
| Redis RDB RPUSH/LPOP | 32698             | 44              | 541.54               | 19.52               |
| Redis AOF RPUSH/LPOP | 32657             | 45              | 542.29               | 19.52               |

Concurrency: 100. Time: 1 minute

|                      | Complete Requests | Failed Requests | Requests per seconds | Longest transaction |
|----------------------|-------------------|-----------------|----------------------|---------------------|
| Beanstalkd           | 32760             | 0               | 542.65               | 19.56               |
| Beanstalkd Persist   | 32771             | 63              | 537.32               | 19.57               |
| Redis Pub/Sub        | 32832             | 87              | 547.02               | 19.97               |
| Redis RDB Pub/Sub    | 32839             | 85              | 545.14               | 19.54               |
| Redis AOF Pub/Sub    | 32523             | 93              | 536.42               | 19.64               |
| Redis RPUSH/LPOP     | 31935             | 88              | 525.33               | 19.57               |
| Redis RDB RPUSH/LPOP | 32799             | 89              | 543.84               | 19.52               |
| Redis AOF RPUSH/LPOP | 32452             | 92              | 536.75               | 19.53               |
