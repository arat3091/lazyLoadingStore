pipeline {
    agent { dockerfile true }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'svn --version'
                sh 'npm install'
                sh 'npm build'
            }
        }
    }
}
