pipeline{
  agent any

  parameters{
    string(name: "SPEC", defaultValue: "cypress/integration/**/**", description: "Ej: cypress/integration/pom/*.spec.js")
    choice(name: "BROWSER", choices: ['chrome', 'edge', 'firefox'], description: "Escoja un browser en donde ejecutar sus scripts.")
  }

  options{
    ansiColor('xterm')
  }
  
  stages{
    stage('Build'){
      steps{
        echo("Building application")
      }
    }
    stage('Testing'){
      steps{
        bat "npm i"
        bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
      }
    }
    stage('Deploy'){
      steps{
        echo "Deploy the application"
      }
    }
  }

  post{
    always{
      publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
    }
  }
}