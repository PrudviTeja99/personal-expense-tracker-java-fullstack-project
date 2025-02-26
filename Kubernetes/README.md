To create ingress controller along with nodeport or loadbalancer service use this.

```yaml
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.3.0/deploy/static/provider/cloud/deploy.yaml
```

### **Ingress Resource**

To rewrite URLs in an Ingress resource using the Nginx Ingress Controller, you can use the `nginx.ingress.kubernetes.io/rewrite-target` annotation. This annotation allows you to specify a target URI where the traffic should be redirected.

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-resource
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /$2
    nginx.ingress.kubernetes.io/use-regex: "true"
spec:
  ingressClassName: nginx
  rules:
  - host: example.com
    http:
      paths:
      - path: /auth/api(/|$)(.*)
        pathType: ImplementationSpecific
        backend:
          service:
            name: backend-service
            port:
              number: 8080
```

In this example:

- The `nginx.ingress.kubernetes.io/rewrite-target: /$2` annotation rewrites the URL to the path captured by the second group in the regular expression (i.e., `(.*)`).
- The `nginx.ingress.kubernetes.io/use-regex: "true"` annotation enables the use of regular expressions in the path.
- The path `/auth/api(/|$)(.*)` captures any characters after `/auth/api/` and assigns them to the placeholder `$2`, which is then used in the `rewrite-target` annotation.

## How It Works:

1. **Incoming Request**: A request is made to `http://example.com/auth/api/some/path`.
2. **URL Rewrite**: The Nginx Ingress Controller rewrites the URL to `/some/path` using the `rewrite-target` annotation.
3. **Forward to Backend**: The request is forwarded to the `backend-service` on port `8080` with the rewritten URL.