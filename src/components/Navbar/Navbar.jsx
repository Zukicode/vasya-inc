import styles from './Navbar.module.scss';

import logoImage from 'assets/logo.svg';

export const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.logo}>
				<img src={logoImage} alt='logo' />
			</div>
			<h1>Sigma</h1>
		</div>
	);
};
