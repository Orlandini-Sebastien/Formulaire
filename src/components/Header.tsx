import { ReactElement } from "react";

type HeaderProps = {
	title: string;
};

const Header = ({ title }: HeaderProps): ReactElement => {
	return <header>{title}</header>;
};

export default Header;
