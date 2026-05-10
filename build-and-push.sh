#!/bin/bash
set -euo pipefail

# ----------------------------
# Usage: ./build-and-push.sh
# ----------------------------

VERSION="10.0.15"

DOCKER_REPO="emondrian/emondrian"

echo "Building Maven project..."
mvn clean package -DskipTests

echo "Copying emondrian.war to project folder..."
cp target/emondrian.war ./emondrian.war

echo "Building Docker image $DOCKER_REPO:$VERSION ..."

sudo docker rmi "$DOCKER_REPO:$VERSION"

sudo docker build -f docker/Dockerfile -t "$DOCKER_REPO:$VERSION" .

sudo docker push "$DOCKER_REPO:$VERSION"

sudo docker tag "$DOCKER_REPO:$VERSION" "$DOCKER_REPO:latest"

sudo docker push "$DOCKER_REPO:latest"

echo "Build and push completed for version $VERSION ✅"
