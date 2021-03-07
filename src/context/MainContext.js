import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const MainContect = createContext();

const MainContextProvider = (props) => {
  const [offerPop, setOfferPop] = useState(false);
  const [datePop, setDatepop] = useState(false);
  const [ThankPop, setThankPop] = useState(false);
  const [offers, setOffers] = useState("");
  const [dates, setDates] = useState("");
  const initail = {
    name: "",
    phone: "",
    email: "",
  };
  const [FormData, setFormData] = useState(initail);
  const closeOffer = () => setOfferPop(false);
  const closeDate = () => setDatepop(false);
  const closeThanks = () => {
    setThankPop(false);
    setOffers("");
    setDates("");
    setFormData(initail);
  };
  useEffect(() => {
    const { name, phone, email } = FormData;
    if (name && email && offers && dates && phone) {
      axios.post("http://localhost:3500/info", {
        name,
        email,
        phoneNumber: phone,
        offer: offers,
        time: dates,
      });
    }
  }, [offers, dates]);

  return (
    <MainContect.Provider
      value={{
        setOffers,
        setDates,
        setFormData,
        FormData,
        closeOffer,
        closeDate,
        closeThanks,
        offerPop,
        setOfferPop,
        datePop,
        setDatepop,
        ThankPop,
        setThankPop,
        offers,
        dates,
      }}
    >
      {props.children}
    </MainContect.Provider>
  );
};

export default MainContextProvider;
