import styles from './Welcome.module.scss';

import imageProfile from 'assets/image.jpg';

export const Welcome = ({ toggleModal }) => {
	return (
		<div className={styles.welcome}>
			<div className={styles.backRound}></div>
			<div className={styles.backRound2}></div>

			<div className={styles.image}>
				<img src={imageProfile} alt='me' />
			</div>

			<div className={styles.text}>
				<div>
					<h1>Йосип </h1>
					<p>
						🧂 Файних хлоп, то про мене! <br /> 🧂 Їбу баб, курю сігарєту, граю
						танки і пахую мені хто кого. <br />
						🧂 Тайлер Дєрден (Їбу козу)
					</p>
				</div>

				<div className={styles.buttons}>
					<button onClick={() => window.open('https://t.me/neYosip', '_blank')}>
						<span className={styles.icon}>
							<svg enableBackground='new 0 0 512 512' viewBox='0 0 512 512'>
								<g id='comp_x5F_335-telegram'>
									<g>
										<path
											d='    M477.805,102.98l-67.327,317.516c-5.08,22.41-18.326,27.984-37.15,17.431l-102.585-75.596l-49.497,47.607    c-5.477,5.478-10.06,10.061-20.617,10.061l7.37-104.479l190.129-171.805c8.268-7.37-1.792-11.454-12.848-4.083L150.233,287.633    l-101.19-31.672c-22.011-6.873-22.408-22.012,4.581-32.568L449.419,70.911C467.744,64.039,483.779,74.993,477.805,102.98z'
											stroke='none'
											strokeWidth='20'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeMiterlimit='10'
										/>
									</g>
								</g>
								<g />
							</svg>
						</span>
						Telegram
					</button>
					<button onClick={toggleModal}>
						<span className={styles.icon}>
							<svg
								fill='none'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									clipRule='evenodd'
									d='M8.02096 4.02659C8.43789 3.92849 8.87099 4.1068 9.098 4.47L10.0542 6H13.9458L14.902 4.47C15.129 4.1068 15.5621 3.92849 15.979 4.02659L20.229 5.02659C20.5667 5.10603 20.839 5.35474 20.9487 5.68378L22.4099 10.0673C22.8007 11.2399 23 12.4679 23 13.7039V18C23 18.4089 22.751 18.7766 22.3714 18.9285L17.3714 20.9285C17 21.077 16.5758 20.99 16.2929 20.7071L14.5858 19H9.41421L7.70711 20.7071C7.42424 20.99 7.00003 21.077 6.62861 20.9285L1.62861 18.9285C1.24895 18.7766 1 18.4089 1 18V13.7039C1 12.4679 1.19927 11.2399 1.59014 10.0673L3.05132 5.68378C3.161 5.35474 3.43334 5.10603 3.77096 5.02659L8.02096 4.02659ZM8.5 10.5C7.11929 10.5 6 11.6193 6 13C6 14.3807 7.11929 15.5 8.5 15.5C9.88071 15.5 11 14.3807 11 13C11 11.6193 9.88071 10.5 8.5 10.5ZM13 13C13 11.6193 14.1193 10.5 15.5 10.5C16.8807 10.5 18 11.6193 18 13C18 14.3807 16.8807 15.5 15.5 15.5C14.1193 15.5 13 14.3807 13 13Z'
									fillRule='evenodd'
								/>
							</svg>
						</span>
						Discord
					</button>
				</div>
			</div>
		</div>
	);
};
