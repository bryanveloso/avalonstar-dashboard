`import DS from 'ember-data'`

Host = DS.Model.extend
  broadcast: DS.attr 'number'
  timestamp: DS.attr 'date'
  hoster: DS.attr 'string'

`export default Host`
