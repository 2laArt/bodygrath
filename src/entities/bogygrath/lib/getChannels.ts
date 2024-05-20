import { IGate, IPoint } from '../bodygrath';

export interface IChannel {
  start: IPoint;
  end: IPoint;
}

// Function returns channels consisting of connecting gates
export function createChannels(items: IGate[]) {
  const itemMap = new Map<number, IGate>();
  items.forEach(item => itemMap.set(item.id, item));

  const result: IChannel[] = [];

  items.forEach(item => {
    const linkedItem = itemMap.get(item.link);
    if (linkedItem) {
      result.push({
        start: { id: item.id, x: item.x, y: item.y, isActive: item.isActive },
        end: {
          id: linkedItem.id,
          x: linkedItem.x,
          y: linkedItem.y,
          isActive: linkedItem.isActive,
        },
      });
    }
  });

  return result;
}
