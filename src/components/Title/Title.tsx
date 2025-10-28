import { TitleProps } from "../../Types/Title";

function Title({ name }: TitleProps) {
  return (
    <>
      <h2 className="font-semibold text-[101px] leading-none max-sm:text-[57px] max-sm:leading-[100%]">
        {name}
      </h2>
    </>
  );
}

export default Title;
