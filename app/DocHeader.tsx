interface HeaderProps {
  title: string;
  description: string;
}

export default function Header({ title, description }: HeaderProps) {
return (
    <header className=" py-2 w-full">
    <div className="border-b border-gray-200 pb-8">
        <div className="max-w-3xl">
        <h1>{title}</h1>
        <p className="text-xl mt-2">{description}</p>
        </div>
    </div>
    </header>
);
}

