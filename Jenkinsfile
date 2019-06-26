pipeline {
  agent any
 
  //tools {nodejs "recent_node"}
 
        stages {  
            stage('Clonning Git') {
                steps {
                    git 'https://github.com/ivan-molina/TFM_CUCUMBER.git'
                }
            }
            
            stage('Install dependencies') {
                steps {
                    bat '''
                        echo '------------Install dependencies--------------'
                        npm install
                    '''
                }
            }

            stage('Execute test') {
                steps {
                    bat '''
                        echo '------------Execute test--------------'
                        npm run test-chrome  
                    '''
                    //./node_modules/.bin/cucumber-js.cmd --format json:./reports/report.json 
                    //npm run test-chrome
                }
            }

            stage('Generate reports') {
                steps {
                    bat '''
                        echo '------------Publish reports--------------'
                    '''
                }
            } 

            stage('Publish HTML Report') {
                steps{
                    publishHTML (target: [
                        allowMissing: false,
                        alwaysLinkToLastBuild: false,
                        keepAll: true,
                        reportDir: 'testcafe-cucumber-master/test/report',
                        reportFiles: 'cucumber_report.html',
                        reportName: "cucumber_report.html"
                    ])
                }
            } 

            stage('Generate CUCUMBER REPORT') {
                steps{
                    cucumber buildStatus: "UNSTABLE",
                    fileIncludePattern: "report.json",
                    jsonReportDirectory: 'testcafe-cucumber-master/reports'
                }
            }

            stage('Slack Message') {
                steps {
                    notifyBuild(currentBuild.result)
                    /*slackSend channel: '#tfm',
                    color: 'good',
                    message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n More info at: ${env.BUILD_URL}"*/   
                }
            }
            
        }

}

def notifyBuild(String buildStatus = 'STARTED') {
  // build status of null means successful
  buildStatus =  buildStatus ?: 'SUCCESS'

  // Default values
  def channel = '#tfm'
  def color
  def subject = "${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'"
  def summary = "${subject} (${env.BUILD_URL})"

  // Override default values based on build status
  if (buildStatus == 'STARTED') {
    color = '#FFFF00'
  } else if (buildStatus == 'SUCCESS') {
    color = '#00FF00'
  } else {
    color = '#FF0000'
  }

  // Send notifications
  slackSend (channel: channel, color: color, message: summary)
}
