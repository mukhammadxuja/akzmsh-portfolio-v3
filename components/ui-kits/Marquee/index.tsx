import Link from 'next/link';

interface IButtonProps {
  text: string;
  link?: string;
}

const textLength: number = 20;

const Button: React.FC<IButtonProps> = ({ text, link }) => {
  return (
    <>
      <Link href="#!">
        <div className="w-full overflow-hidden group bg-transparent py-2 md:py-3 lg:py-4 px-4 border-t-[1.5px] border-b-[1.5px] border-white cursor-pointer">
          <div className="bg-transparent group-hover:hidden text-2xl md:text-4xl lg:text-6xl text-white font-semibold uppercase text-center">
            {text}
          </div>
          <div className="group-hover:animate-marquee whitespace-nowrap hidden group-hover:block">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center space-x-3">
                <span className="mx-4 text-2xl md:text-4xl lg:text-6xl text-white font-semibold uppercase">
                  {text}
                </span>
                <span className="text-6xl">*</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span className="mx-4 text-2xl md:text-4xl lg:text-6xl text-white font-semibold uppercase">
                  {text}
                </span>
                <span className="text-6xl">*</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span className="mx-4 text-2xl md:text-4xl lg:text-6xl text-white font-semibold uppercase">
                  {text}
                </span>
                <span className="text-6xl">*</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span className="mx-4 text-2xl md:text-4xl lg:text-6xl text-white font-semibold uppercase">
                  {text}
                </span>
                <span className="text-6xl">*</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span className="mx-4 text-2xl md:text-4xl lg:text-6xl text-white font-semibold uppercase">
                  {text}
                </span>
                <span className="text-6xl">*</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span className="mx-4 text-2xl md:text-4xl lg:text-6xl text-white font-semibold uppercase">
                  {text}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Button;
