"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Make sure this import is corrected from 'next/navigation' to 'next/router'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import confetti from "canvas-confetti";
import { questions, Question } from "../../constants/constants";
import Lose from "@/components/page/Lose"; // Ensure this component is properly implemented

export default function StinkyPinkyGame() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [userAnswer1, setUserAnswer1] = useState("");
  const [userAnswer2, setUserAnswer2] = useState("");
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [showLoseModal, setShowLoseModal] = useState(false);

  useEffect(() => {
    getNextQuestion();
  }, []);

  const getNextQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
    setUserAnswer1("");
    setUserAnswer2("");
    setMessage("");
  };

  const checkAnswer = () => {
    if (!currentQuestion) return;

    // Trim whitespace from user inputs before comparison
    const trimmedUserAnswer1 = userAnswer1.trim().toLowerCase();
    const trimmedUserAnswer2 = userAnswer2.trim().toLowerCase();

    if (
      trimmedUserAnswer1 === currentQuestion.answer1 &&
      trimmedUserAnswer2 === currentQuestion.answer2
    ) {
      setMessage("Correct! You got it! 🎉");
      setScore(score + 1);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      setTimeout(getNextQuestion, 2000);
    } else {
      setMessage(
        `Oops! The correct answer was ${currentQuestion.answer1} ${currentQuestion.answer2}. Try again! 😊`
      );
      setScore(score - 1);
      if (score - 1 < 0) {
        setShowLoseModal(true);
        setTimeout(() => {
          router.push("/");
        }, 5000);
      }
      setTimeout(() => setMessage(""), 3000);
    }
  };

  if (!currentQuestion) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 to-pink-300 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white rounded-3xl shadow-lg overflow-hidden">
        <CardContent className="p-6">
          <h1
            className="text-4xl font-bold text-center mb-6 text-purple-600"
            style={{ fontFamily: "'Comic Sans MS', cursive" }}
          >
            Stinky Pinky Game 🎭
          </h1>
          <div className="space-y-6">
            <p className="text-center text-2xl font-semibold text-gray-700">
              Clues:{" "}
              <span className="text-pink-500">{currentQuestion.clue1}</span> and{" "}
              <span className="text-blue-500">{currentQuestion.clue2}</span>
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Input
                type="text"
                value={userAnswer1}
                onChange={(e) => setUserAnswer1(e.target.value)}
                placeholder="First word"
                className="flex-1 text-lg rounded-full px-6 py-3 border-2 border-purple-300 focus:border-purple-500"
              />
              <Input
                type="text"
                value={userAnswer2}
                onChange={(e) => setUserAnswer2(e.target.value)}
                placeholder="Second word"
                className="flex-1 text-lg rounded-full px-6 py-3 border-2 border-purple-300 focus:border-purple-500"
              />
            </div>
            <Button
              onClick={checkAnswer}
              className="w-full text-xl py-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Check Answer 🧐
            </Button>
            {message && (
              <p
                className="text-center text-xl font-bold animate-bounce"
                style={{
                  color: message.startsWith("Correct") ? "#10B981" : "#EF4444",
                }}
              >
                {message}
              </p>
            )}
            <p className="text-center text-2xl font-bold text-purple-700">
              Score: <span className="text-3xl">{score}</span> 🌟
            </p>
          </div>
        </CardContent>
      </Card>
      {showLoseModal && <Lose />}
    </div>
  );
}
