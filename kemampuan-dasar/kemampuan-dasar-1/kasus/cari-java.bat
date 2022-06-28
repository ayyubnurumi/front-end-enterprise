#!bin/bash

DIRECTORY=$(pwd)
if find .-iname "*.java"; then
   echo "ada file java pada directory" $DIRECTORY
else 
   echo "tidak ada file pada direktori" $DIRECTORY

fi