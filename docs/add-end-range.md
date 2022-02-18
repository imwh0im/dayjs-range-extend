# addEndRange
Returns a cloned DayjsRange object with a end-date amount of time added.

### Example
```ts
import dayjsRange from 'dayjs-range-extend';

const dateRange = dayjsRange('2022-01-01', '2022-01-05');

const dateRangeAdd = dateRange.addEndRange(1, 'd');

dateRange.endDate.format('YYYY-MM-DD HH:mm:ss'); // => 2022-01-05 00:00:00
dateRangeAdd.endDate.format('YYYY-MM-DD HH:mm:ss'); // => 2022-01-06 00:00:00
```
