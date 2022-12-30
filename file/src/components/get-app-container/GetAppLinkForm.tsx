import axios from "axios";
import Button from "../../shared/Button";
import isMobilePhone from "validator/lib/isMobilePhone";
import isEmail from "validator/lib/isEmail";

import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const GetAppLinkButton = () => (
  <Button classes={"get-app-button"}>GET APP LINK</Button>
);

export const GetAppLinkForm = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [phoneErrorMsg, setPhoneErrorMsg] = useState("");

  const onEditEmail = (e: any) => {
    const enteredValue = e.target.value.trim() || "";
    setEmail(enteredValue);
  };

  const onEditPhoneNumber = (e: any) => {
    const enteredValue = e.target.value.trim() || "";
    setPhoneNumber(enteredValue);
  };

  const setFieldValues = () => {
    setEmail("");
    setPhoneNumber("");
    setEmailErrorMsg("");
    setPhoneErrorMsg("");
  };

  const getAppLinkFromService = (key: string, value: string): void => {
    const requestObj: any = {};
    requestObj[key] = value;
    axios
      .post("http://65.1.216.213:9091/api/admin/getAppLink", requestObj)
      .then((response: any) => {
        console.log("Success");
        setFieldValues();
        alert(response.data.message);
      })
      .catch((error: Error) => {
        console.log("Error when calling service: ", error);
      });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    let isValidEmail = false;
    let isValidPhoneNumber = false;

    if (email) {
      isValidEmail = isEmail(email);
      !isValidEmail
        ? setEmailErrorMsg("Please enter valid email")
        : setEmailErrorMsg("");
    }
    if (phoneNumber) {
      isValidPhoneNumber = isMobilePhone(`+91${phoneNumber}`, "en-IN");
      !isValidPhoneNumber
        ? setPhoneErrorMsg("Please enter valid phone number")
        : setPhoneErrorMsg("");
    }

    if (email && !phoneNumber) {
      isValidEmail && getAppLinkFromService("email", email);
    } else if (phoneNumber && !email) {
      isValidPhoneNumber &&
        getAppLinkFromService("mobileNumber", `+91${phoneNumber}`);
    } else {
      axios
        .post("http://65.1.216.213:9091/api/admin/getAppLink", {
          email: email,
          mobileNumber: `+91${phoneNumber}`,
        })
        .then((response: any) => {
          console.log("Success");
          setFieldValues();
          alert(response.data.message);
        })
        .catch((error: Error) => {
          console.log("Error when calling service: ", error);
        });
    }
  };

  return (
    <form className="get-app-link-form" onSubmit={onSubmit}>
      <div className="get-app-link-form__input">
        <FontAwesomeIcon icon={faEnvelope} />
        <input
          id="app-email"
          type="text"
          className="text-input-email"
          placeholder="Email"
          autoFocus
          value={email}
          onChange={onEditEmail}
          autoComplete="off"
        />
        {emailErrorMsg && (
          <p className="get-app-link-form__error">{emailErrorMsg}</p>
        )}
      </div>
      <div className="get-app-link-form__input">
        <FontAwesomeIcon icon={faPhone} />
        <div className="get-app-link-form__input-phone--extension">+91</div>
        <input
          id="app-phone"
          type="text"
          className="text-input-phone"
          placeholder="Number"
          value={phoneNumber}
          onChange={onEditPhoneNumber}
          autoComplete="off"
          maxLength={10}
        />
        {phoneErrorMsg && (
          <p className="get-app-link-form__error">{phoneErrorMsg}</p>
        )}
      </div>
      <GetAppLinkButton />
      <div className="get-app-link-form__advisory">
        You can fill both or either email / phone number to get the link.
      </div>
    </form>
  );
};

export default GetAppLinkForm;
