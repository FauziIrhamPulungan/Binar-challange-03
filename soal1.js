function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;

  const result = draft + crew * 1.5;
  if (result > 20) console.log("Banyak nih muatan kapalnya");
  else console.log("Lebih banyak muatan orangnya");
  console.log(result);
}

module.exports = Ship;
