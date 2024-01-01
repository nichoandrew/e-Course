import Link from "next/link";
import Image from "next/image";

export default function CardCourse({
  key,
  title,
  rating,
  video,
  diskon,
  price,
  image,
}) {
  const calculateDiscount = (price * diskon) / 100;
  const priceAfterDiscount = price - calculateDiscount;
  return (
    <>
      <Link
        href={"/detail-course"}
        className="border shadow rounded-md"
        key={key}
      >
        <div className="p-3 md:p-4">
          <Image
            src={image}
            alt={title}
            sizes={"(max-width: 768px) 100vw, 700px"}
            className="object-contain object-center rounded"
          />
          <h1 className="font-bold mt-3 text-[17px] md:text-lg truncate">
            {title}
          </h1>
          <div className="pt-2">
            <div className="flex items-center space-x-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-star-filled"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                  strokeWidth="0"
                  fill="#FDD835"
                ></path>
              </svg>
              <h1 className="text-sm text-[#45484F] font-medium">{rating}</h1>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-youtube-filled"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"
                  strokeWidth="0"
                  fill="#E43535"
                ></path>
              </svg>
              <h1 className="text-sm text-[#45484F] font-medium">
                {video} Videos
              </h1>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <span className="p-1 rounded-md bg-[#F0989E] text-[#E2313D] font-bold">
                {diskon} %
              </span>
              <span className="line-through text-[#A2A3A7] font-medium">
                Rp. {priceAfterDiscount.toLocaleString("id-ID")}
              </span>
            </div>
            <h2 className="font-bold ms-1 text-[#45484F] text-[17px] md:text-xl mt-3">
              Rp. {price.toLocaleString("id-ID")}
            </h2>
          </div>
        </div>
      </Link>
    </>
  );
}
