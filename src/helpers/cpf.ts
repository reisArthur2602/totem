export const formatCpf = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  return digits
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4')
}

export const isValidCpf = (cpf: string) => {
  const digits = cpf.replace(/\D/g, '')
  if (digits.length !== 11 || /^(\d)\1{10}$/.test(digits)) return false

  for (let t = 9; t < 11; t++) {
    let sum = 0
    for (let i = 0; i < t; i++) sum += parseInt(digits[i]) * (t + 1 - i)
    const check = ((sum * 10) % 11) % 10
    if (check !== parseInt(digits[t])) return false
  }
  return true
}
