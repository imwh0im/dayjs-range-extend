# isOverlap
Compare between DayjsRange objects.

### Example
```ts
import dayjsRange from 'dayjs-range-extend';

const dateRangeFirst = dayjsRange('2022-01-01', '2022-01-05');
const dateRangeSecond = dayjsRange('2022-01-03', '2022-01-07');
const dateRangeThird = dayjsRange('2022-01-10', '2022-01-15');

dateRangeFirst.isOverlap(dateRangeSecond); // => true
dateRangeFirst.isOverlap(dateRangeThird); // => false
```
