import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import bracelete1 from "./assets/B1-2A.jpg"

import { useState, useEffect } from "react";

import "./App.css";

//export default function Bracelete({ id, name, price, image });

function App() {
  const [quantity, setQuantity] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const handleClickPlus = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const handleClickMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const price = 150;

  useEffect(() => {
    const total = quantity * price;
    setTotalPrice(total);
  }, [quantity, price]);
  return (
    <>
      <div className="bg-orange-100">
        
        <Header
          title="Chiquitina Complements"
          subtitle="HAND MADE BRACELETES"
        />
      </div>

      <div>
        <div className="m-3 md:m-9">
          <div className="flex justify-center gap-10">
            <Article
              name="Fantasy Bracelet"
              price={150}
              size="Only medium size available"
              onclickMinus={() => handleClickMinus()}
              onclickPlus={() => handleClickPlus()}
              quantity={quantity}
              totalPrice={totalPrice}
            >
              <img
                className="w-full rounded-xl"
                src={bracelete1}
                alt="bracelete made of black leather with sylver"
              />
            </Article> 
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
