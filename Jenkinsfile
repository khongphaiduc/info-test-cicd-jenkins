pipeline {
    agent any 

    stages {
       stage('Clone Project') {
          steps {
            git branch: 'main', 
            credentialsId: 'github-token', 
            url: 'https://github.com/khongphaiduc/info-test-cicd-jenkins.git' 
          }
       }

     stage('Build and Push Image') {
          steps {
            withDockerRegistry(credentialsId: 'docker', url: 'https://index.docker.io/v1/')   {
                 
                 // Chui qua 2 lớp thư mục để đến đúng nơi chứa Dockerfile và mã nguồn
                 dir('introduction-personal-phamtrungduc/introduction-personal-phamtrungduc') {
                     
                     sh 'docker build -t ptrungduc1011/info:v1 .' 
                     sh 'docker push ptrungduc1011/info:v1'
                     
                 }
             }
          }
       }
    }
}
