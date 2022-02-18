# isValidRange
This returns a boolean indicating whether the DayjsRange object contains a valid date or not.

### Example
```ts
import dayjsRange from 'dayjs-range-extend';

const dateRangeFirst = dayjsRange('2022-01-01', '2022-01-05');
const dateRangeSecond = dayjsRange('2022-01-04');
const dateRangeThird = dayjsRange('', '2022-01-10');

dateRangeFirst.isValidRange() // => true
dateRangeSecond.isValidRange() // => true
dateRangeThird.isValidRange() // => false
```
