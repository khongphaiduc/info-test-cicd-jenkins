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
        withDockerRegistry(credentialsId: 's', url: 'https://index.docker.io/v1/') {
            
            sh 'docker build -t ptrungduc1011/info:v1 .' 
            sh 'docker push ptrungduc1011/info:v1'
        }
    }
}


        

    }
}
