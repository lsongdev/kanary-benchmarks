#!/usr/bin/env bash

for f in http express koa kelp kanary fastify; do
  node "benchmarks/${f}-example.js" &> /dev/null &
  pid=$!
  sleep 2
  printf "$f\t"
  # autocannon -c 100 -d 5 -p 10 localhost:3000
  wrk 'http://localhost:3000' \
  -d 5 \
  -c 100 \
  -t 10 \
  | grep 'Requests/sec' \
  | awk '{ print $2 }'
  kill $pid
  wait $! 2>/dev/null
done