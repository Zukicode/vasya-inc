import { Welcome } from 'components/Welcome/Welcome';
import styles from './App.module.scss';

import { Modal } from 'components/Modal/Modal';
import { Navbar } from 'components/Navbar/Navbar';
import { useState } from 'react';

export const App = () => {
	const [isVisibleModal, setVisibleModal] = useState(false);

	const toggleModal = () => setVisibleModal(!isVisibleModal);

	return (
		<div className={styles.application}>
			{isVisibleModal && <Modal toggleModal={toggleModal} />}

			<Navbar />
			<Welcome toggleModal={toggleModal} />
		</div>
	);
};
