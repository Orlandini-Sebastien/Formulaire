import { ReactElement } from "react";

type HeaderProps = {
	title: string;
};

const Header = ({ title }: HeaderProps): ReactElement => {
	return <header className="flex justify-center font-bold my-2 mx-0  sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl ">{title}</header>;
};

export default Header;
