import { useEffect, useState } from 'react';
import './App.scss';


function App() {
  const [result, setResult] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (result) {
      setIsVisible(true);
    }
  }, [result]);

  const submitForm = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target)
    const payload = Object.fromEntries(formData);
  

   cachCount(payload);
  }

  function cachCount(payload){
  
    Object.entries(payload).forEach(([key, value]) => {
      payload[key] = Number(value) || 0;
    });
    let total = 0;
    console.log(payload)


      total = (payload.gr1 || 0) * 0.01
      + (payload.gr2 || 0) * 0.02
      + (payload.gr5 || 0) * 0.05
      + (payload.gr10 || 0) * 0.1
      + (payload.gr20 || 0) * 0.2
      + (payload.gr50 || 0) * 0.5
      + (payload.zl1 || 0) * 1
      + (payload.zl2 || 0) * 2
      + (payload.zl5 || 0) * 5
      + (payload.zl10 || 0) * 10
      + (payload.zl20 || 0) * 20
      + (payload.zl50 || 0) * 50
      + (payload.zl100 || 0) * 100
      + (payload.zl200 || 0) * 200
      + (payload.zl500 || 0) * 500;

    console.log(total)
    setResult(printingResult(total))

  }
  function printingResult(sum){
  
    if(sum === 0 || sum === undefined){
      return `Podaj liczbę poszczególnych monet i banknotów w kasie`;
    }else{
   if(Number.isInteger(sum) && sum !==2 && sum !==4 && sum !== 3){
    return `W kasie jest ${sum} zł`
   } else if(sum === 2 || sum === 3 || sum === 4){
    return `W kasie są ${sum} zł`
   } else {
    let int1 = String(sum);
    int1 = parseInt(int1);
    console.log(int1);
    let dec1 = sum - int1;
    dec1 = Math.round(dec1 * 100);
    console.log(dec1);
    if(int1 === 0 && dec1 !==2 && dec1 !==4 && dec1 !== 3){
      return `W kasie jest ${dec1} gr`;
    } else if (dec1 === 2 || dec1  === 3 ||dec1 === 4){
      return `W kasie są ${dec1} gr`;
    } else
    return `W kasie jest ${int1} zł i ${dec1} gr`
   }
   }
  }


  return (
    <div className="App">
        <h1>Kalkulator do podliczenia gotówki w kasie</h1>
        <p>Podaj liczbę poszczególnych monet i banknotów w kasie</p>

        <div id="container">
          <form onSubmit={submitForm}>
          <div id="monety">
            <h3>Monety</h3><br/>
                  <div id="grosze">
                    <label htmlFor="gr1">1gr</label>
                    <input id="gr1" type="number" name="gr1" placeholder="0" min="0"></input>

                    <label htmlFor="gr2">2gr</label>
                    <input id="gr2" type="number" name="gr2" placeholder="0" min="0"></input>

                    <label htmlFor="gr5">5gr</label>
                    <input id="gr5" type="number" name="gr5" placeholder="0" min="0"></input>

                    <label htmlFor="gr10">10gr</label>
                    <input id="gr10" type="number" name="gr10" placeholder="0" min="0"></input>

                    <label htmlFor="gr20">20gr</label>
                    <input id="gr20" type="number" name="gr20" placeholder="0" min="0"></input>

                    <label htmlFor="gr50">50gr</label>
                    <input id="gr50" type="number" name="gr50" placeholder="0" min="0"></input>
                  </div>
                  <div id="zlotowki">
                    <label htmlFor="zl1">1zł</label>
                    <input id="zl1" type="number" name="zl1" placeholder="0" min="0"></input>

                    <label htmlFor="zl2">2zł</label>
                    <input id="zl2" type="number" name="zl2" placeholder="0" min="0"></input>

                    <label htmlFor="zl5">5zł</label>
                    <input id="zl5" type="number" name="zl5" placeholder="0" min="0"></input>
                  </div>
                </div>
                <h3>Banknoty</h3><br/>

                <label htmlFor="zl10">10zł</label>
                <input id="zl10" type="number" name="zl10"  placeholder="0" min="0"></input>

                <label htmlFor="zl20">20zł</label>
                <input id="zl20" type="number" name="zl20"  placeholder="0" min="0"></input>

                <label htmlFor="zl50">50zł</label>
                <input id="zl50" type="number" name="zl50"  placeholder="0" min="0"></input>

                <label htmlFor="zl100">100zł</label>
                <input id="zl100" type="number" name="zl100" placeholder="0" min="0"></input>

                <label htmlFor="zl200">200zł</label>
                <input id="zl200" type="number" name="zl200" placeholder="0" min="0"></input>

                <label htmlFor="zl500">500zł</label>
                <input id="zl500" type="number" name="zl500" placeholder="0" min="0"></input>

          
            <button type='submit'>Podlicz</button>
          </form>
          <div id="wynik">
          <h2 id="result-h2" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>{result}</h2>
      </div>
          
        </div>
    </div>
   
  );
}

export default App;
