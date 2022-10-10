Some notes:
https://kubernetes.github.io/ingress-nginx/deploy/#environment-specific-instructions

How to create a Secret: 

<code>
  kubectl create secret generic **jwt-secret** --from-literal=jwt=asdf
</code>

**jwt-secret** is the name of the secret, like a pod name
generic - what kind of secret describing the purpose 
jwt=asdf - a key-value pair
This is an imperative command -> we do not want to have a value listing out a config file

When starting a cluster, you need to remember the different secrets manually created. Store this command in a very secure env.

Testing

npm install --save-dev @types/jest @types/supertest jest
ts-jest supertest mongodb-memory-server