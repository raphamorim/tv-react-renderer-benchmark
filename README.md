# TV React Renderer Benchmark

| Scenario | React-DOM `16.2.0` | React-TV `0.3.4` |
| --- | --- | --- |
| Rendering once with 3 Components | `13.4MB` | `12.7MB` |

## Raw Output

```bash
$ node benchmark.js

react-tv { usedJSHeapSize: 10000000,
  totalJSHeapSize: 12700000,
  jsHeapSizeLimit: 2190000000,
  memoryUsagePercent: 1095000000,
  timestamp: '2018-01-24T12:53:22.410Z',
  exceededMemoryMaximum: 4757120,
  exceededMemoryUsagePercent: false }

react-dom { usedJSHeapSize: 10000000,
  totalJSHeapSize: 13400000,
  jsHeapSizeLimit: 2190000000,
  memoryUsagePercent: 1971000000,
  timestamp: '2018-01-24T12:53:22.508Z',
  exceededMemoryMaximum: 4757120,
  exceededMemoryUsagePercent: false }
```
