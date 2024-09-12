// pages/index.js or another file in your pages directory
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Ensure Button is properly exported as a React component
import { Card, CardContent } from "@/components/ui/card"; // Ensure these are properly set up

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-300 to-orange-300 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white rounded-3xl shadow-lg overflow-hidden">
        <CardContent className="p-6">
          <h1
            className="text-4xl font-bold text-center mb-6 text-purple-600"
            style={{ fontFamily: "'Comic Sans MS', cursive" }}
          >
            Welcome to Stinky Pinky! 🎭
          </h1>
          <div className="space-y-6">
            <p className="text-center text-xl text-gray-700">
              Get ready for a fun word game that will make you think and laugh!
              😄
            </p>
            <p className="text-center text-lg text-gray-600">
              Match rhyming words to solve each Stinky Pinky puzzle. How many
              can you guess?
            </p>
            <div className="flex justify-center">
              <Link href="/game" passHref>
                <Button
                  className="text-xl py-6 px-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Playing! 🚀
                </Button>
              </Link>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              Perfect for kids and adults who love word games!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
