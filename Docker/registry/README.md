# Docker Registry Setup

## Step 1: Create Directory Structure

Create a directory for your Docker registry configurations:

```bash
mkdir ~/docker-registry
cd ~/docker-registry
mkdir data auth
```

## Step 2: Create Docker Compose File

Create a `docker-compose.yml` file:

```bash
nano docker-compose.yml
```

Add the following configuration to the file:

```yaml
version: '3'

services:
  registry:
    image: registry:latest
    ports:
      - "5000:5000"
    environment:
      REGISTRY_STORAGE_FILESYSTEM_ROOTDIRECTORY: /data
      REGISTRY_AUTH: htpasswd
      REGISTRY_AUTH_HTPASSWD_REALM: Registry
      REGISTRY_AUTH_HTPASSWD_PATH: /auth/registry.password
    volumes:
      - ./data:/data
      - ./auth:/auth

```

This configuration sets up a basic Docker registry that listens on port 5000 and uses basic authentication.

## Step 3: Set Up Authentication

Install the `htpasswd` utility if it's not already available. This can typically be done using:

```yaml
sudo apt-get install apache2-utils # For Ubuntu/Debian systems
```

Create a password file for authentication:

```yaml
htpasswd -Bc auth/registry.password <username>
```

Replace `<username>` with your desired username. You will be prompted to enter a password.

## Step 4: Start the Docker Registry

Launch the Docker registry using Docker Compose:

```yaml
docker-compose up -d
```

Verify that the registry is running:

```yaml
docker-compose ps
```

You should see the registry service listed as running.

## Step 5: Accessing the Registry

To push or pull images from your local registry, you will need to specify the registry's address:

```yaml
docker tag <your-image> localhost:5000/<your-image>
docker push localhost:5000/<your-image>
```

Replace `<your-image>` with the name of your Docker image.