# isEqual
This indicates whether the DayjsRange object is the same as the other supplied Date range.

### Example
```ts
import dayjsRange from 'dayjs-range-extend';

const dateRangeFirst = dayjsRange('2022-01-01', '2022-01-05');
const dateRangeSecond = dayjsRange('2022-01-01', '2022-01-05');
const dateRangeThird = dayjsRange('2022-01-03', '2022-01-07');

dateRangeFirst.isEqual(dateRangeSecond); // => true
dateRangeFirst.isEqual(dateRangeThird); // => false
```
