function run() {
      let hohe = document.querySelector('#hohe').value;
      let gewicht = document.querySelector('#gewicht').value;
      hohe = hohe / 100;

      const bmi = (gewicht / hohe / hohe).toFixed(1);
      document.querySelector('#bmi').innerHTML = `Dein BMI ist ${bmi}`;
}