import Link from 'next/link';

interface ILinkProps {
  text: string;
}

const LinkText: React.FC<ILinkProps> = ({ text }) => {
  return (
    <Link href="#!">
      <a className="text-green-500 underline bg-primary">{text}</a>
    </Link>
  );
};

export default LinkText;
