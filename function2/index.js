function addressMaker(adress) {
  const {city, state} = adress;

  const newAddres = {
    city,
    state,
    contry: 'United States'
  };
  console.log(`${newAddres.city}, ${newAddres.state}, ${newAddres.contry}`)
}

addressMaker({city: 'Efrat', state: 'Israel'});