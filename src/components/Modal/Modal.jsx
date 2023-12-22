import styles from './Modal.module.scss';

import { useEffect, useState } from 'react';

export const Modal = ({ toggleModal }) => {
	const [isCopy, setCopy] = useState(false);

	const toClipboard = () => {
		navigator.clipboard.writeText('yosip.');
		setCopy(true);
	};

	useEffect(() => {
		if (isCopy) {
			const timer = setTimeout(() => setCopy(false), 2000);

			return () => clearInterval(timer);
		}
	}, [isCopy]);

	return (
		<div className={styles.modal}>
			<div className={styles.content}>
				<div className={styles.header}>
					<button onClick={toggleModal}>
						<svg
							enableBackground='new 0 0 512 512'
							version='1.1'
							viewBox='0 0 512 512'
							fill='#ffffff'
						>
							<path d='M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z' />
						</svg>
					</button>
				</div>

				<div className={styles.contentModal}>
					<img
						src='https://i2.wp.com/thisisdacha.ru/wp-content/uploads/2017/04/koza-zaanenskoy-porody.jpg'
						alt='koza'
					/>

					<div className={styles.group}>
						<h1>Привіт, кицю!</h1>
						<p>
							Діскордик тут ➔➔➔ <span>yosip.</span>
						</p>
					</div>

					<button
						className={isCopy ? `${styles.copy} ${styles.active}` : styles.copy}
						onClick={toClipboard}
					>
						{isCopy ? 'Скопійовано!' : 'Скопіювати'}
					</button>
				</div>
			</div>
		</div>
	);
};
