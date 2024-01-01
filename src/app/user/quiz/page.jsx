"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { quiz } from "@/assets/data/data.js";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import checklist from "@/assets/icons/checklist.svg";
import Image from "next/image";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const Page = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
  const [raguRagu, setRaguRagu] = useState({});
  const [timer, setTimer] = useState(60 * 60); // Timer dalam detik, 30 menit
  const [correct, setCorrect] = useState();
  const router = useRouter();

  const [questionView, setQuestionView] = useState(true);
  const [resultView, setResultView] = useState(false);
  const { questions } = quiz;
  const { question, answers } = questions[activeQuestion];

  // Hitung jumlah total soal yang telah terjawab
  const answeredQuestionsCount = Object.keys(selectedAnswers).length;

  // Hitung persentase soal yang telah terjawab
  const percentageAnswered = (answeredQuestionsCount / questions.length) * 100;

  // Mengonversi waktu sisa menjadi format menit:detik
  // Mengonversi waktu sisa menjadi format jam:menit:detik
  const formattedTime = `${Math.floor(timer / 3600)
    .toString()
    .padStart(2, "0")}:${Math.floor((timer % 3600) / 60)
    .toString()
    .padStart(2, "0")}:${(timer % 60).toString().padStart(2, "0")}`;

  // Mengurangi timer setiap detik
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleQuestionButtonClick = (index) => {
    setActiveQuestion(index);
  };

  const onAnswerSelected = (answer) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [activeQuestion]: answer,
    }));
  };

  const handleRaguRaguClick = () => {
    // Periksa status ragu-ragu pada soal yang aktif
    const isActiveQuestionRaguRagu = raguRagu[activeQuestion];

    // Tentukan apakah harus mengubah status ragu-ragu menjadi true atau false
    setRaguRagu((prevRaguRagu) => ({
      ...prevRaguRagu,
      [activeQuestion]: !isActiveQuestionRaguRagu, // Ubah status menjadi berlawanan
    }));

    if (activeQuestion < questions.length - 1) {
      setActiveQuestion(activeQuestion + 1); // Pindah ke soal selanjutnya jika tersedia
    }
  };

  const goToPreviousQuestion = () => {
    if (activeQuestion > 0) {
      setActiveQuestion(activeQuestion - 1);
    }
  };

  const goToNextQuestion = () => {
    if (activeQuestion < questions.length - 1) {
      setActiveQuestion(activeQuestion + 1);
    }
  };

  useEffect(() => {
    const isAllQuestionsAnswered =
      Object.keys(selectedAnswers).length === questions.length;
    setAllQuestionsAnswered(isAllQuestionsAnswered);
  }, [activeQuestion, questions, selectedAnswers]);

  const handleQuizFinish = () => {
    // Menghitung total jawaban yang benar
    let correctAnswersCount = 0;

    for (let i = 0; i < questions.length; i++) {
      const correctAnswer = questions[i].correctAnswer;
      const selectedAnswer = selectedAnswers[i];

      if (correctAnswer === selectedAnswer) {
        correctAnswersCount++;
      }
    }

    // Menghitung total jawaban yang salah
    const incorrectAnswersCount = questions.length - correctAnswersCount;

    // Menampilkan hasil
    console.log("Jawaban Benar:", correctAnswersCount);
    console.log("Jawaban Salah:", incorrectAnswersCount);
    console.log("total soal : ", questions.length);
    console.log(selectedAnswers);

    setCorrect(correctAnswersCount);
    setQuestionView(false);
    setResultView(true);

    // Mengarahkan pengguna ke halaman lain setelah selesai
  };

  //result page
  const handleChangePage = (id) => {
    setCurrentPage(id);
  };
  const handlePrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const kuiz = quiz.questions.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(quiz.questions.length / recordsPerPage);
  const numbers = [...Array(nPage).keys()].map((i) => i + 1);
  const Score = ((correct / questions.length) * 100).toFixed(2);

  return (
    <>
      {questionView && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="px-4 pt-4 md:px-8 md:pt-8 lg:px-32 lg:pt-16"
        >
          {/* title */}
          <div className="flex flex-col ">
            <h3 className="text-2xl font-bold">Quiz</h3>
            <h3 className="text-xl font-medium text-[#055EA8]">
              {quiz.course}
            </h3>
          </div>

          {/* main */}
          <div className="flex flex-col lg:flex-row my-8 gap-8">
            {/* kiri */}
            <div className="w-full lg:w-5/6 flex flex-col ">
              <div>
                <div className="flex justify-between pb-3">
                  <h3 className="text-xl font-medium">
                    Progress <span>{percentageAnswered.toFixed(0)}%</span>
                  </h3>
                  <div className="flex justify-center items-center border-2 border-[#055EA8] w-[131px] py-1 rounded-md text-[#055EA8]">
                    {formattedTime}
                  </div>
                </div>
                <div className="h-2 w-full bg-[#C1C2C4] rounded-full">
                  <div
                    className={`h-2 bg-[#055EA8] ${
                      percentageAnswered === 100
                        ? "rounded-full"
                        : "rounded-s-full"
                    }`}
                    style={{ width: `${percentageAnswered}%` }}
                  ></div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-6"
              >
                <h3 className="flex justify-center px-2 py-1 rounded-md bg-[#055EA8] w-[134px] text-xl font-medium text-white">
                  Soal {activeQuestion + 1}
                </h3>

                <p className="text-base font-medium mt-4">{question}</p>

                <div className="flex flex-col items-start mt-6 gap-3">
                  {answers.map((answer, idx) => (
                    <button
                      key={idx}
                      onClick={() => onAnswerSelected(answer)}
                      className={`border-2 px-3 rounded-md border-[#91cbfb] text-left ${
                        selectedAnswers[activeQuestion] === answer
                          ? "bg-[#055EA8] text-white"
                          : ""
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}.
                      <span className="ml-2">{answer}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* kanan */}
            <div className="w-full lg:w-2/6 flex flex-col ">
              <div className="border-2 rounded-t-lg py-2 px-4">
                <h3 className="text-lg font-medium text-[#055EA8]">No. Soal</h3>
              </div>
              <div className="border-2 rounded-b-lg border-t-0 py-1 px-4 h-full ">
                <div className="grid grid-cols-5 gap-2 py-2">
                  {questions.map((item, index) => (
                    <button
                      className={`flex items-center justify-center py-3 rounded-md border-2  ${
                        activeQuestion === index
                          ? "bg-[#055EA8] text-white border-[#055EA8]"
                          : raguRagu[index] === true // Periksa jika selectedAnswers[index] adalah null
                          ? "bg-[#FFAE00] text-white border-[#FFAE00]" // Ganti warna latar belakang menjadi kuning
                          : selectedAnswers[index] !== undefined
                          ? "bg-gray-300 text-black border-gray-300" // Ubah warna latar belakang menjadi abu-abu jika jawaban telah dipilih
                          : "border-[#91cbfb]"
                      }`}
                      key={index}
                      onClick={() => handleQuestionButtonClick(index)}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* footer */}
          <div className="flex my-8 border-t-2 justify-between py-6 ">
            <button
              onClick={goToPreviousQuestion}
              className={`flex justify-center px-2 py-1 rounded-md bg-[#055EA8] w-[100px] md:w-[134px] text-base font-normal  text-white ${
                activeQuestion === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={activeQuestion === 0}
            >
              Sebelumnya
            </button>
            <button
              onClick={handleRaguRaguClick}
              className={`flex justify-center px-2 py-1 rounded-md bg-[#FFAE00] w-[100px] md:w-[134px] text-base font-normal  text-white`}
            >
              Ragu-Ragu
            </button>

            {activeQuestion === questions.length - 1 ? (
              // Jika berada pada soal terakhir, tampilkan tombol "Selesai"
              <button
                onClick={handleQuizFinish}
                className={`flex justify-center px-2 py-1 rounded-md bg-[#055EA8] w-[100px] md:w-[134px] text-base font-normal text-white ${
                  !allQuestionsAnswered ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!allQuestionsAnswered} // Menambahkan disabled jika belum semua soal terjawab
              >
                Selesai
              </button>
            ) : (
              // Jika tidak berada pada soal terakhir, tampilkan tombol "Selanjutnya"
              <button
                onClick={goToNextQuestion}
                className={`flex justify-center px-2 py-1 rounded-md bg-[#055EA8] w-[100px] md:w-[134px] text-base font-normal text-white`}
              >
                Selanjutnya
              </button>
            )}
          </div>
        </motion.div>
      )}

      {resultView && (
        <div className="p-4 md:p-32">
          <section>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col mb-5">
                <div className="text-3xl md:text-5xl font-bold text-main-black mb-5">
                  Hasil Quiz
                </div>
                <div className="text-xl md:text-2xl font-bold text-dark-blue">
                  {quiz.course}
                </div>
              </div>
              <div className="card rounded-lg border-black border-2 flex flex-row w-full md:w-60 items-center justify-center h-16 md:ml-4 md:mt-0">
                <div className="text-xl md:text-2xl">
                  Nilai :{" "}
                  <span className="text-3xl md:text-3xl font-bold">
                    {Score}
                  </span>
                  <span className="text-lg">/100</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section Soal */}
          <section className="mt-6">
            {kuiz.map((question, index) => {
              // Calculate the actual index of the question based on pagination
              const actualIndex = firstIndex + index;

              return (
                <div key={actualIndex} className="mb-6">
                  <div className="card rounded-lg bg-dark-blue w-20 md:w-32 text-center p-2">
                    <div className="text-xl md:text-2xl font-bold text-white">
                      {`Soal ${actualIndex + 1}`}
                    </div>
                  </div>
                  <p className="my-4 md:my-6">{question.question}</p>
                  {question.answers.map((answer, answerIndex) => {
                    const isCorrect =
                      selectedAnswers[actualIndex] === question.correctAnswer;
                    const isAnswer = selectedAnswers[actualIndex] === answer;
                    const answerTruth =
                      question.answers[answerIndex] === question.correctAnswer;
                    let answerStyle = "";

                    if (isCorrect && isAnswer) {
                      answerStyle = "bg-[#76FF03]";
                    } else if (!isCorrect && isAnswer) {
                      answerStyle = "bg-[#FF0D1E]";
                    }

                    return (
                      <div
                        className="flex flex-row md:flex-row items-start mb-4"
                        key={answerIndex}
                      >
                        <div
                          className={`jawaban border-2 rounded-lg border-dark-blue w-full md:w-fit py-2 px-4 ${answerStyle}`}
                        >
                          {`${String.fromCharCode(
                            65 + answerIndex
                          )}. ${answer}`}
                        </div>
                        {answerTruth && !isCorrect ? (
                          <Image
                            className="md:ms-2 ms-1 mt-2 md:mt-0"
                            src={checklist}
                            alt="checklist"
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}
                  <hr className="my-6 md:my-10" />
                </div>
              );
            })}
          </section>
          <div className="flex rounded-lg gap-2 mt-4 justify-center">
            <button
              className="border-slate-400 text-slate-400 hover:bg-blue hover:text-white p-1 px-2 border rounded-md"
              onClick={handlePrevPage}
            >
              <BsChevronLeft />
            </button>
            {numbers.map((number, i) => (
              <button
                className={`border-slate-400 text-slate-400 hover:bg-blue hover:text-white p-1 px-3 border rounded-md ${
                  currentPage === number ? "text-white bg-blue" : ""
                }`}
                key={i}
                onClick={() => handleChangePage(number)}
              >
                {number}
              </button>
            ))}

            <button
              className="border-slate-400 text-slate-400 hover:bg-blue hover:text-white p-1 px-2  border rounded-md"
              onClick={handleNextPage}
            >
              <BsChevronRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
