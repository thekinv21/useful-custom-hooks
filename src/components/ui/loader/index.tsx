import cn from 'classnames'

import styles from './Loader.module.scss'

export function CustomLoader() {
	return (
		<div className='flex h-screen w-full items-center justify-center'>
			<div className={styles.spinner_square}>
				<div className={cn(styles.square_1, styles.square)}></div>
				<div className={cn(styles.square_2, styles.square)}></div>
				<div className={cn(styles.square_3, styles.square)}></div>
			</div>
		</div>
	)
}
