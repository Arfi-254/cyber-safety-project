import React, { useState } from 'react';
import { Shield, Award, RefreshCw, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { questions } from './questions';

const CyberSafetyGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [language, setLanguage] = useState('english');

  const currentQuestions = questions[language];
  const totalQuestions = currentQuestions.length;

  const handleAnswerSelect = (answerIndex) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (currentQuestions[currentQuestion].options[answerIndex].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setGameCompleted(true);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameCompleted(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 80) return "Excellent! You're a cyber safety champion! 🏆";
    if (percentage >= 60) return "Good job! Keep learning to stay even safer online! 👍";
    if (percentage >= 40) return "You're learning! Practice more to improve your online safety! 📚";
    return "Keep practicing! Online safety is very important! 💪";
  };

  if (gameCompleted) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <Award className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {language === 'english' ? 'Game Complete!' : 'Mchezo Umekamilika!'}
          </h2>
          <div className="text-6xl font-bold text-blue-600 mb-2">{score}/{totalQuestions}</div>
          <p className="text-xl text-gray-600 mb-6">{getScoreMessage()}</p>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-gray-700">
              {language === 'english' 
                ? "Remember: Always think twice before sharing personal information online. Stay safe, stay smart!"
                : "Kumbuka: Fikiria mara mbili kabla ya kushiriki maelezo ya kibinafsi mtandaoni. Kaa salama, kaa mkerevu!"
              }
            </p>
          </div>
          
          <button
            onClick={restartGame}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center mx-auto transition-colors"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            {language === 'english' ? 'Play Again' : 'Cheza Tena'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Shield className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-800">
              {language === 'english' ? 'Cyber Safety Game' : 'Mchezo wa Usalama Mtandaoni'}
            </h1>
          </div>
          
          {/* Language Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setLanguage('english')}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                language === 'english' ? 'bg-blue-600 text-white' : 'text-gray-600'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('swahili')}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                language === 'swahili' ? 'bg-blue-600 text-white' : 'text-gray-600'
              }`}
            >
              Kiswahili
            </button>
          </div>
        </div>
        
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>
            {language === 'english' ? 'Question' : 'Swali'} {currentQuestion + 1} {language === 'english' ? 'of' : 'kati ya'} {totalQuestions}
          </span>
          <span>
            {language === 'english' ? 'Score' : 'Alama'}: {score}/{totalQuestions}
          </span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <div className="flex items-center mb-3">
            <AlertTriangle className="w-5 h-5 text-orange-500 mr-2" />
            <span className="text-sm font-medium text-orange-600">
              {language === 'english' ? 'Scenario' : 'Hali'}
            </span>
          </div>
          <p className="text-gray-800 mb-4 leading-relaxed">
            {currentQuestions[currentQuestion].scenario}
          </p>
          <h3 className="text-lg font-semibold text-gray-800">
            {currentQuestions[currentQuestion].question}
          </h3>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestions[currentQuestion].options.map((option, index) => {
            let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ";
            
            if (showResult) {
              if (option.correct) {
                buttonClass += "border-green-500 bg-green-50 text-green-800";
              } else if (index === selectedAnswer) {
                buttonClass += "border-red-500 bg-red-50 text-red-800";
              } else {
                buttonClass += "border-gray-200 bg-gray-50 text-gray-600";
              }
            } else {
              buttonClass += "border-gray-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer";
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={buttonClass}
                disabled={showResult}
              >
                <div className="flex items-center justify-between">
                  <span>{option.text}</span>
                  {showResult && (
                    <div>
                      {option.correct ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : index === selectedAnswer ? (
                        <XCircle className="w-5 h-5 text-red-600" />
                      ) : null}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showResult && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">
              {language === 'english' ? 'Explanation:' : 'Maelezo:'}
            </h4>
            <p className="text-blue-700">
              {currentQuestions[currentQuestion].options[selectedAnswer].explanation}
            </p>
            
            <button
              onClick={nextQuestion}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              {currentQuestion < totalQuestions - 1 
                ? (language === 'english' ? 'Next Question' : 'Swali Lijalo') 
                : (language === 'english' ? 'View Results' : 'Ona Matokeo')
              }
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="text-center mt-6 text-gray-600 text-sm">
        <p>{language === 'english' ? 'Created by' : 'Imeundwa na'} Arfi • {language === 'english' ? 'Garissa, Kenya' : 'Garissa, Kenya'}</p>
        <p className="mt-1">{language === 'english' ? 'Stay Safe Online! 🔐' : 'Kaa Salama Mtandaoni! 🔐'}</p>
      </div>
    </div>
  );
};

export default CyberSafetyGame;