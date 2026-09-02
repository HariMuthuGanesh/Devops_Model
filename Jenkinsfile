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
                dir('Recipe_Finder'){
                    bat 'npm install'
                }
            }
        }

        stage("deploy"){
            steps{
                dir('Recipe_Finder'){
                    bat 'npm run dev'
                }
            }
        }
    }
}