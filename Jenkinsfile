pipeline {
    agent { dockerfile true }
    stages {
        stage('Test') {
            steps {
                sh 'echo "Running on Jenkins Slave: ${env.NODE_NAME}"'
                sh 'node --version'
                sh 'cat /etc/os-release'
                sh 'npm install'
                sh 'npm build'
            }
        }
    }
}
