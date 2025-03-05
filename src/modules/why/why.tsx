'use client'

import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import CheckIcon from '@icons/why/check.svg'
import FolderIcon from '@icons/why/folder.svg'
import HeartIcon from '@icons/why/heart.svg'
import PeopleIcon from '@icons/why/people.svg'

import styles from './why.module.scss'
import { WhyProps } from './why.types'

interface AdvantageItem {
	icon: FC<{ className?: string }>
	title: ReactNode
}

const advantagesList: AdvantageItem[] = [
	{
		icon: CheckIcon,
		title: <>Результативность</>
	},
	{
		icon: FolderIcon,
		title: <>Широкий спектр услуг</>
	},
	{
		icon: PeopleIcon,
		title: <>Долгосрочные отношения с&nbsp;клиентами</>
	},
	{
		icon: HeartIcon,
		title: <>Индивидуальный подход</>
	}
]

const WhyComponent: FC<WhyProps> = ({
	className
}) => {
	const rootClassName = classNames(styles.root, className)

	return (
		<div className={rootClassName}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h2 className={styles.title}>Почему мы?</h2>
					<div className={styles.advantagesList}>
						{advantagesList.map((item, index) => (
							<div key={index} className={styles.advantageItem}>
								<div className={styles.iconWrapper}>
									<item.icon className={styles.icon} />
								</div>
								<h3 className={styles.advantageTitle}>{item.title}</h3>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default WhyComponent
