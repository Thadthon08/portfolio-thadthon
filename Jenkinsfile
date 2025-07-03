pipeline {
  agent any

  environment {
    IMAGE_NAME = 'vite-app'
    CONTAINER_NAME = 'vite-frontend'
    PORT = '3000'
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/Thadthon08/portfolio-thadthon.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t $IMAGE_NAME .'
      }
    }

    stage('Deploy Container') {
      steps {
        sh '''
          docker stop $CONTAINER_NAME || true
          docker rm $CONTAINER_NAME || true
          docker run -d --name $CONTAINER_NAME -p $PORT:80 $IMAGE_NAME
        '''
      }
    }
  }

  post {
    success {
      echo '🚀 Deploy Success'
    }
    failure {
      echo '💥 Deploy ERR'
    }
  }
}
