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
        bat "cd cypress-demo-framework && npm i"
        bat "cd cypress-demo-framework && npx cypress run --browser ${BROWSER} --spec ${SPEC}"
        bat "cd cd cypress-demo-framework && npx jrm cypress/reports/results.xml cypress/reports/junit/*.xml"
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
      publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress-demo-framework/cypress/reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
      junit 'cypress-demo-framework/cypress/reports/junit/*.xml'
    }
  }
}