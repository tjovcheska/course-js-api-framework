pipeline {
    agent any
    stages {
        stage('build-and-push-docker-image') {
            steps {
                build_and_push_docker_image()
            }
        }
    }
}

def build_and_push_docker_image() {
    echo "Build the Docker image based on the Dockerfile in the repository"
    sh 'docker build -t teodorajovcheska7/api-tests:latest .'

    echo "Push the Docker image to Docker Hub"
    sh 'docker push teodorajovcheska7/api-tests:latest'
}
