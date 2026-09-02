pipeline{
    agent any

    stages{
        stage("checkout"){
            steps{
                git branch: 'main', url: 'https://github.com/HariMuthuGanesh/Devops_Model.git'
            }
        }

        stage("build"){
            steps{
                bat 'npm run build'
            }
        }

        stage("deploy"){
            steps{
                bat 'npm run dev'
            }
        }
    }
}