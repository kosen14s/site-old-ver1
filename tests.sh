#!/bin/bash

src_dir="./src"

if [ -e $src_dir ]; then
  echo "$src_dir exists."
else
  echo "$src_dir NOT exists."
fi
