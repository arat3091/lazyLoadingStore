pipeline {
    agent { dockerfile true }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'svn --version'
                sh 'sudo npm install'
                sh 'sudo npm build'
            }
        }
    }
}
