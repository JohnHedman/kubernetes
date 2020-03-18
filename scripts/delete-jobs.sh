#!/bin/bash

for x in $(kubectl get jobs -o custom-columns=:.metadata.name)
do
    kubectl delete jobs $x
done
