import { Sprite } from './sprite';
import styles from './styles.module.scss';

export type IconName<Group extends keyof Sprite> = Sprite[Group];

export interface IconProps<Group extends keyof Sprite> {
  name: IconName<Group>;
  type?: Group;
  className?: string;
}

export const Icon = <Group extends keyof Sprite>({
  type,
  name,
  className,
}: IconProps<Group>) => {
  return (
    <svg className={`${styles.icon} ${className ?? ''}`}>
      <use xlinkHref={`/${type}.svg#${name}`} />
    </svg>
  );
};
