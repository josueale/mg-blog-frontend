export function getPasswordStrength(password: string) {
  const validations = [
    Number(password.length > 5),
    Number(password.search(/[A-Z]/) > -1),
    Number(password.search(/[0-9]/) > -1),
    Number(password.search(/[$&+,:;=?@#]/) > -1),
  ];

  const strength = validations.reduce((acc, cur) => acc + cur, 0) ;

  return strength;
}
