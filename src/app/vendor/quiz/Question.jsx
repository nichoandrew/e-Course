"use client"
import React, { Fragment, useEffect, useState } from 'react'
import ButtonControl from './ButtonControl'
import { setCurrentStep, setQuiz } from '@/redux/slices/quizSlice'
import { useDispatch, useSelector } from 'react-redux'
import HeaderContent from './HeaderContent'

export default function Question({ backPage }) {
  const currentStep = useSelector((state) => state.quiz.currentStep)
  const quizData = useSelector((state) => state.quiz.quizData)
  const [currentCorrectOptionIndex, setCurrentCorrectOptionIndex] = useState(null);
  const dispatch = useDispatch()

  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "",
      options: [
        { option: "A", text: "", isCorrect: false },
      ],
    },
  ]);

  const [newQuestion, setNewQuestion] = useState(
    {
      id: quizData.length > 0 ? quizData.length + 1 : questions.length + 1,
      text: "",
      options: [
        { option: "A", text: "", isCorrect: false },
      ],
    },
  );


  const handleQuestionChange = (id, value) => {
    const update = questions.map((questionUpdate) =>
      questionUpdate.id === id
        ? { ...questionUpdate, text: value }
        : questionUpdate
    );
    setQuestions(update);
  };

  const handleOptionChange = (questionId, optionIndex, value) => {
    const update = questions.map((questionUpdate) => {
      if (questionUpdate.id === questionId) {
        return {
          ...questionUpdate,
          options: questionUpdate.options.map((opt, index) =>
            index === optionIndex ? { ...opt, text: value } : opt
          ),
        };
      }
      return questionUpdate;
    });
    setQuestions(update);
  };

  const handleAddOption = (questionId, e) => {
    e.preventDefault()
    const update = questions.map((questionUpdate) => {
      if (questionUpdate.id === questionId) {
        const newIndex = questionUpdate.options.length
        const newOption = {
          option: String.fromCharCode('A'.charCodeAt(0) + newIndex),
          text: '',
          isCorrect: false,
        }
        return {
          ...questionUpdate,
          options: [...questionUpdate.options, newOption]
        }
      }
      return questionUpdate
    }
    );
    setQuestions(update);
  };

  const handleRemoveOption = (questionId, optionIndex, e) => {
    e.preventDefault()
    if (optionIndex < 1) {
      return null;
    }
    const update = questions.map((questionUpdate) =>
      questionUpdate.id === questionId
        ? {
          ...questionUpdate,
          options: questionUpdate.options.filter((opt, index) => index !== optionIndex),
        }
        : questionUpdate
    );
    setQuestions(update);
    setCurrentCorrectOptionIndex(null);
  };

  const handleAnswerOption = (questionId, optionIndex) => {
    const update = questions.map((questionUpdate) =>
      questionUpdate.id === questionId
        ? {
          ...questionUpdate,
          options: questionUpdate.options.map((opt, index) =>
            index === optionIndex
              ? { ...opt, isCorrect: index === optionIndex ? !opt.isCorrect : false }
              : opt
          ),
        }
        : questionUpdate
    );
    setQuestions(update);
    setCurrentCorrectOptionIndex(optionIndex);
  };

  const handleAddNewQuestion = () => {
    setNewQuestion({
      id: questions.length + 2,
      text: '',
      options: [
        { option: 'A', text: '', isCorrect: false },
      ],
    });
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion])
  };

  const handleNextPage = () => {
    dispatch(setQuiz(questions))
    dispatch(setCurrentStep(currentStep + 1))
  }

  useEffect(() => {
    if (quizData.length > 0) {
      setQuestions(quizData)
    }
  }, [quizData])

  return (
    <Fragment>
      <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col justify-center mx-auto px-4 md:p-3">
        <HeaderContent title={'Buat Kuis Untuk Kursus Anda'} description={'Atur sesuai dengan keinginan'} />
        <div className="mt-10">
          <form>
            {questions.map((question, i) => (
              <div key={i}>
                <div className="mb-3">
                  <label htmlFor={`question-${question.id}`} className="text-lg md:text-xl">
                    Pertanyaan {i + 1}
                  </label>
                  <input
                    type="text"
                    name="question"
                    id={`question-${question.id}`}
                    className="py-1.5 px-3 block w-full border rounded ring-1 ring-blue active:border-blue focus:outline-none mt-2"
                    placeholder="Ketikkan pertanyaan kuis"
                    autoComplete='off'
                    value={question.text}
                    onChange={(e) => handleQuestionChange(question.id, e.target.value)}
                  />
                </div>
                {question.options.map((option, index) => (
                  <div className="mb-3 flex space-x-3 items-center" key={index}>
                    <label
                      htmlFor={`answer-${question.id}-${index}`}
                      className="py-2 px-3 border border-blue rounded"
                    >
                      {String.fromCharCode('A'.charCodeAt(0) + index)}
                    </label>
                    <input
                      type="text"
                      name="answer"
                      id={`answer-${question.id}-${index}`}
                      className="py-1.5 px-3 block w-full border rounded ring-1 ring-blue active:border-blue focus:outline-none "
                      placeholder="Ketikkan jawaban kuis"
                      autoComplete='off'
                      value={option.text}
                      onChange={(e) => handleOptionChange(question.id, index, e.target.value)}
                    />
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={option.isCorrect}
                        className="w-8 h-8"
                        onChange={() => handleAnswerOption(question.id, index)}
                      />
                      <button
                        className="bg-gray-300 w-8 h-8 text-black rounded"
                        onClick={(e) => handleRemoveOption(question.id, index, e)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                ))}
                <div className="flex justify-end">
                  <button
                    className="text-blue"
                    onClick={(e) => handleAddOption(question.id, e)}
                  >
                    Tambah opsi jawaban +
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              className="w-full bg-blue text-white border py-2 px-4 rounded mt-5"
              onClick={handleAddNewQuestion}
            >
              Tambah Soal
            </button>
          </form>
        </div>
        <ButtonControl className={'mt-10'} nextPage={handleNextPage} backPage={backPage} />
      </div>
    </Fragment>
  );
}
