import { Icon, IconName } from '@/shared/ui';
import styles from './styles.module.scss';

const iconType = 'hd';
export const HDTable: React.FC<{
  data: { [key in IconName<typeof iconType>]: number };
  isLeft: boolean;
}> = ({ data, isLeft }) => {
  return (
    <div
      className={styles.table}
      style={{
        alignItems: isLeft ? 'flex-start' : 'flex-end',
        color: isLeft ? '#a3314b' : '#393572',
      }}
    >
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          {isLeft ? (
            <>
              <Icon type={iconType} name={key as IconName<'hd'>} /> {value}
            </>
          ) : (
            <>
              {value} <Icon type={iconType} name={key as IconName<'hd'>} />
            </>
          )}
        </div>
      ))}
    </div>
  );
};
