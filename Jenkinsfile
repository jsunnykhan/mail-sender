#!/usr/bin/env groovy

pipeline {

    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh "docker compose up --build -d --force-recreate"
            }
        }
       
    }
}
