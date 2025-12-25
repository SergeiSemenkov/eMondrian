#!/bin/bash
set -euo pipefail

# ----------------------------
# Usage: ./build-and-push.sh
# ----------------------------

VERSION="1.0.0"

DOCKER_REPO="emondrian/emondrian"

echo "Building Docker image $DOCKER_REPO:$VERSION ..."

sudo docker build -f docker/Dockerfile -t "$DOCKER_REPO:$VERSION" .

sudo docker push "$DOCKER_REPO:$VERSION"

sudo docker tag "$DOCKER_REPO:$VERSION" "$DOCKER_REPO:latest"

sudo docker push "$DOCKER_REPO:latest"

echo "Build and push completed for version $VERSION ✅"
