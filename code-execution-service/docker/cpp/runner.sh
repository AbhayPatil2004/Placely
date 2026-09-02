#!/bin/bash

g++ /app/main.cpp -o /app/main

if [ $? -ne 0 ]; then
    exit 1
fi

/app/main