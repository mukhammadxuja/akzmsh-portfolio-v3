import Link from 'next/link';

interface IButtonProps {
  text: string;
  link?: string;
}

const Button: React.FC<IButtonProps> = ({ text, link }) => {
  return (
    <>
      <Link
        href="#!"
      >
        <div className="w-56 overflow-hidden group bg-transparent py-2 px-4 rounded-3xl border-[1.5px] border-white cursor-pointer">
          <div className=" bg-transparent group-hover:hidden text-2xl text-white font-semibold uppercase text-center">
            {text}
          </div>
          <div className="group-hover:animate-marquee whitespace-nowrap hidden group-hover:block w-full">
            <span className="mx-2 text-2xl text-white font-semibold uppercase">{text}</span>
            <span className="mx-2 text-2xl text-white font-semibold uppercase">{text}</span>
            <span className="mx-2 text-2xl text-white font-semibold uppercase">{text}</span>
            <span className="mx-2 text-2xl text-white font-semibold uppercase">{text}</span>
            <span className="mx-2 text-2xl text-white font-semibold uppercase">{text}</span>
            <span className="mx-2 text-2xl text-white font-semibold uppercase">{text}</span>
            <span className="mx-2 text-2xl text-white font-semibold uppercase">{text}</span>
            <span className="mx-2 text-2xl text-white font-semibold uppercase">{text}</span>
            <span className="mx-2 text-2xl text-white font-semibold uppercase">{text}</span>
            <span className="mx-2 text-2xl text-white font-semibold uppercase">{text}</span>
            <span className="mx-2 text-2xl text-white font-semibold uppercase">{text}</span>
            <span className="mx-2 text-2xl text-white font-semibold uppercase">{text}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Button;
