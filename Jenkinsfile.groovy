pipeline {
    agent any
    stages {
        stage('Build HTML') {
            steps {
                bat 'jekyll build' // Replace with your actual build command
            }
        }
        stage('Publish HTML') {
            steps {
                publishHTML(target: [
                    reportName: 'HTML Report',
                    reportDir: 'your/report/directory', // Specify the directory with HTML files
                    reportFiles: 'index.html', // Specify the main HTML file
                    alwaysLinkToLastBuild: true
                ])
            }
        }
    }
}
