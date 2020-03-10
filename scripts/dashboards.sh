#!/bin/bash

# Here is documentation on the commands:
# https://aws.amazon.com/premiumsupport/knowledge-center/eks-cluster-kubernetes-dashboard/


aws eks update-kubeconfig --name EKS_ClusterName

# Test the cluster connection
kubectl get nodes
kubectl get svc

# Enable Dashboards and other plugins
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v1.10.1/src/deploy/recommended/kubernetes-dashboard.yaml
kubectl apply -f https://raw.githubusercontent.com/kubernetes/heapster/master/deploy/kube-config/influxdb/heapster.yaml
kubectl apply -f https://raw.githubusercontent.com/kubernetes/heapster/master/deploy/kube-config/influxdb/influxdb.yaml
kubectl apply -f https://raw.githubusercontent.com/kubernetes/heapster/master/deploy/kube-config/rbac/heapster-rbac.yaml