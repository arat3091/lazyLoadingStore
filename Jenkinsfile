pipeline {
    agent { dockerfile true }
    stages {
        stage('Test') {
            steps {
                withEnv([
                        /* Override the npm cache directory to avoid: EACCES: permission denied, mkdir '/.npm' */
                        'npm_config_cache=npm-cache',
                        /* set home to our current directory because other bower
                        * nonsense breaks with HOME=/, e.g.:
                        * EACCES: permission denied, mkdir '/.config'
                        */

                    ]) {

                sh 'node --version'
                sh 'cat /etc/os-release'
                sh 'npm install'
                sh 'npm run-script build'
                }
            }
        }
    }
}
