"use client";
import { quiz } from "@/assets/data/data";
import checklist from "@/assets/icons/checklist.svg";
import Image from "next/image";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function KuisPage() {
  const router = useRouter();

  let myAnswer = {
    questions: [
      {
        id: 1,
        question: "Apa yang dimaksud dengan HTML dalam pengembangan web?",
        myAnswer: "Hyper Text Markup Language",
      },
      {
        id: 2,
        question:
          "Apa perbedaan antara CSS dan JavaScript dalam pengembangan web?",
        myAnswer:
          "CSS digunakan untuk mengatur tampilan teks, sedangkan JavaScript digunakan untuk mengatur tampilan gambar.",
      },
      {
        id: 3,
        question:
          "Apa yang dimaksud dengan 'Single Page Application' (SPA) dalam pengembangan web?",
        myAnswer:
          "Sebuah aplikasi web yang beroperasi tanpa memuat ulang halaman",
      },
      {
        id: 4,
        question:
          "Apa peran utama dari 'Front-end Developer' dalam pengembangan web?",
        myAnswer: "Mengelola keamanan situs web",
      },
      {
        id: 5,
        question:
          "Apa yang dimaksud dengan 'Responsive Web Design' dalam pengembangan web?",
        myAnswer:
          "Mengatur tampilan situs web agar sesuai dengan berbagai perangkat dan layar",
      },
      {
        id: 6,
        question:
          "Apa manfaat utama dari penggunaan 'Version Control System' (VCS) dalam pengembangan perangkat lunak?",
        myAnswer: "Melacak perubahan kode sumber dan mengelola kolaborasi tim",
      },
      {
        id: 7,
        question:
          "Apa yang dimaksud dengan 'Back-end Developer' dalam pengembangan web?",
        myAnswer:
          "Pengembang yang fokus pada pengelolaan server dan logika bisnis",
      },
      {
        id: 8,
        question:
          "Apa yang dimaksud dengan 'API' (Application Programming Interface) dalam konteks pengembangan web?",
        myAnswer:
          "Sebuah set aturan dan protokol yang memungkinkan berbagai aplikasi berkomunikasi satu sama lain",
      },
      {
        id: 9,
        question:
          "Apa yang dimaksud dengan 'Database Management System' (DBMS) dalam pengembangan web?",
        myAnswer: "Sebuah sistem untuk mengelola dan mengakses data",
      },
      {
        id: 10,
        question:
          "Apa yang dimaksud dengan 'Framework' dalam pengembangan web?",
        myAnswer:
          "Sebuah kerangka kerja perangkat lunak yang menyediakan alat dan pedoman untuk membangun aplikasi web",
      },
      {
        id: 11,
        question:
          "Apa yang dimaksud dengan 'Web Hosting' dalam konteks pengembangan web?",
        myAnswer:
          "Sebuah layanan yang menyediakan server untuk menyimpan situs web dan membuatnya dapat diakses melalui internet",
      },
      {
        id: 12,
        question:
          "Apa yang dimaksud dengan 'Cybersecurity' dalam konteks pengembangan web?",
        myAnswer:
          "Sebuah praktik dan teknologi yang digunakan untuk melindungi sistem komputer dan jaringan dari ancaman digital",
      },
      {
        id: 13,
        question:
          "Apa yang dimaksud dengan 'Content Management System' (CMS) dalam pengembangan web?",
        myAnswer:
          "Sebuah sistem yang memungkinkan pengguna untuk membuat, mengedit, dan mengelola konten di situs web tanpa pengetahuan teknis yang mendalam",
      },
      {
        id: 14,
        question:
          "Apa yang dimaksud dengan 'E-commerce' (Electronic Commerce) dalam konteks pengembangan web?",
        myAnswer: "Sebuah keamanan untuk server",
      },
      {
        id: 15,
        question:
          "Apa yang dimaksud dengan 'Search Engine Optimization' (SEO) dalam pengembangan web?",
        myAnswer:
          "Sebuah praktik untuk meningkatkan visibilitas dan peringkat situs web di mesin pencari seperti Google",
      },
    ],
  };

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
  const kuis = quiz.questions.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(quiz.questions.length / recordsPerPage);
  const numbers = [...Array(nPage).keys()].map((i) => i + 1);

  return (
    <div className="p-32">
      <section>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="text-5xl font-bold text-main-black">Hasil Quiz</div>
            <div className="text-2xl font-bold text-dark-blue">
              {quiz.course}
            </div>
          </div>
          <div className="card rounded-lg border-black border-2 flex flex-row w-60 items-center justify-center h-16">
            <div className="text-3xl">
              Nilai : <span className="text-5xl font-bold">85</span>
              <span className="text-xl">/100</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Soal */}
      <section className="mt-6">
        <section className="mt-6">
          {kuis.map((question, index) => {
            // Calculate the actual index of the question based on pagination
            const actualIndex = firstIndex + index;

            return (
              <div key={actualIndex} className="mb-6">
                <div className="card rounded-lg bg-dark-blue w-32 text-center p-2">
                  <div className="text-2xl font-bold text-white">
                    {`Soal ${actualIndex + 1}`}
                  </div>
                </div>
                <p className="my-6">{question.question}</p>
                {question.answers.map((answer, answerIndex) => {
                  const isCorrect =
                    myAnswer.questions[actualIndex].myAnswer ===
                    question.correctAnswer;
                  const isAnswer =
                    myAnswer.questions[actualIndex].myAnswer === answer;
                  const answerTruth =
                    question.answers[answerIndex] === question.correctAnswer;
                  let answerStyle = "";

                  if (isCorrect && isAnswer) {
                    answerStyle = "bg-[#76FF03]";
                  } else if (!isCorrect && isAnswer) {
                    answerStyle = "bg-[#FF0D1E]";
                  }

                  return (
                    <div className="flex items-center  mb-4 " key={answerIndex}>
                      <div
                        className={`jawaban border-2 rounded-lg border-dark-blue w-fit py-2 px-4 ${answerStyle}`}
                      >
                        {`${String.fromCharCode(65 + answerIndex)}. ${answer}`}
                      </div>
                      {answerTruth && !isCorrect ? (
                        <Image
                          className="ms-2 "
                          src={checklist}
                          alt="checklist"
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
                <hr className="my-10" />
              </div>
            );
          })}
        </section>
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
  );
}
