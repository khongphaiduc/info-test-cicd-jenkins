pipeline {
    agent any 

    stages {
        stage('Clone Project') {
            steps {
                    git branch: 'main', 
                    credentialsId: 'github-token', 
                    url: 'https://github.com/khongphaiduc/blog-info.git'
            }
        }

        stage('Build') {
            steps {               
                bat 'dotnet restore'
                bat 'dotnet build --configuration Release'
            }
        }
    }
}