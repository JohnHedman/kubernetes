#!/bin/bash

JOB_NUM=$1

echo "Submitting $JOB_NUM jobs"

# Use the first command argument to know how many jobs to submit
for x in $(seq $JOB_NUM)
do
    kubectl create -f /home/ec2-user/repos/kubernetes/containers/prime-job/prime_job.yaml
done

echo "Done submitting!"