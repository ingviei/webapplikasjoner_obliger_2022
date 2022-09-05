//import 'styles.css';

// Statisk tekst som brukes til å søke i
const text =
  "Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.";

const longestWord = (str) => {
  const textArray = str.split(" ");
  console.log(textArray);

  let first = textArray[0];
  let longest = first;

  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i].length > longest.length) {
      longest = textArray[i];
    }
  }
  return longest;
};

console.log(longestWord(text));
alert(longestWord(text));