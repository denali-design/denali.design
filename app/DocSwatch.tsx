interface DocSwatchProps {
  name: string;
  color: string;
}

export default function DocSwatch({ name, color }: DocSwatchProps) {
return (
  <div>
     <div className={`${color} h-28 w-28`}></div>
    <p className="text-sm">{ name}</p>
  </div>
);
}

