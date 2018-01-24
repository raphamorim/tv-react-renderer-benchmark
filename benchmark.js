const MemoryInspector = require('memory-inspector')

// Should not pass 5MB

MemoryInspector({
  url: 'http://127.0.0.1:3012',
  delay: 0,
  maxMemoryLimit: 5 * 1048576,
  maxMemoryPercentThreshold: 90,
}).then((info) => {
  console.log('react-dom', info)
})

MemoryInspector({
  url: 'http://127.0.0.1:3013',
  delay: 0,
  maxMemoryLimit: 5 * 1048576,
  maxMemoryPercentThreshold: 50,
}).then((info) => {
  console.log('react-tv', info)
})
