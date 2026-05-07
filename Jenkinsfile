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
             // Sử dụng đúng credentialsId mới mà bạn vừa tạo
             withDockerRegistry(credentialsId: 'ptrungduc1011s', url: 'https://index.docker.io/v1/') {
                 
                 // Đã đổi sh thành bat để chạy được trên Windows
                 bat 'docker build -t ptrungduc1011/info:v1 .' 
                 bat 'docker push ptrungduc1011/info:v1'
             }
          }
       }
    }
}
