import { title } from 'process';
import courseCss from '../../assets/images/course_css.png'

export const Data = [
  {
    id: 1,
    name: "CSS Introduction",
    image: "@/assets/icons/thumbnail.png",
    price: "Rp 150.000",
    category: "Web Development",
    review: "4",
  },

  {
    id: 2,
    name: "CSS Introduction",
    image: "@/assets/icons/thumbnail.png",
    price: "Rp 150.000",
    category: "Web Development",
    review: "5",
  },

  {
    id: 3,
    name: "CSS Introduction",
    image: "@/assets/icons/thumbnail.png",
    price: "Rp 150.000",
    category: "Web Development",
    review: "3",
  },

  {
    id: 4,
    name: "CSS Introduction",
    image: "@/assets/icons/thumbnail.png",
    price: "Rp 150.000",
    category: "Web Development",
    review: "4",
  },

  {
    id: 5,
    name: "Digital Marketing",
    image: "@/assets/icons/thumbnail.png",
    price: "Rp 150.000",
    category: "Digital Marketing",
    review: "5",
  },

  {
    id: 6,
    name: "Digital Marketing",
    image: "@/assets/icons/thumbnail.png",
    price: "Rp 150.000",
    category: "Digital Marketing",
    review: "4",
  },

  {
    id: 7,
    name: "Digital Marketing",
    image: "@/assets/icons/thumbnail.png",
    price: "Rp 150.000",
    category: "Digital Marketing",
    review: "4",
  },

  {
    id: 8,
    name: "Digital Marketing",
    image: "@/assets/icons/thumbnail.png",
    price: "Rp 150.000",
    category: "Digital Marketing",
    review: "5",
  },

  {
    id: 9,
    name: "Graphic Design",
    image: "@/assets/icons/thumbnail.png",
    price: "Rp 150.000",
    category: "Graphic Design",
    review: "4",
  },

  {
    id: 10,
    name: "JGraphic Design",
    image: "@/assets/icons/thumbnail.png",
    price: "Rp 150.000",
    category: "Graphic Design",
    review: "4",
  },

  {
    id: 11,
    name: "Graphic Design",
    image: "@/assets/icons/thumbnail.png",
    price: "Rp 150.000",
    category: "Graphic Design",
    review: "4",
  },

  {
    id: 12,
    name: "Graphic Design",
    image: "@/assets/icons/thumbnail.png",
    price: "Rp 150.000",
    category: "Graphic Design",
    review: "4",
  },

  {
    id: 13,
    name: "HTML Introduction",
    image: "@/assets/icons/thumbnail.png",
    price: "Rp 150.000",
    category: "Self Development",
    review: "4",
  },

  {
    id: 14,
    name: "JavaScript",
    image: "@/assets/icons/thumbnail.png",
    price: "Rp 150.000",
    category: "Self Development",
    review: "4",
  },

  {
    id: 15,
    name: "CSS Introduction",
    image: "@/assets/icons/thumbnail.png",
    price: "Rp 150.000",
    category: "Self Development",
    review: "4",
  },

  {
    id: 16,
    name: "Data Base",
    image: "@/assets/icons/thumbnail.png",
    price: "Rp 150.000",
    category: "Self Development",
    review: "4",
  },

  {
    id: 17,
    name: 'Data Science',
    image: '@/assets/icons/thumbnail.png',
    price: 'Rp 150.000',
    category: 'Microsoft Excel',
    review: "4",
  },

  {
    id: 18,
    name: 'Data Science',
    image: '@/assets/icons/thumbnail.png',
    price: 'Rp 150.000',
    category: 'Microsoft Excel',
    review: "4",
  },

  {
    id: 19,
    name: 'Data Science',
    image: '@/assets/icons/thumbnail.png',
    price: 'Rp 150.000',
    category: 'Microsoft Excel',
    review: "4",
  },

  {
    id: 20,
    name: "Data Base",
    image: "@/assets/icons/thumbnail.png",
    price: "Rp 150.000",
    category: "Microsoft Excel",
    review: "4",
  },

  {
    id: 21,
    name: "HTML Introduction",
    image: "@/assets/icons/thumbnail.png",
    price: "Rp 150.000",
    category: "UI/UX Design",
    review: "4",
  },

  {
    id: 22,
    name: "JavaScript",
    image: "@/assets/icons/thumbnail.png",
    price: "Rp 150.000",
    category: "UI/UX Design",
    review: "4",
  },

  {
    id: 23,
    name: "CSS Introduction",
    image: "@/assets/icons/thumbnail.png",
    price: "Rp 150.000",
    category: "UI/UX Design",
    review: "4",
  },

  {
    id: 24,
    name: "Data Base",
    image: "@/assets/icons/thumbnail.png",
    price: "Rp 150.000",
    category: "UI/UX Design",
    review: "4",
  },
];

export const Materi = [
  {
    id: 1,
    name: "Dasar-dasar Digital Marketing",
    lesson1: "Introduction",
    lesson2: "Quiz",
  },
  {
    id: 2,
    name: "Dasar-dasar Web Development",
    lesson1: "Introduction",
    lesson2: "Quiz",
  },
  {
    id: 3,
    name: "Dasar-dasar Graphic Design",
    lesson1: "Introduction",
    lesson2: "Quiz",
  },
  {
    id: 4,
    name: "Dasar-dasar Self Development",
    lesson1: "Introduction",
    lesson2: "Quiz",
  },
  {
    id: 5,
    name: "Dasar-dasar Microsoft Excel",
    lesson1: "Introduction",
    lesson2: "Quiz",
  },
  // {
  //     id:6,
  //     name: "Dasar-dasar UI/UX Design",
  //     lesson1: "Introduction",
  //     lesson2: "Quiz",
  // },
];

export const quiz = {
  course: "Fullstack Web Development Track",
  totalQuestions: 15, // Jumlah total pertanyaan
  questions: [
    {
      id: 1,
      question: "Apa yang dimaksud dengan HTML dalam pengembangan web?",
      answers: [
        "Hyper Text Markup Language",
        "High-level Text Markup Language",
        "Hypertext and Text Markup Language",
        "Hyperlink and Text Markup Language",
      ],
      correctAnswer: "Hyper Text Markup Language",
    },
    {
      id: 2,
      question:
        "Apa perbedaan antara CSS dan JavaScript dalam pengembangan web?",
      answers: [
        "CSS digunakan untuk mengatur tampilan dan gaya, sedangkan JavaScript digunakan untuk membuat tampilan web dinamis.",
        "CSS digunakan untuk menambahkan interaksi ke situs web, sedangkan JavaScript digunakan untuk mengatur tampilan dan gaya.",
        "CSS digunakan untuk mengatur tampilan teks, sedangkan JavaScript digunakan untuk mengatur tampilan gambar.",
        "CSS digunakan untuk mengatur tampilan dan gaya, sedangkan JavaScript digunakan untuk mengatur tampilan teks.",
      ],
      correctAnswer:
        "CSS digunakan untuk mengatur tampilan dan gaya, sedangkan JavaScript digunakan untuk membuat tampilan web dinamis.",
    },
    {
      id: 3,
      question:
        "Apa yang dimaksud dengan 'Single Page Application' (SPA) dalam pengembangan web?",
      answers: [
        "Sebuah aplikasi web yang memiliki banyak halaman",
        "Sebuah halaman web yang hanya memiliki satu gambar",
        "Sebuah halaman web yang hanya memuat satu jenis konten",
        "Sebuah aplikasi web yang beroperasi tanpa memuat ulang halaman",
      ],
      correctAnswer:
        "Sebuah aplikasi web yang beroperasi tanpa memuat ulang halaman",
    },
    {
      id: 4,
      question:
        "Apa peran utama dari 'Front-end Developer' dalam pengembangan web?",
      answers: [
        "Membuat antarmuka pengguna yang interaktif",
        "Mengelola server",
        "Merancang basis data",
        "Mengelola keamanan situs web",
      ],
      correctAnswer: "Membuat antarmuka pengguna yang interaktif",
    },
    {
      id: 5,
      question:
        "Apa yang dimaksud dengan 'Responsive Web Design' dalam pengembangan web?",
      answers: [
        "Mengatur tampilan situs web agar sesuai dengan berbagai perangkat dan layar",
        "Mengatur ukuran font di seluruh situs web",
        "Mengubah tema warna situs web",
        "Mengoptimalkan situs web untuk mesin pencari",
      ],
      correctAnswer:
        "Mengatur tampilan situs web agar sesuai dengan berbagai perangkat dan layar",
    },
    {
      id: 6,
      question:
        "Apa manfaat utama dari penggunaan 'Version Control System' (VCS) dalam pengembangan perangkat lunak?",
      answers: [
        "Melacak perubahan kode sumber dan mengelola kolaborasi tim",
        "Mempercepat kecepatan internet",
        "Mengelola versi perangkat keras",
        "Menghindari konflik antara pengembang",
      ],
      correctAnswer:
        "Melacak perubahan kode sumber dan mengelola kolaborasi tim",
    },
    {
      id: 7,
      question:
        "Apa yang dimaksud dengan 'Back-end Developer' dalam pengembangan web?",
      answers: [
        "Pengembang yang fokus pada pengelolaan server dan logika bisnis",
        "Pengembang yang fokus pada tampilan dan antarmuka pengguna",
        "Pengembang yang bertanggung jawab atas keamanan situs web",
        "Pengembang yang fokus pada pengaturan tampilan teks",
      ],
      correctAnswer:
        "Pengembang yang fokus pada pengelolaan server dan logika bisnis",
    },
    {
      id: 8,
      question:
        "Apa yang dimaksud dengan 'API' (Application Programming Interface) dalam konteks pengembangan web?",
      answers: [
        "Sebuah set aturan dan protokol yang memungkinkan berbagai aplikasi berkomunikasi satu sama lain",
        "Sebuah perangkat keras yang digunakan dalam komputer",
        "Sebuah sistem operasi",
        "Sebuah metode untuk mengubah tampilan web",
      ],
      correctAnswer:
        "Sebuah set aturan dan protokol yang memungkinkan berbagai aplikasi berkomunikasi satu sama lain",
    },
    {
      id: 9,
      question:
        "Apa yang dimaksud dengan 'Database Management System' (DBMS) dalam pengembangan web?",
      answers: [
        "Sebuah sistem untuk mengelola dan mengakses data",
        "Sebuah alat untuk merancang antarmuka pengguna",
        "Sebuah metode untuk mengelola tampilan web",
        "Sebuah bahasa pemrograman untuk mengembangkan aplikasi web",
      ],
      correctAnswer: "Sebuah sistem untuk mengelola dan mengakses data",
    },
    {
      id: 10,
      question: "Apa yang dimaksud dengan 'Framework' dalam pengembangan web?",
      answers: [
        "Sebuah kerangka kerja perangkat lunak yang menyediakan alat dan pedoman untuk membangun aplikasi web",
        "Sebuah kerangka untuk menggantungkan gambar",
        "Sebuah perangkat keras untuk server web",
        "Sebuah kerangka kerja perangkat keras yang menyediakan alat dan pedoman untuk membangun perangkat keras",
      ],
      correctAnswer:
        "Sebuah kerangka kerja perangkat lunak yang menyediakan alat dan pedoman untuk membangun aplikasi web",
    },
    {
      id: 11,
      question:
        "Apa yang dimaksud dengan 'Web Hosting' dalam konteks pengembangan web?",
      answers: [
        "Sebuah tempat untuk meng-host gambar",
        "Sebuah layanan yang menyediakan koneksi internet",
        "Sebuah tempat untuk menyimpan makanan",
        "Sebuah layanan yang menyediakan server untuk menyimpan situs web dan membuatnya dapat diakses melalui internet",
      ],
      correctAnswer:
        "Sebuah layanan yang menyediakan server untuk menyimpan situs web dan membuatnya dapat diakses melalui internet",
    },
    {
      id: 12,
      question:
        "Apa yang dimaksud dengan 'Cybersecurity' dalam konteks pengembangan web?",
      answers: [
        "Sebuah keamanan untuk mesin pencari",
        "Sebuah sistem operasi untuk server",
        "Sebuah keamanan untuk komputer pribadi",
        "Sebuah praktik dan teknologi yang digunakan untuk melindungi sistem komputer dan jaringan dari ancaman digital",
      ],
      correctAnswer:
        "Sebuah praktik dan teknologi yang digunakan untuk melindungi sistem komputer dan jaringan dari ancaman digital",
    },
    {
      id: 13,
      question:
        "Apa yang dimaksud dengan 'Content Management System' (CMS) dalam pengembangan web?",
      answers: [
        "Sebuah bahasa pemrograman untuk mengelola tampilan web",
        "Sebuah alat untuk merancang antarmuka pengguna",
        "Sebuah sistem untuk mengelola dan mengakses data",
        "Sebuah sistem yang memungkinkan pengguna untuk membuat, mengedit, dan mengelola konten di situs web tanpa pengetahuan teknis yang mendalam",
      ],
      correctAnswer:
        "Sebuah sistem yang memungkinkan pengguna untuk membuat, mengedit, dan mengelola konten di situs web tanpa pengetahuan teknis yang mendalam",
    },
    {
      id: 14,
      question:
        "Apa yang dimaksud dengan 'E-commerce' (Electronic Commerce) dalam konteks pengembangan web?",
      answers: [
        "Sebuah jenis tampilan web",
        "Sebuah jenis komputer",
        "Sebuah keamanan untuk server",
        "Sebuah bisnis atau transaksi perdagangan yang dilakukan secara elektronik melalui internet",
      ],
      correctAnswer:
        "Sebuah bisnis atau transaksi perdagangan yang dilakukan secara elektronik melalui internet",
    },
    {
      id: 15,
      question:
        "Apa yang dimaksud dengan 'Search Engine Optimization' (SEO) dalam pengembangan web?",
      answers: [
        "Sebuah sistem operasi untuk server",
        "Sebuah praktik untuk meningkatkan keamanan situs web",
        "Sebuah alat untuk mengatur tampilan pengguna",
        "Sebuah praktik untuk meningkatkan visibilitas dan peringkat situs web di mesin pencari seperti Google",
      ],
      correctAnswer:
        "Sebuah praktik untuk meningkatkan visibilitas dan peringkat situs web di mesin pencari seperti Google",
    },
  ],
};

export const notifikasi = [
  {
    username: "Hanny Fitriaruli",
    message: "Membeli paket belajar untuk anda!",
    status: "sudah_dibaca",
    timestamp: "2023-10-10 08:30:00",
  },
  {
    username: "Hanny Fitriaruli",
    message: "Selamat datang di kursus online kami!",
    status: "sudah_dibaca",
    timestamp: "2023-10-10 08:35:00",
  },
  {
    username: "Hanny Fitriaruli",
    message: "Jangan lewatkan pelajaran pertama!",
    status: "belum_dibaca",
    timestamp: "2023-10-10 08:40:00",
  },
  {
    username: "Hanny Fitriaruli",
    message: "Ingin tahu lebih lanjut? Kunjungi situs web kami!",
    status: "belum_dibaca",
    timestamp: "2023-10-10 08:45:00",
  },
  {
    username: "Hanny Fitriaruli",
    message: "Kami siap membantu Anda belajar.",
    status: "belum_dibaca",
    timestamp: "2023-10-10 08:50:00",
  },
  {
    username: "Hanny Fitriaruli",
    message: "Jangan ragu untuk bertanya jika ada pertanyaan.",
    status: "sudah_dibaca",
    timestamp: "2023-10-10 08:55:00",
  },
  {
    username: "Hanny Fitriaruli",
    message: "Semoga sukses dalam kursus Anda!",
    status: "sudah_dibaca",
    timestamp: "2023-10-10 09:00:00",
  },
  {
    username: "Hanny Fitriaruli",
    message: "Tetap semangat!",
    status: "sudah_dibaca",
    timestamp: "2023-10-10 09:05:00",
  },
  {
    username: "Hanny Fitriaruli",
    message: "Jadwal kursus tersedia di akun Anda.",
    status: "belum_dibaca",
    timestamp: "2023-10-10 09:10:00",
  },
  {
    username: "Hanny Fitriaruli",
    message: "Segera mulai belajar!",
    status: "belum_dibaca",
    timestamp: "2023-10-10 09:15:00",
  },
];

export const allCourses = [
  {
    id: 1,
    name: "Kursus HTML Introduction",
    rating: 4.6,
    video: 5,
    diskon: 50,
    price: 549000,
    image: courseCss,
    category: "Web Development"
  },
  {
    id: 2,
    name: "Kursus CSS Introduction",
    rating: 4.9,
    video: 5,
    diskon: 50,
    price: 500000,
    image: courseCss,
    category: "Web Development"
  },
  {
    id: 3,
    name: "Kursus Javascript Introduction",
    rating: 4.8,
    video: 5,
    diskon: 50,
    price: 699000,
    image: courseCss,
    category: "Web Development"
  },
  {
    id: 4,
    name: "Kursus Accounting Introduction",
    rating: 4.9,
    video: 5,
    diskon: 50,
    price: 549000,
    image: courseCss,
    category: "Kursus Siap Kerja"
  },
  {
    id: 5,
    name: "Kursus Artificial Intelligence",
    rating: 4.5,
    video: 5,
    diskon: 50,
    price: 549000,
    image: courseCss,
    category: "Teknologi"
  },
  {
    id: 6,
    name: "Kursus Blockchain Introduction",
    rating: 4.9,
    video: 5,
    diskon: 50,
    price: 549000,
    image: courseCss,
    category: "Teknologi"
  },
  {
    id: 7,
    name: "Kursus Bahasa Korea Introduction",
    rating: 4.2,
    video: 5,
    diskon: 50,
    price: 549000,
    image: courseCss,
    category: "Bahasa"
  },
  {
    id: 8,
    name: "Kursus Bahasa Indonesia Introduction",
    rating: 4.1,
    video: 5,
    diskon: 50,
    price: 549000,
    image: courseCss,
    category: "Bahasa"
  },
  {
    id: 9,
    name: "Kursus Bahasa Spanyol Introduction",
    rating: 4.4,
    video: 5,
    diskon: 50,
    price: 549000,
    image: courseCss,
    category: "Bahasa"
  },
  {
    id: 10,
    name: "Kursus UI/UX Introduction",
    rating: 4.3,
    video: 5,
    diskon: 50,
    price: 549000,
    image: courseCss,
    category: "UI/UX Designer"
  },
  {
    id: 11,
    name: "Figma Zero to Mastery",
    rating: 4.4,
    video: 5,
    diskon: 50,
    price: 549000,
    image: courseCss,
    category: "UI/UX Designer"
  },
  {
    id: 12,
    name: "Kursus Personal Finance Management",
    rating: 4.1,
    video: 5,
    diskon: 20,
    price: 549000,
    image: courseCss,
    category: "Kursus Siap Kerja"
  },
  {
    id: 13,
    name: "Bahasa Pemrograman Golang",
    rating: 4.2,
    video: 5,
    diskon: 50,
    price: 549000,
    image: courseCss,
    category: "Web Development"
  },
]


export const ProfileVendor = [
  {
  fullName: "Marcella Diva",
  email: "marcelladiva232@gmail.com",
  address: "Jl.Pemuda No.58 Kec.Mojosari, Kab.Mojokerto",
  gender: "Perempuan",
  occupation: "Mahasiswa",
}

]

export const NotifikasiVendor = [
  {
    title: "Pembelian kelas berhasil",
    message: "Kelas Introduction CSS berhasil dibeli oleh user fearduck",
    timestamp: "28 September 2023"
  },

  {
    title: "Pembelian kelas berhasil",
    message: "Kelas Introduction CSS berhasil dibeli oleh user ArThonz",
    timestamp: "28 September 2023"
  },

  {
    title: "Pembelian kelas berhasil",
    message: "Saldo anda ditarik sebesar Rp 2.000.000",
    timestamp: "28 September 2023"
  },

  {
    title: "Pembelian kelas berhasil",
    message: "Pembelian kelas anda bulan September berhasil mencapai 100 penjualan ",
    timestamp: "28 September 2023"
  },

  {
    title: "Pembelian kelas berhasil",
    message: "Kelas Introduction CSS berhasil dibeli oleh user Bombi",
    timestamp: "28 September 2023"
  }
]

export const PesertaKursus = [
  {
    id: 1,
    image: require('@/assets/icons/Laluna.svg').default,
    name: "Laluna",
    kuis: [
      {
        title: 'kuis 1',
        progress: 'selesai'
      },
      {
        title: 'kuis 2',
        progress: 'selesai'
      }
    ],
    tugas: [
      {
        title: 'Pengertian CSS',
        progress: 'selesai'
      },
      {
        title: 'Sifat dan Prinsip CSS',
        progress: 'Belum Selesai'
      }
    ]
  },
  {
    id: 2,
    image:require('@/assets/icons/sabrina.svg').default,
    name: "Sabrina ",
    kuis: [
      {
        title: 'kuis 1',
        progress: 'selesai'
      },
      {
        title: 'kuis 2',
        progress: 'selesai'
      }
    ],
    tugas: [
      {
        title: 'Pengertian CSS',
        progress: 'selesai'
      },
      {
        title: 'Sifat dan Prinsip CSS',
        progress: 'Belum Selesai'
      }
    ]
  },
  {
    id: 3,
    name: "Niken",
    image:require('@/assets/icons/Niken.svg').default,
    kuis: [
      {
        title: 'kuis 1',
        progress: 'selesai'
      },
      {
        title: 'kuis 2',
        progress: 'selesai'
      }
    ],
    tugas: [
      {
        title: 'Pengertian CSS',
        progress: 'selesai'
      },
      {
        title: 'Sifat dan Prinsip CSS',
        progress: 'Belum Selesai'
      }
    ]
  },

]