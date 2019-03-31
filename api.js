export const fetchBase = async base => {
  const url = `https://api.exchangeratesapi.io/latest?base=${base}`
  try {
    const response = await fetch(url)
    const results = await response.json()
    console.log(results)
    return results
  } catch (err) {
    return console.log(err)
  }
}

export const baseRates = [
  'AUD',
  'BGN',
  'BRL',
  'CAD',
  'CHF',
  'CNY',
  'CZK',
  'DKK',
  'GBP',
  'HKD',
  'HRK',
  'HUF',
  'IDR',
  'ILS',
  'INR',
  'ISK',
  'JPY',
  'KRW',
  'MXN',
  'MYR',
  'NOK',
  'NZD',
  'PHP',
  'PLN',
  'RON',
  'RUB',
  'SEK',
  'SGD',
  'THB',
  'TRY',
  'USD',
  'ZAR'
]
