pipeline {
    agent any 

    stages {
       stage('Clone Project') {
          steps {
            git branch: 'main', 
            credentialsId: 'tokenGithub', 
            url: 'https://github.com/khongphaiduc/info-test-cicd-jenkins.git' 
          }
       }

     stage('Build and Push Image') {
          steps {
          withDockerRegistry(credentialsId: 'docker', url: 'https://index.docker.io/v1/')  {
                 
                 // Chui qua 2 lớp thư mục để đến đúng nơi chứa Dockerfile và mã nguồn
                 dir('introduction-personal-phamtrungduc/introduction-personal-phamtrungduc') {
                     
                     sh 'docker build -t ptrungduc1011/info:v1 .' 
                     sh 'docker push ptrungduc1011/info:v1'
                     
                 }
             }
          }
       }


        stage('Deploy') {
          steps {
             sh '''
                # 1. Dừng và xóa container cũ mang tên 'my-profile'
                docker stop my-profile || true
                docker rm my-profile || true
                
                # 2. Xóa image cũ để giải phóng dung lượng (tùy chọn)
                docker rmi ptrungduc1011/info:v1 || true

                # 3. Chạy container mới với cùng cấu hình cổng như cũ
                # Ánh xạ 8090 (VPS) -> 8080 (Container) theo đúng ảnh bạn gửi
                docker run -d --name my-profile -p 8090:8080 ptrungduc1011/info:v1
             '''
          }
       }

        
    }
}
