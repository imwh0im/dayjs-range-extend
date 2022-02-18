# subtractStartRange
Returns a cloned DayjsRange object with a start-date amount of time subtracted.

### Example
```ts
import dayjsRange from 'dayjs-range-extend';

const dateRange = dayjsRange('2022-01-01', '2022-01-05');

const dateRangeAdd = dateRange.subtractStartRange(1, 'd');

dateRange.startDate.format('YYYY-MM-DD HH:mm:ss'); // => 2022-01-01 00:00:00
dateRangeAdd.startDate.format('YYYY-MM-DD HH:mm:ss'); // => 2021-12-31 00:00:00
```
