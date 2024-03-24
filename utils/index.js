export const formatDate = (value, dateStyle = 'full') => {
    if (!value) return ''
  
    const valueToDate = new Date(value)
  
    const options = {
      dateStyle
    }
  
    return new Intl.DateTimeFormat('en-US', options)
      .format(valueToDate)
  }
  
  export const formatNumber = (number) => {
    const localeDefault = 'en-US'
  
    const options = {
      minimumFractionDigits: 2
    }
  
    return new Intl.NumberFormat(localeDefault, options)
      .format(number)
  }