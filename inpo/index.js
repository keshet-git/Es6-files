const personalInformtion = {
  firstname: 'Keshet',
  lastname: 'Avrahami',
  city: 'efrat',
  state: 'israel',
  zipCode: 7330
};

const{firstname: fn, lastname: ln} = personalInformtion;

console.log(`${fn} ${ln}`)